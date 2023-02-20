const path = require('path');

module.exports = {
    target:'node',
    mode : 'production',
    entry:'./server/index.js',
    output: {
        path:path.resolve(__dirname+'/dist'),
        filename:'./server.js'
    },
    module:{
        rules:[
            {
                test: /\.ts[x]?$/,
                exclude:/node_modules/,
                loader: "ts-loader",
            }, 
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env","@babel/preset-react","@babel/preset-typescript"],
                        plugins: ['@babel/plugin-syntax-jsx']}
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
        ],
    },
    resolve:{
        extensions:['.js','.jsx','.json','.tsx','.css'],
        fallback:{
            http:require.resolve("stream-http"),
            url: require.resolve("url/"),
            buffer: require.resolve("buffer/") 
        }
    },
    devServer:{
        static:{
            directory:'./dist'},
        open:true
    }

}
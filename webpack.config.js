const path = require('path');

module.exports = {
    target:'node',
    mode : 'production',
    entry:'./src/server/index.js',
    output: {
        path:path.resolve(__dirname+'/dist'),
        filename:'sample.js'
    },
    module:{
        rules:[
            {test:/\.js[x]?$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:["@babel/preset-env","@babel/preset-react"],
                    plugins: ['@babel/plugin-syntax-jsx']}
            }
            }    
        ],
    },
    resolve:{
        extensions:['.js','.jsx','.json','tsx','html'],
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
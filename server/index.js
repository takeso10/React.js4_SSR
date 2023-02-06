const express = require('express')
const app = express()
const ReactDOMServer = require('react-dom/server')
const path = require('path');
const fs = require('fs')
const Router =require('../src/Router.tsx')
const PORT = process.env.PORT || 8000

app.get('/',(req,res)=>{
  const app = ReactDOMServer.renderToString(<Router />)

  const html = `
    <html lang="en">
      <head>
          <script src="client.js" async defer></script>
      </head>
      <body>
          <div id="root">${app}</div>
      </body>
    </html>
  `;
   res.send(html);
})

app.ude(express.static('./server'))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
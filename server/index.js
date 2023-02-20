import Test from '../src/test'
import express from "express"
import ReactDOMServer from "react-dom/server"
import React from 'react'
//import Router from '../src/Router'
//import App from '../src/App'
/*
const Router = require('../src/Router');
const express = require('express')
const ReactDOMServer = require('react-dom/server')
*/
const app = express()
const PORT = 8000;
app.use(express.static('../dist'))
app.get('/',(req,res)=>{
  const app = ReactDOMServer.renderToString(<Test/>);

  const html = `
    <html lang="en">
      <head>
        <script src="index.js" type="text/javascript"></script>
      </head>
      <body>
        <div id="root">${app}</div>
      </body>
    </html>
  `;
  res.send(html);
})



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
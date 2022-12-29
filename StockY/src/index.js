//! lay thu vien 
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {engine} = require ('express-handlebars');
const route = require('./routes')

//! khoi tao web
const app = express()
const port = 3000

//! thao tac voi file tinh VD: /img/logo.png
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json())


//! http logger 
//app.use(morgan('combined'))

//!templates engine
app.engine('hbs',engine({
    extname: '.hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources/views'))

//! routing
route(app)

//! start web server and listen
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
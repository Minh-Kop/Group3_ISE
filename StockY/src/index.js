const path = require('path')
//! đang sử dụng http
const express = require('express')// tìm express trong folder module
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express() //khởi web site
const port = 3000 //port of server

//! dùng express để xử lý các trường hợp path tĩnh: http://localhost:3000/img/logo.png
app.use(express.static(path.join(__dirname, 'public')))

//!http logger
app.use(morgan('combined'))

//!template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs' //! modifi tên file handlebars => hbs 
}))//định nghĩa
app.set('view engine','hbs')//sử dụng
//! custom path view folder
app.set('views',path.join(__dirname,'resources/views'));
//console.log('PATH: ',path.join(__dirname,'resources/views'))
//! render giao diện dựa trên handlebar
app.get('/', (req, res) => { //route function
  res.render('home')
})

app.get('/news', (req, res) => { //route function
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
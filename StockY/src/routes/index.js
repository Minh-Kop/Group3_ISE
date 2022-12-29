const searchRouter = require('./search')

function route(app){
    app.use('/search',searchRouter)
    app.get('/', (req, res) => {
        res.render('home')
      })
      
    
}

module.exports = route
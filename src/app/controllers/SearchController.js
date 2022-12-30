
class SearchController{
    //get /search
    index(req,res){
        res.render('search')
    }
    show(req,res){
        res.send('new detail')
    }
}

module.exports = new SearchController
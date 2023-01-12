const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');
//! home page
class HomeController {
    index(req, res, next) {
        Product.find({})
            .then((products) =>
                res.render('home', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    searchproduct(req,res,next) {
        var key = req.body.key;
        console.log(key);
        Product.find({$or: [{name:key}]})
        .then((product) =>
            res.render('home', {
            products: mutipleMongooseToObject(product),
            }),
        )
        .catch(next);
    }
    jordan(req, res, next) {
        Product.find({brand: 'Air Jordan'})
            .then((products) =>
                res.render('brand', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    nike(req, res, next) {
        Product.find({brand: 'Nike'})
            .then((products) =>
                res.render('brand', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    puma(req, res, next) {
        Product.find({brand: 'Puma'})
            .then((products) =>
                res.render('brand', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    adidas(req, res, next) {
        Product.find({brand: 'Adidas'})
            .then((products) =>
                res.render('brand', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    male(req, res, next) {
        Product.find({gender: 'male'})
            .then((products) =>
                res.render('brand', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    female(req, res, next) {
        Product.find({gender: 'female'})
            .then((products) =>
                res.render('brand', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    sneaker(req, res, next) {
        Product.find({category: 'sneaker'})
            .then((products) =>
                res.render('brand', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }

    shoe(req, res, next) {
        Product.find({category: 'shoe'})
            .then((products) =>
                res.render('brand', {
                    products: mutipleMongooseToObject(products),
                }),
            )
            .catch(next);
    }
    
}

module.exports = new HomeController();

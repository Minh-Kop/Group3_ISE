const searchRouter = require('./search');
const homeRouter = require('./home');
const productsRouter = require('./products');

  function route(app) {
    app.use('/search', searchRouter);
    app.use('/products', productsRouter);
    app.use('/', homeRouter);
}

 module.exports = route;

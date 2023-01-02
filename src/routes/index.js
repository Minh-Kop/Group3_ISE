const searchRouter = require('./search');
const homeRouter = require('./home');
const productsRouter = require('./products');
//!mặc định luôn bắt đầu từ file index
function route(app) {
    //! dự trên path mà routing 
    app.use('/search', searchRouter);
    app.use('/products', productsRouter);
    app.use('/', homeRouter);
}

 module.exports = route;

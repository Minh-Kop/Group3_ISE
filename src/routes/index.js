const searchRouter = require('./search');
const homeRouter = require('./home');
const productsRouter = require('./products');
const signInRouter = require('./sign-in');
const signUpRouter = require('./sign-up');

//!mặc định luôn bắt đầu từ file index
function route(app) {
    //! dự trên path mà routing 
    app.use('/search', searchRouter);
    app.use('/products', productsRouter);
    app.use('/sign-in', signInRouter);
    app.use('/sign-up', signUpRouter);
    app.use('/', homeRouter);
}

module.exports = route;

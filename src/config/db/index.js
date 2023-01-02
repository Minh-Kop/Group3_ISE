const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
async function connect() {
    try {
        // await mongoose.connect('mongodb://localhost:27017/StockY', {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        // });
        await mongoose.connect('mongodb://127.0.0.1/StockY');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };

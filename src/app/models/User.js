const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String,
    usrname: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

//module.exports = mongoose.model('DataAccount', User);
const User = mongoose.model('User', UserSchema);
module.exports = User;
//module.exports = mongoose.model('Product', Product,'StockY');

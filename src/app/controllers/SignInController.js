const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');
//! đăng nhập
class SignInController {
    //get /sign-up
    index(req, res) {
        res.render('sign-in');
    }
    check(req, res) {
        var usr = req.body.usrname;
        var pwd = req.body.password;
        User.findOne({$or: [{usrname:usr}]})
        .then(user => {
            if(user) {
                res.render('home');
                
            }
            else {
                res.json({
                    message: 'no user found !'
                })
            }
        })
}
}
module.exports = new SignInController();

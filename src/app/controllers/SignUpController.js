//! đăng ký 
const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');
class SignUpController {
    //get /sign-up
    index(req, res) {
        res.render('sign-up');
    }
    create(req, res) {
        const user = new User({
            usrname: req.body.usrname,
            email: req.body.email,
            password: req.body.password
        });
        user.save()
        // .then(user => {
        //     res.json({
        //         message: 'Sign up success !!'
        //     })
        // })
        // .catch(error => {
        //     res.json({
        //         message: "Sign up fail !!"
        //     })
        // })
        //! đăng kí xong trả về trang đăng nhập
        res.render('sign-in');
    }
}

module.exports = new SignUpController();

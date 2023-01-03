//! đăng nhập
class SignInController {
    //get /sign-up
    index(req, res) {
        res.render('sign-in');
    }
    
}

module.exports = new SignInController();

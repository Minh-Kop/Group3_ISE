//! đăng ký 
class SignUpController {
    //get /sign-up
    index(req, res) {
        res.render('sign-up');
    }
    
}

module.exports = new SignUpController();

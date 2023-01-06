const express = require('express');
const router = express.Router();

const signUpController = require('../app/controllers/SignUpController');
router.get('/', signUpController.index);
router.post('/create', signUpController.create);
module.exports = router;

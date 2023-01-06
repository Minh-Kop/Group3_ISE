const express = require('express');
const router = express.Router();

const signInController = require('../app/controllers/SignInController');
router.get('/', signInController.index);
router.post('/check',signInController.check)
module.exports = router;

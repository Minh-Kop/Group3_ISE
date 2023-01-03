const express = require('express');
const router = express.Router();

const signInController = require('../app/controllers/SignInController');
router.get('/', signInController.index);

module.exports = router;
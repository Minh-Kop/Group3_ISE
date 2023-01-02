const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/ProductController');
//! custom query parameters bằng /:
router.get('/:slug', courseController.show);

module.exports = router;

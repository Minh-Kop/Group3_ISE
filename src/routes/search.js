const express = require('express');
const router = express.Router();
//! lấy controller 
const searchController = require('../app/controllers/SearchController');
router.get('/:slug', searchController.show);
router.get('/', searchController.index);

module.exports = router;

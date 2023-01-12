const express = require('express');
const router = express.Router();
//! lấy controller 
const searchController = require('../app/controllers/SearchController');
router.get('/', searchController.index);
router.post('/:key', searchController.searchproduct);
module.exports = router;

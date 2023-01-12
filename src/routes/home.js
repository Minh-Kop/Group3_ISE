const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');
router.get('/jordan', homeController.jordan);
router.get('/nike', homeController.nike);
router.get('/puma', homeController.puma);
router.get('/adidas', homeController.adidas);
router.get('/male', homeController.male);
router.get('/female', homeController.female);
router.get('/sneaker', homeController.sneaker);
router.get('/shoe', homeController.shoe);
router.post('/:key', homeController.searchproduct);
router.get('/', homeController.index);
module.exports = router;

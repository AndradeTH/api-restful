const router = require('express').Router()

const ProductsController = require('../controllers/products')

router.get('/products/:id?', ProductsController.get)
/* router.post('/products', ProductsController.post)
router.get('/products', ProductsController.get)
router.get('/products', ProductsController.get)  */

module.exports = router
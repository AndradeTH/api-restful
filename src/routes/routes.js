const router = require('express').Router()

const ProductsController = require('../controllers/products')


// A interrogação depois do id é usada pra dizer que o id não é obrigatório.
// Se a interrogação ele é obrigatório
router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
router.delete('/products/:id', ProductsController.remove) 

module.exports = router
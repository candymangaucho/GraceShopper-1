const express = require('express')
const cartRouter = express.Router()
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env
const requireUser = require('./middleware/requireUser');

const { getCart, 
    addProductToCart,
    updateProductQty,
    removeProductFromCart,
    clearCart,
    sendOrder 
} = require('../db/cart') 

cartRouter.get('/', async(req, res) => {
    const cart = await getCart
    return res.send(
        cart
    )
})

cartRouter.post('/', requireUser, async(res, req, next) => {

    const {product, quantity, total } = req.body

    try{

        const cart = await addProductToCart({product, quantity, total})

        return res.send(
            cart
        )
    }catch ({name, message}){
        next({name, message})
    }
})

cartRouter.patch('/', requireUser, async(res, req, next) =>{
    const
})

cartRouter.delete


module.exports = {
    cartRouter }
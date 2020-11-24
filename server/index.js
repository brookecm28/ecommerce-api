const express = require('express')
// const products = require('../products.json')
const getProducts = require('./getProducts.js')
const userId = require('./userId')
const app = express()

app.get('/api/products', getProducts)
app.get('/api/products/:id', userId)


app.listen(5000, ()=>console.log('Server listening on port 5000'))
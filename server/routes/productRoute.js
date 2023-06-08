const express=require('express');
const cors=require('cors');
const app=express.Router();

app.use(express.json());
app.use(cors());
const productController=require('../controller/productController');

app.get('/all-product',productController.FetchProduct);
app.get('/product/:id',productController.FetchProductById);
app.get('/cart/:id',productController.FetchCartById);
app.put('/increase-quantity/:id',productController.IncreaseQuantityById);
app.put('/decrease-quantity/:id',productController.DecreaseQuantityById);
app.get('/cart_product/:id',productController.FetchCartProductById);
app.post('/add-cart',productController.AddDataCart);
app.get('/cart-product',productController.FetchCartProduct);
app.get('/search-product/:category',productController.FetchProductByCategory);
app.delete('/delete-cart/:id',productController.RemoveCartProduct);

module.exports=app;
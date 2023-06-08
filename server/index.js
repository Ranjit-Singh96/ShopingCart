const express=require('express');
const app=express();
const productRoutes=require('./routes/productRoute');

app.use('/api',productRoutes);

app.listen(5000,()=>console.log("Server running in development mode on port 5000"));
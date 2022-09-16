const express = require('express');
const product = require('./products/api');
 
const app = express();

const PORT = process.env.PORT || 5050;
 

 app.use("/products/api",product);

app.listen(PORT,()=>console.log('server is running at',PORT)
);
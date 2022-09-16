const express = require('express');
const product = require('./products/api');
const cors = require('cors');
 
const app = express();

const PORT = process.env.PORT || 5050;
 
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

 app.use("/products/api",product);

app.listen(PORT,()=>console.log('server is running at',PORT)
);
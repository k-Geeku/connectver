const express = require('express');
const cors  = require("cors")
const data = require("./data.json")
const app = express();

const PORT = process.env.PORT || 5050;
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
})); 

app.get('/',(req,res) => {
    res.send(data);
})

app.listen(PORT,()=>console.log('server is running at',PORT)
)
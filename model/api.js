// const express = require("express");
// const dbConnect = require('./mongodb');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send({name:"krunal"});
// });

// app.listen(5000)



const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
})

app.post('/',async(req,res)=>{
    console.log(req.body)
    let data = await dbConnect();
    let result = await data.insert(req.body)
    req.send(result)
    // res.send({name:"krunal prajapati"})
})


app.listen(5000);
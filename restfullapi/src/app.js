const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/students')

const Student = require('./models/students')

const app = express();

app.use(express.json());

app.post('/',(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);

    user.save((function(err) {
        if(err) {
            console.log("err", err) 
        } else {
            res.send(user);
        }
    }))
    
})

app.listen(8000);
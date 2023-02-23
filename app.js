const express = require('express');

const app= express();

const PORT = process.env.PORT || 3210;

app.use(express.json())

app.get('/user/:id',(req,resp)=>{
    resp.status(200).send({
        status:"user with ID"+req.params.id
    })
})

app.post('/user',(req,resp)=>{
    resp.status(200).send({
        status:"user created",
        data:req.body
    })
})

app.put('/user/:id',(req,resp)=>{
    resp.status(200).send({
        status:"user updated with id"+req.params.id
    })
})


app.delete('/user/:id',(req,resp)=>{
    resp.status(200).send({
        status:"user deleted with id"+req.params.id
    })
})




app.listen(PORT,()=>{
    console.log('server running on port 3210');
});
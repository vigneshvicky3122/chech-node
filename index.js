const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const PORT = 7000;
app.use(bodyParser.json());

var food = [];
app.get('/food',(req,res)=>{
    res.send({
        statusCode:200,
        data:food,
    })
})  
app.post('/add-food',(req,res)=>{
        food.push(req.body);
        res.send({
          statusCode:200,  
          message:'food added',
        })

    })
    app.put('/edit-food/:id',(req,res)=>{
        food.splice(req.params.id,1,req.body);
        res.send({
            statusCode:200,
            message:'Food Updated'
        })
    })
    app.delete('/delete-food/:id',(req,res)=>{
       if(req.params.id<food.length){
        food.splice(req.params.id)
        res.send({
            statusCode:200,
            message:'Food deleted'
        })
       }
       else {
        res.send({
            statusCode:404,
            message:'Not found'
        })
        }
       
    })



app.listen(PORT,()=>console.log('server is run to PORT '+PORT)); 
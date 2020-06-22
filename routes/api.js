const express=require('express')
const router=express.Router()
const Todo=require('../db/model')

router.get('/',(req,res)=>{
   Todo.find((err,docs)=>{
    if(!err){
       res.send(docs)
    }
    else{
        console.log(err)
    }
})

})


router.post('/',(req,res)=>{
    var messagem=new Todo()
    messagem.title=req.body.title
    messagem.save((err,doc)=>{
        if (!err){
            res.send(doc)
        }
        else{
            console.log(err)
        }
    })
})


 router.delete('/:id',(req,res)=>{
   Todo.findByIdAndRemove(req.params.id,(err,doc)=>{
    if (!err){
        res.send(doc)
    }
    else{
        console.log(err)
    }
})
})

router.get('/edit/:id',(req,res)=>{
    Todo.findById(req.params.id,(err,doc)=>{
        if (!err){
           res.send(doc)
        }
        else{
            console.log(err)
        }
    })
   
    })

router.put('/update/:id',(req,res)=>{
    var updatedRecord={
        title:req.body.title
    }
Todo.findByIdAndUpdate(req.params.id,{$set:updatedRecord},{new:true},(err,doc)=>{
    if(!err) res.send(doc)
    else{
        console.log(err)
    }
})
})
 
module.exports=router
require('./db/db')
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const api=require('./routes/api')
app.use(bodyParser.json())
app.use('/todos',api)
app.use(cors({origin:'http://localhost:3000'}))
app.listen(4000,()=>{
    console.log('Server started in 4000')

})



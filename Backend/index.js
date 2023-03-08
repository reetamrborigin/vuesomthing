const express = require('express')
const app = express()
const port = 6000 


app.use(express.json())


app.listen(port,()=>{
    console.log(`lesten on port no ${port}`);
})


const mainRouter = require('./routes/index');

app.use("/",mainRouter);
app.get('*',(req,res)=>{
    res.status(404).send("not found")
})
const express = require("express")
const cors = require('cors')

const app =  express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())




app.listen(3500,()=>{
    console.log(`Your server running on port 3500`);
})
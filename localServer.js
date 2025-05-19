// const http=require('http')
// const port=3000
// const server=http.createServer((req,res)=>{
//     res.writeHead(200)
//     res.end("Hello")
// })

// server.listen(port,()=>{
//     console.log(`Server listening to port ${port}`)
// })

const express=require('express')
const app=express()

app.get('/',(req,res)=>{
 res.status(200).send("Hello Express")
})

app.listen(3000,()=>{
    console.log("server running at 3005")
})


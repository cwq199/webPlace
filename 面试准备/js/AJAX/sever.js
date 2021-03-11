const {request} = require('express')
const response = require('express')
const express = require('express')

const app =express()
// const fs = require('fs')

app.all('/test',function(req,res){
        response.setHeader("Access-Control-Allow-Origin","*")
        response.setHeader("Access-Control-Allow-Headers","*")
        const body = req.body
        console.log(body)
        const data = {res:1}
        response.send(JSON.stringify(data))
})

app.listen(8000,()=>[
        console.log("端口8000监听中")
])
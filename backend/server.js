import express from 'express';
import {products} from './data.js'
import cors from "cors";


let app=express();
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/api/products",(req,res)=>{
    res.send(products)
})
app.listen("3001",()=>{
    console.log("server listening on port 3001")
})
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
app.get("/api/products/:id",(req,res)=>{
    const product_id=req.params.id;
    const product=products.find(item=>item.id==product_id);
    if(product){
        res.send(product);
    }else{
        res.status(404).end("no such file");
    }
   
   
})
app.listen("3001",()=>{
    console.log("server listening on port 3001")
})
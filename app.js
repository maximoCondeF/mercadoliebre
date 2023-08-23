const express = require("express");
const app = express();
const path = require("path");
const PORT = 3030

const publicPath = path.resolve(__dirname+"/public");
console.log(publicPath);

app.use(express.static(publicPath));

app.listen(PORT,()=>console.log("Up and running, mate"));

app.get("/", (req,res)=>{
    res.sendFile((path.join(__dirname, "./views/home.html")))
});

app.get("/product-creation", (req,res)=>{
    res.sendFile((path.join(__dirname, "./views/product-creation.html")))
});

app.get("/register", (req,res)=>{
    res.sendFile((path.join(__dirname, "./views/register.html")))
});

app.get("/login", (req,res)=>{
    res.sendFile((path.join(__dirname, "./views/login.html")))
});

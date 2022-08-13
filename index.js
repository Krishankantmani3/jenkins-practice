var express = require("express");
var app = express();


app.get("/", (req, res)=>{
    res.status(200).json({ msg: "hello" });
});

app.listen(4000, ()=>{
    console.log("server started .....");
});
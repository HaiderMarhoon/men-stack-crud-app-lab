const express = require("express")

const app = express();

//get test
app.get("/test" , (req,res) =>{
    res.render("test.ejs")
})

app.listen(3000, ()=>{
    console.log("listening port 3000")
})
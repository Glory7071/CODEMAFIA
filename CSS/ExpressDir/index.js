const express = require('express');
const app = express();

let port = 8080;

app.listen(port,() => {
   console.log(`Example app listening on port ${port}`);  
});
//app.use((req,res) => {
  // console.log("request received");
 //res.send("this is a basic response");
//});
app.get("/",(req,res) => {
   res.send("hello i am  root path");
});

app.get("/apple",(req,res) => {
   res.send("you contacted apple path");
});
app.get("/orange",(req,res) => {
   res.send("you contacted orange path");
});
//app.get("*",(req, res ) => {
  // res.send("this path is not exit");
//});

app.post("/",(req,res) =>{
   res.send("you sent a post request to root ")
});
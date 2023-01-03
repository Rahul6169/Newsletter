const express=require("express");
const app=express();
const request=require("request");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  var firstName=req.body.fName;
  var lastName=req.body.lName;
  var email=req.body.email;
  console.log(firstName,lastName,email);
});
app.listen(3000,function(){
  console.log("server is running");
})
//API KEY
//446f4b40335ca70a0b2c4ebeb2346253-us14
//unique id
//978a240008

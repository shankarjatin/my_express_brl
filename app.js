const express= require("express");
const app = express()

app.get("/",function(req,res){
    var name =""
    res.send(`your name is ${name}`)
})
app.get("/toUppercase",function(req,res){
    console.log(req.query);
    var name = req.query.name;
    name =name.toUpperCase()
    res.send(`my name is ${name},my fav movie is ${movie}`)
})
app.get("/route1/:p",(req,res)=>{
    console.log(req.params);
    res.send("OK")
})


app.get("/calculate/:operation",(req,res) => 
{
  const opr = req.params.operation
  if(opr == "add")
  {
  const num1 = Number(req.query.num1)
  const num2 = Number(req.query.num2)
  const result = num1 + num2
  res.send(result + "")
  }
  else {
    res.send("operation not found");
  }
})


app.listen(8000, function(){
    console.log("Server is up");
})
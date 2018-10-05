
var fs =require('fs')
var express=require('express')
var app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
var contents = fs.readFileSync("test.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);
 
 newArray = []
 jsonContent.forEach (function(item) {
     {
         newArray.push(Object.values(item))
     }
 })
 //console.log(jsonContent);
 const time1 = process.hrtime();
 var result=[]
 var found = jsonContent.forEach(function(item){
    if(item.first_name === "Jone") 
    //if(item.gender==="Female")
      result.push(item)

 })
const time2 = process.hrtime();

var dataSet=jsonContent.length
var resultSet=result.length
var time=time2[1] - time1[1]
console.log("Data Set: "+dataSet+" result Set: "+resultSet+" Time: "+time)


app.get('/',function(req,res){
  res.render('index',{title:"Add a Task"})
  //res.send(jsonContent)
})
app.get('/read',function(req,res){
  res.render('read',{title:"Add a Task"})
  //res.send(jsonContent)
})
app.get('/json',function(req,res){
  res.send(jsonContent)
})
app.listen(3000,function(err){
  console.log('http://localhost:3000')
})
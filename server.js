var http = require('http');
var express = require('express');
var app = express();
var server= http.Server(app);
var bodyParser = require("body-parser");

var dummyArticle = {
  title: "Test article from server",
  content: "Test content for this article"
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.get('/second',function(req,res){
    res.sendFile(__dirname+'/second.html')// var http = require('http');
  })
app.get('/form',function(req,res){
    res.sendFile(__dirname+'/form.html')
})
app.get('/article',function(req,res){
  res.render("article.ejs", {article: dummyArticle})
})
app.post('/article/new', function(req, res){
  console.log(req.body)
  res.send({message: "data received"})
})
// var fs = require('fs');
// var server = http.createServer(function(req, res){
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   fs.readFile('index.html', function(err, data){
//       if(err){
//           return console.log("File read error")
//       }
//       console.log(data);
//       res.end(data);
//   })
// });
server.listen(3000, 'localhost', function(){
  console.log('Server running');
});

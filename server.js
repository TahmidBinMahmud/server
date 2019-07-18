var http = require('http');
var express = require('express');
var app = express();
var server= http.Server(app);
var bodyParser = require("body-parser");
//var mongo = require('mongodb')

var db_url = "mongodb://localhost:27017"

//for c9
var db;
//var db_url = "mongodb://"+process.env.IP+":27017"
var db_url = "mongodb+srv://Tahmid:asdf@cluster0-mzzjc.mongodb.net/test?retryWrites=true&w=majority"
/* CW 9b*/
var mongoose = require("mongoose");

mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('Could not connect to mongodb');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
  response.render('index.ejs');
});

app.get('/about-page', function(request, response){
  response.render('about.ejs');
});

require('./routes/article-routes.js')(app);
server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
  console.log('Server running');
});

// mongo.MongoClient.connect(db_url, {useNewUrlParser: true},
//   function(err, client){
//     if(err){
//       console.log("Coud Not Connect DB")
//     }else{
//       db = client.db('node-cw9')
//     }
// })

// var dummyArticle = {
//   title: "Test article from server",
//   content: "Test content for this article"
// }

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/',function(req,res){
//     res.sendFile(__dirname+'/index.html')
// })
// app.get('/second',function(req,res){
//     res.sendFile(__dirname+'/second.html')// var http = require('http');
//   })
// app.get('/form',function(req,res){
//     res.sendFile(__dirname+'/form.html')
// })
// app.get('/article',function(req,res){
//   res.render("article.ejs", {article: dummyArticle})
// })
// app.post('/article/new', function(req, res){
//   console.log(req.body)
//   db.createCollection("articles", function(err, collection){
//     console.log(collection)
//   })
//   var collection = db.collection("articles")
//   collection.save(req.body)

//   res.send({message: "data received"})
// })
// // var fs = require('fs');
// // var server = http.createServer(function(req, res){
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/html');
// //   fs.readFile('index.html', function(err, data){
// //       if(err){
// //           return console.log("File read error")
// //       }
// //       console.log(data);
// //       res.end(data);
// //   })
// // });
// server.listen(3000, 'localhost', function(){
//   console.log('Server running');
// });

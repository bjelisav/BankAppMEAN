"use strict";
const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');
const fs = require('fs');

const db = mongojs('bankAppDb',['accounts','login'])
const app = express();
const ObjectId = mongojs.ObjectId;

var logFile = '';


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get("/api",function(req,res){
  db.accounts.find(function(err,docs){
    if(err){
      throw(err);
    }
    res.send(docs);
  })
})
app.get("/getData",function(req,res){
  db.accounts.find(function(err,docs){
    if (err) {
      throw(err);
    }
    res.send(docs);
  })
})
app.get("/getLoginData",function(req,res){
  db.login.find(function(err,docs){
    if (err) {
      throw(err)
    }
    res.send(docs);
  })
})
app.post('/addAccount',function(req,res){
  var obj = req.body;

  db.accounts.insert({name : obj.name,deposit : obj.deposit, card : obj.card},function(err,docs){
    if (err) {
      throw(err)
    }
    res.send(docs);
  })
})
app.post('/deleteAccount',function(req,res){
  var id = req.body.id;
  db.accounts.remove({_id:ObjectId(id)},function(err,docs){
    if (err) {
      throw(err);
    }
    res.send(docs);
  })
})

app.post('/editAccount',function(req,res){
  var obj = req.body;
  db.accounts.update({_id:ObjectId(obj._id)},{$set:{name : obj.name,deposit : obj.deposit,card:obj.card}},function(err,docs){
    if (err) {
      throw(err)
    }
    res.send(docs);
  })
})

//admin methods
app.post('/addUser',function(req,res){
  var obj = req.body;
  console.log(obj);
  db.login.insert({username: obj.username, password:obj.password },function(err,docs){
    if (err) {
      throw(err);
    }
    res.send(docs);
  })
})

app.post('/deleteUser',function(req,res){
  var id = req.body.id;
  db.login.remove({_id:ObjectId(id)},function(err,docs){
    if (err) {
      throw(err)
    }
    res.send(docs);
  })
})

//log data into log db

app.post('/logData',function(req,res){
  var obj = req.body;
  console.log(obj);
  db.logs.insert({user:obj.user,account:obj.account,action: obj.action,time: obj.time},function(err,docs){
    if (err) {
      throw(err);
    }
    res.send(docs);
  })
})

app.get('/getLogData',function(req,res){
  db.logs.find(function(err,docs){
    if (err) {
      throw(err);
    }
    var text = '';
    logFile = docs;
    for (var i = 0; i < logFile.length; i++) {
      text += "User ID: " +logFile[i].user +" ,account: "+logFile[i].account+" ,action: "+ logFile[i].action +" ,time: " +logFile[i].time+ "\n";
    }
    fs.writeFile('./public/log.txt',text,function(err,docs){
      if (err) {
        throw(err);
      }
      console.log("Data written successfully!");
    })
    res.send(docs);
  })
})

app.listen(3000,function(){
  console.log("Listening to port 3000");
})

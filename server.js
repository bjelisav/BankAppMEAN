"use strict";
const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');

const db = mongojs('bankAppDb',['accounts'])
const app = express();
const ObjectId = mongojs.ObjectId;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.get("/getData",function(req,res){
  db.accounts.find(function(err,docs){
    if (err) {
      throw(err);
    }
    res.send(docs);
  })
})
app.post('/addAccount',function(req,res){
  console.log(req.body);
  var obj = req.body;

  db.accounts.insert({name : obj.name,deposit : obj.deposit, card : obj.card},function(err,docs){
    if (err) {
      throw(err)
    }
    res.send(docs);
  })
})
app.post('/deleteUser',function(req,res){
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


app.listen(3000,function(){
  console.log("Listening to port 3000");
})

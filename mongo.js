

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/test');

var collection = db.get('users');

collection.find({},{},function(e,docs){
   console.log(docs);
});

collection.insert({"dudu" : 54});
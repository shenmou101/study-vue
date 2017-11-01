var express = require('express');
var app = express();
var fs = require("fs");
var url = require("url");

app.use(express.static('www'));

app.get("/getAll",function(req,res){
	fs.readFile("./data/todos.json",function(err,data){
		res.json({"results" : JSON.parse(data.toString()).results});
	});
});

app.get("/add",function(req,res){
	var title = url.parse(req.url,true).query.title;
	var id = url.parse(req.url,true).query.id;
	//先读取再写
	fs.readFile("./data/todos.json",function(err,data){
		var arr = JSON.parse(data.toString()).results;
		arr.push({"id" : id , "title" : title , "done" : false});
		fs.writeFile("./data/todos.json",JSON.stringify({"results" : arr}),function(err,data){
			res.send("ok");
		});
	});
});

app.get("/changedone",function(req,res){
	var id = url.parse(req.url,true).query.id;
	var done = url.parse(req.url,true).query.done == 1 ? true : false;
	//先读取再写
	fs.readFile("./data/todos.json",function(err,data){
		var arr = JSON.parse(data.toString()).results;
		arr = arr.map((item)=>{
			if(item.id == id){
				item.done = done;
			}
			return item;
		});
		fs.writeFile("./data/todos.json",JSON.stringify({"results" : arr}),function(err,data){
			res.send("ok");
		});
	});
});


app.get("/changetitle",function(req,res){
	var id = url.parse(req.url,true).query.id;
	var title = url.parse(req.url,true).query.title;
	//先读取再写
	fs.readFile("./data/todos.json",function(err,data){
		var arr = JSON.parse(data.toString()).results;
		arr = arr.map((item)=>{
			if(item.id == id){
				item.title = title;
			}
			return item;
		});
		fs.writeFile("./data/todos.json",JSON.stringify({"results" : arr}),function(err,data){
			res.send("ok");
		});
	});
});


app.get("/del",function(req,res){
	var id = url.parse(req.url,true).query.id;
	//先读取再写
	fs.readFile("./data/todos.json",function(err,data){
		var arr = JSON.parse(data.toString()).results;
		arr = arr.filter((item)=>{
			return item.id != id;
		});
		fs.writeFile("./data/todos.json",JSON.stringify({"results" : arr}),function(err,data){
			res.send("ok");
		});
	});
});


var server = app.listen(3000, function () {
  console.log("运行在了3000端口");
});
var express = require("express");
var app = express();

const axios = require("axios");
app.set("view engine" , "ejs");

app.get("/",function(req,res){
	res.render("home");
});

app.get("/result",function(req,res){
	var que = req.query.search;
	axios.get("http://www.omdbapi.com/?s=" + que + "&apikey=thewdb")
	.then(function(respond){
		res.render("result", {data: respond.data.Search});
	})
	.catch(function(err){
		console.log(err);
	})
	.finally(function(){
		
	});
});

app.listen(3000,function(req,res){
	console.log("movie server started");
})
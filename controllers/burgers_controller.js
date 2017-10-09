var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
  burger.selectAll(function(data){
  	var hbsObject = {
  		burger: data
  	};
  	console.log(hbsObject);
  	res.render("index", hbsObject);
  });
});//end of get

router.post("/", function(req, res){
	burger.insertOne(["burger_name", "devoured"],
	[req.body.burger_name, req.body.devoured],
	function() {
		res.redirect("/");
	});
});//end of post

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;
	console.log(req.params.id);
	console.log("condition", condition);

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect("/");
	});
});//end of put


module.exports =router;
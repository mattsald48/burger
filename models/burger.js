var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res){
    	cb(res);
    });
  },//end of selectAll

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burger", cols, vals, function(res){
      cb(res);
    });
  },//end of insertOne
  updateOne: function(objColVals, condition, cb) {
  	orm.updateOne("burger", objColVals, condition, function(res){
  	  cb(res);
  	});
  }//end of updateOne 
};//end of burger


module.exports = burger;
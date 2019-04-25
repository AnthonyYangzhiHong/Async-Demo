var async = require('async');

function task1(callback){
	setTimeout(function(){
		console.log("task1 completed");
		callback(null, "task1 result")
	}, 2000);
};

function task2(callback){
	setTimeout(function(){
		console.log("task2 ran into trouble");
		callback("task2 error")
	}, 3000);
};

async.series([
		function(cb){task1(cb)}, 
		function(cb){task2(cb)}
	], 
	function(err, result){
	if(err){
		console.log("err");
		
	} else {
		console.log(result);
	}
});
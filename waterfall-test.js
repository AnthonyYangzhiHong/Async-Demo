var async = require("async");

function task1(cb){
	console.log("task1 started");
	setTimeout(function(){
		console.log("task1 completed");
		cb(null, "task1 data");
	}, 1000);
};

function task2(data, cb){
	console.log("task2 started");
	setTimeout(function(){
		console.log("task2 encountered error");
		cb(new Error("task2 error"));
	}, 1000)
};

function task3(data, cb){
	console.log("task3 started");
	setTimeout(function(){
		console.log("task3 completed");
		cb(null, "task3 data" + data);
	}, 1000)
};

async.waterfall([
		function(cb){
			task1(cb);
		},
		function(data, cb){
			task2(data, cb);
		},
		function(data, cb){
			task3(data, cb);
		}
	], 
	function(err, result){
		if(err){
			console.log(err.message);
		} else {
			console.log(result);
		}
	})
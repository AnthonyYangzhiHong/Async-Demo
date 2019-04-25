var async = require('async');

var count = 0;

async.whilst(
	function(){ return count < 5},
	function(cb){
		console.log("The " + count + " time");
		count++;
		setTimeout(function(){
			cb(null, count);
		}, 1000);
	},
	function(err, n){
		console.log("data is " + n)
	}
)
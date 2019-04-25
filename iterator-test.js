var async = require("async");

var iter = async.iterator([
	function(){
		console.log('111');
	},
	function(){
		console.log('222');
	},
	function(){
		console.log('333');
	}
])

console.log(iter());
console.log(iter.next());
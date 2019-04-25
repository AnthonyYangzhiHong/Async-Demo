var async = require("async");

var q = async.queue(function(task, callback){
	console.log("processing " + task.name);
	task.run(callback);
}, 2);

q.drain = function(result){
	console.log("all task completed" + result);
};

q.push(
	{
		name: 'task1',
		run: function(cb){
			setTimeout(function(){
				//console.log("task1 completed");
				cb(null, 'task1 data');
			}, 2000)
		}
	}, function(err, result){
		console.log("task1 completed with data " + result)
	}
)

q.push(
	{
		name: "task2",
		run: function(cb){
			setTimeout(function(){
				cb(null, "task2 data")
			}, 2000)
		}
	}, function(err, result){
		console.log("task2 completed with data " + result)
	}
)

q.push(
	{
		name: "task3",
		run: function(cb){
			setTimeout(function(){
				cb(null, "task3 data")
			}, 2000)
		}
	}, function(err, result){
		console.log("task3 completed with data " + result)
	}
)

q.push(
	{
		name: "task4",
		run: function(cb){
			setTimeout(function(){
				cb(new Error('task4 error'))
			}, 2000)
		}
	}, function(err, result){
		if(err){
			console.log(err.message)
		} else {
			console.log("task4 completed with data " + result)
		}	
	}
)

q.push(
	{
		name: "task5",
		run: function(cb){
			setTimeout(function(){
				cb(null, "task5 data")
			}, 2000)
		}
	}, function(err, result){
		console.log("task5 completed with data " + result)
	}
)

q.push(
	{
		name: "task6",
		run: function(cb){
			setTimeout(function(){
				cb(null, "task6 data")
			}, 2000)
		}
	}, function(err, result){
		console.log("task6 completed with data " + result)
	}
)

q.push(
	{
		name: "task7",
		run: function(cb){
			setTimeout(function(){
				cb(null, "task7 data")
			}, 2000)
		}
	}, function(err, result){
		console.log("task7 completed with data " + result)
	}
)

q.push(
	{
		name: "task8",
		run: function(cb){
			setTimeout(function(){
				cb(null, "task8 data")
			}, 2000)
		}
	}, function(err, result){
		console.log("task8 completed with data " + result)
	}
)
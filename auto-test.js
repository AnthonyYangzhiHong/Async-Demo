var async = require("async");

function getData(cb){
	setTimeout(function(){
		console.log("Data returned");
		cb(null, "data");
	},2000)
}

function makeFolder(cb){
	setTimeout(function(){
		console.log("Folder created");
		cb(null, "folder");
	},1000)
}

function writeFile(result,cb){
	console.log("Write file started with " + result.firstFunction + ' ' + result.secondFunction);
	setTimeout(function(){
		console.log("Data has been written to file");
		cb();
	},2000)
}

function emailFile(cb){
	setTimeout(function(){
		console.log("File been emailed")
	}, 3000)
}

async.auto({
	firstFunction: getData,
	secondFunction: makeFolder,
	thirdFunction: ['firstFunction', 'secondFunction', (result,cb) => {writeFile(result, cb)}],
	fourthFunction: ['thirdFunction', emailFile]
}, function(err, result){
	if(err) {
		console.log(err.message);
	} else {
		console.log(result);
	}
})
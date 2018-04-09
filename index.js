//asynchronous function call

//old style
function successCallback(result) {
	console.log("It succeeded with " + result);
}

function failureCallback(error) {
	console.log("It failed with " + error);
}

doSomething(successCallback, failureCallback);


//modern
const promise = doSomething();
promise.then(successCallback, failureCallback);

//or simply
doSomething().then(successCallback, failureCallback);



//------------------------------------------------//

//chaining

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);


//old days
//pyramid callback of doom

doSomething(function(result) {
	doSomethingElse(result, function(newResult) {
		doThirdThing(newResult, function(finalResult){
			console.log('Got the final result : ' + finalResult)
		}, failureCallback);
	}, failureCallback);
}, failureCallback);


//modern functions

doSomething().then(function(result){
	return doSomethingElse(result);
})
.then(function(newResult) {
	return doThirdThing(newResult);
})
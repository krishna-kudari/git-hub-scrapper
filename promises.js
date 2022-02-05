const fs =require("fs");
console.log("before");
let promise=fs.promises.readFile("main.js");

promise.then(function(data){
    console.log(""+data)
})
promise.catch(function(error){
    console.log(err);
})
console.log("after");
var XMLHttpRequest = require("xhr2").XMLHttpRequest;
var xhr = new XMLHttpRequest();


new Promise(function(resolve, reject) {

  resolve('start');

}).then(function(result) {

  console.log(result);

  return new Promise((resolve, reject) => { 
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
    xhr.send();

    xhr.onreadystatechange = function() {
      if (xhr.status===200) {
        resolve(JSON.parse(xhr.response));
      }
      else{
        reject(new Error(xhr.status));
      }
    }
    

  });

}).then(function(result) { 

  console.log(result);
  return new Promise(function(resolve,reject) {
    resolve('end');
  });

}).then(function(result){
  console.log(result);
});
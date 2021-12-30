var XMLHttpRequest = require("xhr2").XMLHttpRequest;
var xhr = new XMLHttpRequest();


new Promise(function(resolve, reject) {

  resolve('first');

}).then(function(result) {

  console.log(result);

  return new Promise((resolve, reject) => { 
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
    xhr.send();  //순서가 상관이 없다??

    xhr.onreadystatechange = function(event) {
      const { target } = event;
      if (target.readyState === XMLHttpRequest.DONE) {
        const { status } = target;
        if(status == 200){
          resolve(JSON.parse(xhr.response));
        } else{
          reject(new Error(xhr.status));
        }
      }

    };

    //xhr.send();


    

  });

}).then(function(result) { 

  console.log(result);
  return new Promise(function(resolve,reject) {
    resolve('last');
  });

}).then(function(result){
  console.log(result);
});
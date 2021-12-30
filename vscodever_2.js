var XMLHttpRequest = require("xhr2").XMLHttpRequest;
new Promise(function (resolve, reject) {

  resolve('first');

}).then(function (result) {

  console.log(result);

  return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();

      xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');

      xhr.send();
      xhr.onreadystatechange = function () {
          //console.log(xhr.readyState)
          if (xhr.status === 200) {
              if (xhr.readyState !== 4) return;
              resolve(JSON.parse(xhr.response));
          }
          else {
              reject(new Error(xhr.status));
          }
      }


  });

}).then(function (result) {

  console.log(result);
  return new Promise(function (resolve, reject) {
      resolve('last');
  });

}).then(function (result) {
  console.log(result);
});
import {promiseGet} from "./splitsub.js";
//set "type": "module" in the package.json

//var XMLHttpRequest = require("xhr2").XMLHttpRequest;
new Promise(function (resolve, reject) {

  resolve('first');

}).then(function (result) {

  console.log(result);

  return promiseGet();

}).then(function (result) {

  console.log(result);
  return new Promise(function (resolve, reject) {
      resolve('last');
  });

}).then(function (result) {
  console.log(result);
});
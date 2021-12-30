import XMLHttpRequest from "xhr2";
//import export 쓰기 위해서는
// 1. npm init -y    해서 npm 프로젝트 만들기
// 2. package.json에 "type": "module" 추가
// 3.  더이상  require 쓰지말고 import로 사용하면 된다.
//ex. var XMLHttpRequest = require("xhr2").XMLHttpRequest;
//를 import XMLHttpRequest from "xhr2"; 로 바꿔준다.

export function promiseGet(){
  return new Promise((resolve, reject) => {
    
    const xhr = new XMLHttpRequest();

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
}
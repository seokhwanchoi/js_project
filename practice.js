//==============================================================
//==============================================================
// snippet code 사용 예 최대한 많이 만들기 (이렇게 저렇게 많이 해보기)



// npm의 https-proxy-agent 모듈 예시

function test() {
    var promiseFunction = () =>
        new Promise(
            function(resolve){
                setTimeout(
                    function(){
                        resolve("result")
                    } , 1000
                );
            }
        );
  
    Array(10)
        .fill(0)
        .forEach(
            async function() {
                var result = await promiseFunction();
                console.log(result);
            }
        );
}

test();









//bluebird 관련
// var Promise = require('bluebird');


// Promise.reduce(
//     [1,2,3],
//     function(total, num){
//         return total + num;
//     },0
// ).then(
//     function(result){
//         console.log(result);
//     }
// );


// var Promise = require('bluebird');
// var fs = Promise.promisifyAll(require("fs"));

// Promise.reduce(
//     ["file1.txt", "file2.txt", "file3.txt"], //각각 정수로 1 , 2, 123 이 있으면 126이 나온다
//     function(total, fileName){
//         return fs.readFileAsync(fileName, "utf8")
//         .then(function(contents){
//             return total + parseInt(contents, 10);
//         });

//     } , 0 
// ).then(
//     function(total){
//         console.log(total);
//     }
// );









// /*
// 콜백 지옥을 해결하기 위해 Promise가 있는 것이 아님. 완화할 뿐
// 완화할 수 있는 이유 : 1. 단일 인터페이스
//                     2. 명확한 비동기시점 표현
//                     3. 강력한 에러 처리 메커니즘
// */


// //기존의 콜백코드 : 커피를 주문하는 과정
// /*
// * 메뉴에 해당하는 생두를 반환한다.
// * @param {string} menu
// * @param {function} callback
// */
// function getGreenBeans(menu, callback){
//  var err = null,
//      result = '';
 
//  if(menu === '아메리카노'){
//    result = '생두';
//  }else{
//    err = new Error('알 수 없는 메뉴입니다.');
//  }
 
//  setTimeout(function(){
//    callback(err, result);
//  }, 0);
// }

// /**
// * 생두를 로스팅하여 원두를 반환한다.
// * @param {string} greenBeans
// * @param {function} callback
// */
// function doRoasting(greenBeans, callback){
//  var err = null,
//      result = '';
 
//  if(greenBeans === '생두'){
//    result = '원두';
//  }else{
//    err = new Error('생두가 아닙니다.');
//  }
 
//  setTimeout(function(){
//    callback(err, result);
//  }, 0);
// }

// /**
// * 원두를 사용하여 메뉴에 해당하는 커피를 만든다.
// * @param {string} menu
// * @param {string} blackBeans
// * @param {function} callback
// */
// function createCoffee(menu, blackBeans, callback){
//  var err = null,
//      result = '';
 
//  if(menu === '아메리카노' && blackBeans === '원두'){
//    result = '맛있는 아메리카노';
//  }else{
//    err = new Error('알 수 없는 메뉴입니다.');
//  }

//  setTimeout(function(){
//    callback(err, result);
//  }, 0);
// }



// function order(menu, callback){
//     getGreenBeans(menu, function(err,greenBeans){
//         if(err){
//             callback(err);
//         }
//         else{
//             doRoasting(greenBeans, function(err, blackBeans){
//                 if(err){
//                     callback(err);
//                 }
//                 else{
//                     createCoffee(menu, blackBeans, function(err, coffee){
//                         callback(err, coffee);
//                     });
//                 }
//             });
//         }
//     });
// }

// order('아메리카노', function(err,coffee){
//     if(err) {throw err;}
//     console.log(coffee + '를 마신다.');
// })








// //Javascript의 reduce 메서드 활용
// /*
// reduce는 Array 객체의 ProtoType에 정의되어 있는 고차함수이다.
// 가장 중요한 특징 : 배열의 값을 한 개로 감소시킴

// map, filter, find 함수로 구현할 수 있는 기능은 모두 reduce함수로 구현 가능

// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
// */

// const oneTwoThree = [1,2,3];

// result = oneTwoThree.reduce(
//     (acc, cur, i)=> {
//         console.log(acc,cur,i);
//         return acc + cur;
//     }, 0
// );

// console.log(result);


// result2 = oneTwoThree.reduce(
//     (acc,cur) => {
//         acc.push(cur % 2 ? '홀수' : '짝수');
//         return acc;
//     }, []
// );

// console.log(result2);



// const promiseFactory = (time) => {
//     return new Promise(
//       (resolve, reject) => {
//           console.log(time);
//           setTimeout(resolve,time);
//       }   
//     );
// };

// [1000, 2000, 3000, 4000].reduce(
//     (acc,cur) => {
//         return acc.then( () => promiseFactory(cur) );
//     }, Promise.resolve()
// );








// //Javascript의 map 메서드 활용 
// //map은 배열을 1대1로 짝짓되 기존 객체를 수정하지 않는 메서드입니다.


// const oneTwoThree = [1,2,3];
// let result = oneTwoThree.map((v) => {
//     //console.log(v);
//     return v;
// });

// var temp= oneTwoThree;

// console.log(temp === oneTwoThree);     //true
// console.log(result === oneTwoThree);   //false

// let plusResult = oneTwoThree.map((v) => {
//     return v+1;
// });

// console.log(result);
// console.log(plusResult);
// //map을 실행하는 배열과 결과로 나오는 배열이 다른 객체라는 것입니다. 
// //기존 배열을 수정하지 않고 새로운 배열을 만들어냅니다.




// // https://gracefullight.dev/2016/12/25/Lodash-%ED%99%9C%EC%9A%A9%EB%B2%95/
// // lodash chain 이용하여 배열 안의 특정 요소들만 따로 뽑아서 배열로 만들고 싶을 때
// var _ = require('lodash');
// var users = [
//     { 'user' : 'barney', 'age' : 36},
//     { 'user' : 'fred', 'age' : 40},
//     { 'user' : 'pebbles', 'age' : 1}
// ];

// var lodashChain = _
//     .chain(users);


// console.log(typeof(users));
// console.log(typeof(lodashChain));

// console.log(users.sort(function(a,b){
//     if(a.age>b.age) return 1;
//     else if(a.age===b.age) return 0;
//     else return -1;
// }));
// console.log(lodashChain.sortBy('age').value());
// console.log(lodashChain.sortBy('age').map(function(o){
//     return o.user + ' is ' + o.age;
// }).value());


// selectedValue = _.chain(users).map('age');
// console.log(selectedValue.value());





// var Promise = require('bluebird');
// var fs = require('fs');
// var _ = require('lodash');
// var path = require('path');
// var util = require('util');

// function directorySizeInfo(root){
//     var counts = { dirs : 0 , files : 0};
//     var stats = ()().then(_.chain);
// }





// //prototype 이해 매우 중요@@@@@@@@@@@@@@@@@@@@@@@@@@
// //######################################################

// function 기계(){
//     this.q='strike';
//     this.w='snowball'; //여기다가 name을 쓰면 자식도 {name:'kim'}을 가질 수 있다.
// }//부모로 비유

// 기계.prototype.name = 'kim'; //prototype(프로토타입 = 유전자)을 쓰면 자식 object에게 데이터 물려줄 수 있음
// //prototype에다 name을 쓰면 부모만 {name:'kim'}을 가짐 (nunu는 직접 name을 갖고 있지 않음)

// var nunu = new 기계();//자식으로 비유

// console.log(nunu.name);



// var 어레이 = [4,2,1];
// var 어레이 = new Array(4,2,1);//컴퓨터가 내부적으로 이렇게 배열 생성 


// 어레이.sort(); //어레이에 sort함수를 추가해준 적이 없는데 어떻게 쓸 수 있는걸까? -> 부모 유전자(Array)에 기록되어 있기 때문에
// console.log(Array.prototype); //크롬 콘솔에 출력해보면 length, sort 등이 정의되어 있다


// //만약 모든 Array 자료에서 쓸 수 있는 함수를 개인적으로 추가하고 싶다면?
// Array.prototype.함수에서중간원소삭제 = function(){}
// console.log(어레이.함수에서중간원소삭제());//undefined라고 나올지언정 에러가 뜨진 않는다.

// /*
// object에서 자료 뽑을 때 일어나는 일
// 1. 직접 자료를 가지고 있으면 그거 출력
// 2. (여기서는 nunu가 name을 가지고 있지 않으면 nunu의 부모 유전자를 뒤짐) 없으면 부모의 유전자까지 뒤짐
// 3. 또 없으면 부모의 부모의 부모의.... 유전자까지 뒤짐...

// 프로토타입 체인(prototype chain)
//  - 프로토타입이 상위 프로토타입까지 연결되는 구조를 말한다.
//  - 즉, 하위 프로토타입은 상위 프로토타입의 속성과 메소드를 공유 받는다.



// 출처: https://goddaehee.tistory.com/231 [갓대희의 작은공간]


// prototype : 생성자 함수에 정의한 모든 객체가 공유할 원형(프로토타입 = 유전자)


// */












//1
// function longRunningTask(){
//     console.log('작업 끝');
// }

// console.log('시작');
// longRunningTask();
// console.log('다음 작업');

/*

출력 :

시작
작업 끝
다음 작업


*/



//2
// function longRunningTask(){
//     console.log('작업 끝');
// }
// console.log('시작');
// setTimeout(longRunningTask, 0);
// console.log('다음 작업');

/*
1과 다르게

출력 :

시작
다음 작업
작업끝


이유 : 'setTimeout(콜백, 0)'은 코드를 논 블로킹(비동기와 유사, 이전 작업이 완료될 때까지 대기하지 않고 다음 작업을 수행)으로 만들기 위해 사용하는 기법
setTimeout의 콜백함수인 longRunningTask가 태스크 큐로 보내지기 때문에 순서대로 실행되지 않음.

*/







//run이라는 전체 호출스택 가장 먼저 쌓인다.
// var original = Promise.resolve(33);
// var cast = Promise.resolve(original);

// cast.then(  //promise, 콜백, 백그라운드, 태스크큐
//     function(value){                     
//         console.log('value : '+ value); 
//     }
// );

// console.log('original === cast ? ' + (original === cast));

/*
로그 순서:
original === cast ? true
value: 33

왜 거꾸로냐 - 호출스택을 알아야

*/





// //Promise.resolve()를 사용하면 new Promise()를 단축해 표기할 수 있다
// //밑에 1코드와 2코드는 동일

// //1
// new Promise(
//     function(resolve){
//         resolve(42);
//     }
// ).then(function(value){
//     console.log(value);
// });


// //2
// Promise.resolve(42).then(function(value){
//     console.log(value);
// });








// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

// var promise = Promise.resolve($.ajax('https://jsonplaceholder.typicode.com/users'));
// //promise 객체를 반환한다.

// promise.then(function(value){
//     console.log(value);
// });








// var XMLHttpRequest = require("xhr2").XMLHttpRequest;


// function getURL(URL) {
//     return new Promise(function (resolve, reject) {
//         var req = new XMLHttpRequest();
      
//         req.open('GET', URL, true);
      
//         req.onload = function () {
//             if (req.status == 200) {
//                 resolve(req.responseText);
//             } else {
//                 reject(new Error(req.statusText));
//             }
//         };
      
//         req.onerror = function () {
//             reject(new Error(req.statusText));
//         };
      
//         req.send();
//     });
// }

// getURL("https://jsonplaceholder.typicode.com/posts").
// then(function onFulFilled(value){
//     console.log(value);
// }).catch(function onRejected(error){
//     console.error(error);
// });







// function throwError(value){
//     throw new Error(value);
// }

// function badMain(onRejected){
//     return Promise.resolve(42).then(throwError, onRejected);
// }

// function goodMain(onRejected){
//     return Promise.resolve(42).then(throwError).catch(onRejected);
// }





// var aPromise = new Promise(function(resolve){
//     resolve(100);
// });

// aPromise.then(function(value){
//     return value*2;
// });

// aPromise.then(function(value){
//     return value*2;
// });

// aPromise.then(function(value){
//     console.log("1: " + value);
// });







// var promise = new Promise(function(resolve){
//     resolve(100);
// });

// var thenPromise = promise.then(function(value){
//     console.log(value);
// });

// var catchPromise = thenPromise.catch(function(error){
//     console.error(error);
// });

// console.log(promise === thenPromise);   //false
// console.log(thenPromise === catchPromise);  //false








// (() => {
//     console.log('hello');
// })();

// console.log('world');


// function add(x, y) {
//     return x + y;
//   }
  
//   function add2(x) {
//     return add(x, 2); // `add`를 호출
//   }
  
//   function add2AndPrint(x) {
//     const result = add2(x); // `add2`를 호출
//     console.log(result); // `console.log`를 호출
//   }
  
//   add2AndPrint(3); // `add2AndPrint`를 호출






// Promise.resolve([1,2,3])
// .then(function(v){
//     console.log(v[1]);
// });





// Promise.reject(new Error("fail")).then(function(error) {
//     // 호출되지 않음
//   }, function(error) {
//     console.log(error); // Stacktrace
//   });



// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1_지연_이행'), 1000);
//   });
  
//   var p2 = new Promise((resolve, reject) => {
//     reject(new Error('p2_즉시_거부'));
//   });
  
//   Promise.all([
//     p1.catch(error => { return error }),
//     p2.catch(error => { return error }),
//   ]).then(values => {
//     console.log(values[0]) // "p1_지연_이행"
//     console.log(values[1]) // "Error: p2_즉시_거부"
//   })



// var p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('하나'), 1000);
//   });
//   var p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('둘'), 2000);
//   });
//   var p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('셋'), 3000);
//   });
//   var p4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('넷'), 4000);
//   });
//   var p5 = new Promise((resolve, reject) => {
//     reject(new Error('거부'));
//   });
  
  
//   // .catch 사용:
//   Promise.all([p1, p2, p3, p4, p5])
//   .then(values => {
//     console.log(values);
//   })
//   .catch(error => {
//     console.log(error.message)
//   });
  




// var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// var p= Promise.all(resolvedPromisesArray);
// console.log(p);

// setTimeout(function(){
//     console.log('the stack is now empty');
//     console.log(p);
// });

/*
Promise { <pending> }
the stack is now empty
Promise { [ 33, 44 ] }
*/




// async function display(text, time) {
//     //log(text); // <-- 이건 그냥 확인용 util 함수 입니다.
//     return new Promise((resolved, rejected) => {
//       setTimeout(
//         () =>typeof text === "string" ? resolved("string type입니다") : rejected("string type이 아닙니다") , time
//       );
//     });
// }

// console.time("소요시간");
// await display("jacob", 3000);
// await display("제이콥", 2000);
// await display("콥짱", 1000);
// console.timeEnd("소요시간");

// 소요시간: 6000ms 약간의 오차는 날 수 있다.

// console.time("소요시간");
// await Promise.all([
//   display("jacob", 3000),
//   display("제이콥", 2000),
//   display("콥짱", 1000)
// ]);
// console.timeEnd("소요시간");

// 소요시간: 3005ms


// console.log("------------------------------------------------------");
// console.time("소요시간");
// try{
//     await display(1,3000);
//     await display(2,2000);
//     await display(3,1000);

// } catch(error){
//     console.log(error);
// }
// console.timeEnd("소요시간");

// console.log("------------------------------------------------------");
// console.time("소요시간");
// try{
//     await Promise.all(  
//         [display(1,3000), display(2,2000), display(3,1000)]
//     );
// } catch(error){
//     console.log(error);
// }
// console.timeEnd("소요시간");
//참고 : https://code-masterjung.tistory.com/91





// const promise1 = Promise.resolve(3);
// const promise2 = new Promise(
//     // (resolve, reject) => {
//     //     setTimeout(reject, 100, 'f00');
//     // }
//     function(resolve, reject){
//         setTimeout(reject, 100, 'f00');
//     }
// );

// const promises = [promise1, promise2];

// Promise.allSettled(promises)
// .then(
//     // (results)=> results.forEach(
//     // (result) => console.log(result.status)
//     // )
//     function(results){
//         results.forEach(
//             function(result){
//                 console.log(result.status);
//             }
//         )
//     }
// );







// import fetch from "node-fetch";

// fetch('foo')
//   .then(res => res.a.prop.that.does.not.exist)
//   .catch(err => console.error(err.message));













//promise.all
//현재 package.json에 "type" : "module" 없으므로 return으로 시작 가능

// var p1= Promise.resolve('zero');
// var p2= Promise.resolve('nero');
// //var p3= Promise.reject('error');
// var p3= Promise.resolve('finish');

// return Promise.all([p1,p2,p3]).then(
//     // (result) => {
//     //     console.log(result);
//     // }
//     function(result){
//         console.log(result);
//     }
// ).catch(
//     (err) =>{
//         console.log(err);
//     }
// );

/*
참고로 Promise.all 메소드로 여러 프로미스 객체들을 한번에 모아서 처리할 수 있습니다. 
이 메소드는 모든 프로미스가 성공하면 then, 하나라도 실패하면 catch로 연결됩니다.


var p3를 reject로 실행시 => 출력 : error
var p3를 resolve로 실행시 => 출력 : [ 'zero', 'nero', 'finish' ]
*/








//<splitmain.js> - export 실험을 위한
// import {promiseGet} from "./splitsub.js";
// //set "type": "module" in the package.json


// new Promise((resolve,reject) => {
//   resolve('first');
// })
// .then(function (result) {

//   console.log(result);

//   return promiseGet();

// }).then(function (result) {

//   console.log(result);
//   return 'last';
//   // return new Promise(function (resolve, reject) {
//   //     resolve('last');
//   // });

// }).then(function (result) {
//   console.log(result);
// });



//Promise.resolve 붙이면 에러 난다 ... SyntaxError: Illegal return statement
/*
이유: package.json에 "type": "module" 을 추가하면 바로 return하면 오류난다. 모듈화를 했기 때문에
모듈화를 하지 않으면, return으로 해도 상관없다. 아마 node js, js의 특성 - dom과 상관있지 않을까?? 더 알아보기

따라서 package.json에 "type": "module" 을 추가하면 return때리지 말고
그게 없으면 return 가능하다
그냥 왠만하면 return 안때리는게?(함수 내부에서만 때리자)
*/


//<splitsub.js>
// import XMLHttpRequest from "xhr2";
// //import export 쓰기 위해서는
// // 1. npm init -y    해서 npm 프로젝트 만들기
// // 2. package.json에 "type": "module" 추가
// // 3.  더이상  require 쓰지말고 import로 사용하면 된다.
// //ex. var XMLHttpRequest = require("xhr2").XMLHttpRequest;
// //를 import XMLHttpRequest from "xhr2"; 로 바꿔준다.

// export function promiseGet(){
//   return new Promise((resolve, reject) => {
    
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');

//     xhr.send();
//     xhr.onreadystatechange = function () {
//         //console.log(xhr.readyState)
//         if (xhr.status === 200) {
//             if (xhr.readyState !== 4) return;
//             resolve(JSON.parse(xhr.response));
//         }
//         else {
//             reject(new Error(xhr.status));
//         }
//     }


//   });
// }















// new Promise(
//     function a(resolve,reject){
//         resolve(1);
//     }
    
// )
// .then(
//     function(result){
//         console.log(`value : ${result}, type : ${typeof(result)}`); //1
//         return result+10;
//     }
// )
// .then(
//     function(result){
//         console.log(result); //11
//         return result+20;
//     }
// )
// .then(
//     function(result){
//         console.log(result); //31
//     }

// );

/* output : 
value : 1, type : number
11
31


--> 이미 맨 처음에 new Promise로 객체를 만들고 resolve로 넘겨주었으므로(앞에 return 붙었다 생각)
그 다음부터는 굳이 new Promise할 상황이 아니라면 value만 return으로만 쭉쭉 넘겨줘도 된다


처음에만 resolve하고 그 다음부터는 특별히 또 resolve, reject 필요하지않으면 return만 계속해도됨
*/












// new Promise((resolve, reject) => {
//     resolve('hi');
// })
// .then( result => {
//     console.log(result);
//     throw new Error("에러입니다.");
// }, err =>{
//     console.log(`then error : ${err}`)   //호출되지 않음
// });

/* output : 
hi
Error: 에러입니다.

--> return 안붙여도 되는 듯 -> 그냥 function이랑 다르게 Promise 선언 자체 안에서
console하면 출력되는 듯(따로 fucntion을 호출 하지 않아도) => 더 알아보기
*/








// return function(){
//     console.log(1);
// };
/* output : 


--> 아무것도 출력되지 않는다. js에서 return이란....?
*/





// <catch와 then의 차이>

// return new Promise((resolve, reject) => {
//     resolve('hi');
// })
// .then( result => {
//     console.log(result);
//     throw new Error("에러입니다.");
// }, err =>{
//     console.log(`then error : ${err}`)   //호출되지 않음
// });

/* output : 
hi
Error: 에러입니다.

--> ,err 부분을 호출하지 않는다(then의 첫번째 콜백함수 내부에서 오류 나면 잡아내지 못한다)
*/






// return new Promise(
//     (resolve,reject) => {
//         resolve('hi');
//     }
// )


// Promise.resolve('hi')
// .then(
//     result => {
//         console.log(result);
//         throw new Error("에러입니다.");
//     }
// ).catch(
//     err => {
//         console.log(`catch error : ${err}`)
    
//     }
// );

/* output : 
hi
catch error : Error: 에러입니다.

--> then의 첫번째 콜백함수 내부에서 오류 나는 것도 잡아낸다 -> 에러처리를 catch로 쓰는게 좋은 이유
*/







// return new Promise(
//     (resolve,reject) => {
//         reject('hi');
//     }
// ).then(
//     result => {
//         console.log(result);            //호출되지 않음
//         throw new Error("에러입니다.");  //호출되지 않음
//     }
// ).catch(
//     err => {
//         console.log(`catch error : ${err}`)
    
//     }
// ); 

/* output : 
catch error : hi

--> reject이므로 then의 첫번째 콜백함수가 호출되지 않음
*/

//모듈
const readline = require("readline");
const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:8080');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});


var input= {}; //전형적인 로그 : 시간, 내용, 사용자
var temp = [];
var flag =0;
rl.on("line", function (line) {

   //line를 통해서 사용자가 입력한 문자열이 들어온다.
   
   flag += 1;
   var today=new Date();
  
   if(flag==1){
     temp[0]=line;
     console.log("userId : " , input.userId = temp[0]);
     //ws.send(input.userId);
   }
    

   else if(flag==2){
    temp[1]=line;
    console.log("contents : " , input.contents = temp[1]);
    //ws.send(input.contents);
   }
    
   
   else{
    temp[2]=line;
    console.log("TimeLog : ", input.TimeLog = today);
    //ws.send(input.TimeLog);
   }
    



   //정수형태로 사용할려면 parseInt로 형변환 필요
   //input.push(line);

   //한줄을 받고 입력 종료
   //console.log(JSON.stringify(input));
   ws.send(JSON.stringify(input));
   if(flag==3)
   {
     flag=0;
   }

}).on("close", function () {

   //ws.send(input);
   //console.log(input);

   //프로세스 종료

   //process.exit();

});

      //console.log(ws);
    //if (ws) {
      //ws.onerror = ws.onopen = ws.onclose = null;
      //ws.close();
     //}
     //ws.onerror = ws.onopen = null;


    //  ws.onopen = () => {
    //    console.log(`welcome! ${input}!`);
    //  }
    //  ws.onmessage = ({ data }) => {
    //     console.log(data);
    //  }
    //  ws.onclose = function() {
    //    ws = null;
    //  }

    //ws = new WebSocket('ws://localhost:6969');
    //console.log(`welcome! ${input}!`);
    //console.log(data);
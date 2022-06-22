/*
  예약을 거는 방식으로 콘솔창에 아래와 같이 출력하고 싶다.
  첫번째 작업 2022-01-20 13:09:10
  두번째 작업 2022-01-20 13:09:11
  세번째 작업 2022-01-20 13:09:12
*/

// 가장 단순한 방법
// console.log('첫번째 작업 2022-01-20 13:09:10')
// console.log('두번째 작업 2022-01-20 13:09:11')
// console.log('세번째 작업 2022-01-20 13:09:12')

//매개변수로 시간, 콜백함수를 전달받는 함수
const workFn = function(sec,callback){
  
  setTimeout(function(){
    callback(new Date().toISOString());  
  }, sec*1000);

};

workFn(1, function(time){
  console.log('첫번째 작업 :', time);
});

workFn(1, function(time){
  console.log('두번째 작업 :', time);
});

workFn(1, function(time){
  console.log('세번째 작업 :', time);
});


workFn(1, function(time){
  console.log('---------------------');
  console.log('First 작업', time);

  workFn(1, function(time){
    console.log('-----------------');
    console.log('Second 작업' , time);

    workFn(1, function(time){
      console.log('---------------------');
      console.log('Third 작업' , time);
    });
  });
});



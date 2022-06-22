/*
  동기방식(Sync) <---> 비동기방식(Async) : 처리속도와 연관
  ※ Process(프로세스) - 하나의 프로그램 실행 단위
  ※ Thread(쓰레드) - 프로세스 내에서 실행되는 흐름의 단위
  1. 동기방식 - Thread(화장실사용) -> Blocking(잠근다-대기발생O)
     : 여러개의 작업(thread) 발생시 순차적으로 실행됨 - 하나의 작업이 끝날 때까지 다른 작업에 제어권을 넘겨주지 않고 대기하게 함
  2. 비동기방식 - Thread(책대여) -> NonBlocking(대기발생X)
    : 쓰레드 발생시 만약 바로 처리할 수 없다면 예약을 건다.
      예약을 건 작업들간의 서로 상관이 없으므로 대기시간이 발생하지 않지만, 예약이 여러개일 경우 어떤것이 먼저 처리될지는 알 수 없다. 이렇게 작업의  흐름이 순차적이지 않은 방식을 비동기방식 이라고 한다. - 한번에 여러개의 일을 처리할 수 있음
*/

//기본적으로 동기방식으로 콘솔창에 출력됨
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log('---------------------');

//API(Application Programming Interface)는 기능을 제어할 수 있게 만든 인터페이스를 뜻합니다. => API의 실체는 함수, 메소드이다.

//콜백(Callback)함수 - 어떤 조건이 성립됐을때 실행(호출)되는 함수

//JS에서 기본적으로 제공하는 비동기처리 함수중 하나
//시한폭탄이랑 비슷하게 작동함 : 
//setTimeout(콜백함수, 1000 분의1초단위의 시간);

//"3초후에 이 함수를 실행시켜줘"라고 예약을 거는 코드
setTimeout(function(){
  console.log('출근~!');
}, 3000);

//"2초후에 이 함수를 실행시켜줘"라고 예약을 거는 코드
setTimeout(function(){
  console.log('퇴근~!');
},2000);

setTimeout(function(){
  console.log('졸리다');
},4000);

setTimeout(function(){
  console.log('자고싶다');
},5000);

setTimeout(function(){
  console.log('ㅠㅠ');
},6000);
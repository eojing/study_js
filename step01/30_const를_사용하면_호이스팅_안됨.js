//const를 이용한 상수선언
//프로그램의 흐름중 값의 변경을 원하지 않을경우 사용

//console.log(dog);//호이스팅이 안되므로 에러 발생 - ReferenceError: Cannot access 'dog' before initialization

let dog = "푸들";
dog = "말티즈";

console.log(dog);

const myname ="구름이"; //상수변수

//TypeError: Assignment to constant variable.
//myname = "홍길동" //상수에는 재할당 안됨 - 에러발생
console.log(myname);


//var 를 사용하지 않는다.
//let 은 중간이 값 변경이 가능
//const는 값 변경이 불가능
//let, const는 호이스팅 발생 안함
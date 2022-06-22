//저장하고 싶은 데이터 : 'Korea', '홍길동', 25

const nation = 'Korea';
const username = '홍길동';
let age = 25;

//객체변수는 주소값을 저장한다.
const hong ={
  nation : 'korea',
  username : '홍길동',
  age : 25
};

//객체변수에 저장된 데이터 출력방법은 객체변수명.프로퍼티
console.log(hong.nation);
console.log(hong.username);
console.log(hong.age);


console.log('------------------------')
//console.log(nation)
//console.log(username)
//console.log(age)


//who와 hong은 지금부터 같은 주소값을 가리킨다.
const who = hong;

//프로퍼티의 값을 변경(재할당)
who.nation = '미국';
who.username = '닥터후';
who.age = 45;

console.log(who.nation);
console.log(who.username);
console.log(who.age);


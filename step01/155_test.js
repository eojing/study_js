// const bomin = {
//   name : '보민',
//   age : 26
// };

// const eojin = {
//   name : '어진',
//   age : 26
// };

// console.log(bomin.name);

console.log('------------------------');

function Character(name,age){
  this.name = name;
  this.age = age;
}

const bomin = new Character('보민', 26);
console.log(bomin.name)
console.log(bomin.age)


const eojin = new Character('어진', 26);
console.log(eojin.name)
console.log(eojin.age)

console.log('-----------------------------')

function Human(name, age){
  this.name = name;
  this.age = age;
  this.info = function(){
    console.log('이름은 '+this.name+'(이)고 나이는' +this.age+'살 입니다.')
  }
}

const minsu = new Human('민수', 26);
const hyunsu = new Human('현수', 26);
const donghun = new Human('동훈', 26);


minsu.info();
hyunsu.info();
donghun.info();

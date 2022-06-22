function boFn() {};


boFn()


const bomin ={
  name: 'bomin',
  age: 26,
  hobby: 'game',

  min : function(){
    console.log('나는 서보민 입니다.');
  },

  wow : function(){
  console.log(this.hobby,this.hobby,this.hobby);
 }
};

bomin.min()
bomin.wow()


console.log(bomin.name);
console.log(bomin.age);
console.log(bomin.hobby);
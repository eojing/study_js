//함수의 사용은 결국 도장찍기와 같다.

const speed_1=10;
const time_1=5;
console.log('이동거리1 =',speed_1*time_1);

const speed_2=60;
const time_2=1.5;
console.log('이동거리2 =',speed_2*time_2);

const speed_3=15;
const time_3=8;
console.log('이동거리3 =',speed_3*time_3);

const speed_4=50;
const time_4=20;
console.log('이동거리4 =',speed_4*time_4);



console.log('-------------------------');

//중복되는 코드를 하나의 함수로 설계한다.
const getDistance = function(speed , time){
  console.log('이동거리 =', speed*time);
}

getDistance(10,5);
getDistance(60,1.5);
getDistance(15,8);
getDistance(50,20);


console.log('-------------------------');

//2차원배열 (실무에선 거의 1차에서 마무리)
const arrData = [
  [10,5],
  [60,1.5],
  [15,8],
  [50,20]
];

for(let i = 0; i<arrData.length;i++){
  getDistance(arrData[i][0],arrData[i],[1]);
}
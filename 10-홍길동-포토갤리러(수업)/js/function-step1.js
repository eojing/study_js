


const $screen = document.querySelector('#screen');


const $thmb1 = document.querySelector('.thmbs>li:nth-child(1)>a');
$thmb1.addEventListener('click',function(evt){
  evt.preventDefault();
  const imgSrc = $thmb1.getAttribute('href');
  $screen.setAttribute('src',imgSrc);
});



const $thmb2 = document.querySelector('.thmbs>li:nth-child(2)>a');

$thmb2.addEventListener('click', function(evt){


  evt.preventDefault();//a태그의 기본기능 작동불능
  
  // 큰 이미지가 변한다.

// 1) 이번에 클릭한 a요소의 href 속성값을 가져와서 ...
// const imgSrc = 'images/big2.jpg'
const imgSrc = $thmb2.getAttribute('href');

// 2) #screen 요소의 src 속성값으로 넣어준다.

  $screen.setAttribute('src',imgSrc);
});






const $thmb3 = document.querySelector('.thmbs>li:nth-child(3)>a');
$thmb3.addEventListener('click',function(evt){
  evt.preventDefault();

 const imgSrc = $thmb3.getAttribute('href');
 $screen.setAttribute('src',imgSrc);
});


const $thmb4 = document.querySelector('.thmbs>li:nth-child(4)>a');

$thmb4.addEventListener('click',function(evt){
  evt.preventDefault();

  const imgSrc = $thmb4.getAttribute('href');
  $screen.setAttribute('src',imgSrc);
});



const $thmb5 = document.querySelector('.thmbs>li:nth-child(5)>a');

$thmb5.addEventListener('click',function(evt){
  evt.preventDefault();

  const imgSrc = $thmb5.getAttribute('href');
  $screen.setAttribute('src',imgSrc);
});

const $thmb6 = document.querySelector('.thmbs>li:nth-child(6)>a');

$thmb6.addEventListener('click',function(evt){
evt.preventDefault();

const imgSrc = $thmb6.getAttribute('href');
$screen.setAttribute('src',imgSrc);
})

const $thmb7 = document.querySelector('.thmbs>li:nth-child(7)>a');
$thmb7.addEventListener('click',function(evt){
  evt.preventDefault();
  const imgSrc = $thmb7.getAttribute('href');
  $screen.setAttribute('src',imgSrc);
});

const $thmb8 = document.querySelector('.thmbs>li:nth-child(8)>a');
$thmb8.addEventListener('click',function(evt){
  evt.preventDefault();
  const imgSrc = $thmb8.getAttribute('href');
  $screen.setAttribute('src',imgSrc);
});


const $thmb9 = document.querySelector('.thmbs>li:nth-child(9)>a');
$thmb9.addEventListener('click',function(evt){
  evt.preventDefault();
  const imgSrc = $thmb9.getAttribute('href');
  $screen.setAttribute('src',imgSrc);
});


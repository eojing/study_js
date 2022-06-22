$(document).ready(function(){

  // 메뉴셀렉팅
  const $mnu = $('header>nav>.gnb>li>a');


  // 각 article의 top값
  const arrTopVal = [];
  
  const $article = $('section>article');
  
  console.log('article의 갯수는',$article.length);

  for(let i=0;i<$article.length;i++){
    arrTopVal.push($article.eq(i).offset().top - 69);
  }


  // 각 article이 시작하는 top값
  console.log('arrTopVla',arrTopVal);

  // 페이지이동 함수 작성
  const pageMove = function(topVal){
    $('html,body').animate({
      scrollTop:topVal
    });
  };

  // 6개의 메뉴에 대한 클릭이벤트 구문
  $mnu.on('click',function(evt){
    evt.preventDefault();
    const nowIdx = $mnu.index(this);

    pageMove(arrTopVal[nowIdx]);
  });




$(window).on('scroll',function(){
  const scrollTop = $(this).scrollTop();

for(let i=0;i<$mnu.length;i++){
  if(scrollTop>=arrTopVal[i]){
  $mnu.eq(i).parent().addClass('on').siblings().removeClass('on')
}
}


});

$('header>h1>a').on('click',function(evt){
  evt.preventDefault();
 pageMove();



})

});
$(document).ready(function(){


  // 메뉴셀렉팅

  const $mnu_1 = $('header > nav > .gnb > li:nth-child(1) > a')
  const $mnu_2 = $('header > nav > .gnb > li:nth-child(2) > a')
  const $mnu_3 = $('header > nav > .gnb > li:nth-child(3) > a')
  const $mnu_4 = $('header > nav > .gnb > li:nth-child(4) > a')
  const $mnu_5 = $('header > nav > .gnb > li:nth-child(5) > a')
  const $mnu_6 = $('header > nav > .gnb > li:nth-child(6) > a')
  

  //배열을 이용해서 여러 데이터값을 한꺼번에 저장할 수 있다.

  const arrTopVal = [0,700,1400,2100,2800,3500]; //각 section의 topVal값




  //함수는 반복되는 코드를 일괄처리하는데 유용하다.
  const pageMove = function(evt,topVal){
    evt.preventDefault();

    $('html,body').animate({
      scrollTop:topVal
    })
    
  };



  //첫번째 메뉴에 대한 클릭이벤트 구문
  $mnu_1.on('click',function(evt){
    // evt.preventDefault();

    pageMove(evt,0);




  });

  $mnu_2.on('click',function(evt){

    pageMove(evt,700);
  });

  $mnu_3.on('click',function(evt){

    pageMove(evt,1400);
  });

  $mnu_4.on('click',function(evt){

    pageMove(evt,2100);
  });

  $mnu_5.on('click',function(evt){

    pageMove(evt,2800);
  });

  $mnu_6.on('click',function(evt){

    pageMove(evt,3500);
  });

});
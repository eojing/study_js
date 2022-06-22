$(function(){

  // const $lnbBg = $('.bg_lnb');

  // const $lnb = $('.lnb');

  // const $gnb = $('nav > .gnb >li');


  // $gnb.on('mouseover',function(){
  //   $lnbBg.stop().fadeIn(300);
  //   $lnb.stop().fadeIn(300);
  // });

  // $lnbBg.on('mouseleave',function(){
  //   $lnbBg.stop().fadeOut(300);
  //   $lnb.stop().fadeOut(300);
  // });

  const $gnb = $('#wrap > header > .container > nav > .gnb');
  const $lnb = $gnb.find('.lnb');
  const $bg_lnb = $('.bg_lnb');
  const $item = $('#wrap > header > .bg_lnb > a');

  $gnb.on('mouseover',function(){
    $bg_lnb.stop().slideDown(300); //배경판노출
    $lnb.stop().slideDown(300); //서브메뉴 노출
    // $bg_lnb.stop().fadeIn(300); //배경판노출
    // $lnb.stop().fadeIn(300); //서브메뉴 노출
  });

  $gnb.on('mouseout',function(){
    $bg_lnb.stop().slideUp(300); 
    $lnb.stop().slideUp(300); 
    // $bg_lnb.stop().fadeOut(300);
    // $lnb.stop().fadeOut(300); 
  });

  $bg_lnb.on('mouseover',function(){
    $gnb.trigger('mouseover');
  });
  
  $bg_lnb.on('mouseout',function(){
    $gnb.trigger('mouseout');
  });




});
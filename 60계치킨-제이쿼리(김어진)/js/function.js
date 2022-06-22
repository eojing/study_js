$(document).ready(function(){

const $container = $('section > .slides > .slides-container');
const $pagenation = $('section > .slides > ul.slides-pagenation > li > a');
const $btnPrev = $('section > .slides > a.prev');
const $btnNext = $('section > .slides > a.next');

let nowIdx = 0;


$pagenation.on('click',function(evt){
evt.preventDefault();

nowIdx = $pagenation.index(this);

$pagenation.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

$container.stop().animate({
  left: -1130*nowIdx
});
});

$btnNext.on('click',function(evt){
  evt.preventDefault();

    if(nowIdx<9){
      nowIdx++;
    }else{
      nowIdx = 0;
    }

    $container.stop().animate({
      left : -1130*nowIdx
    });

    $pagenation.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

});

$btnPrev.on('click',function(evt){
evt.preventDefault();

if(nowIdx>0){
  nowIdx--;
}else{
  nowIdx = 9;
}

$container.stop().animate({
  left:-1130*nowIdx
});

$pagenation.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

});

});
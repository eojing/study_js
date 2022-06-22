$(function(){
  const $mnu = $('.gnb>li>a');

  // console.log('$mnu =',$mnu);

  $mnu.on('click',function(evt){
    evt.preventDefault();

    let nowIdx  = $mnu.index(this);

    $mnu.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");

  })
});


















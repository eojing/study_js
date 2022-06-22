

document.addEventListener('DOMContentLoaded',function(){


  const $pagenation = document.querySelectorAll('section>.slides>.slides-pagenation>li>a');
  const $container = document.querySelector('section > .slides >.slides-container');

  const $btnNext = document.querySelector('section>.slides>a.next');
  const $btnPrev = document.querySelector('section>.slides>a.prev');

  let nowIdx = 0;
  let oldIdx = nowIdx;

  $pagenation.forEach(function($indicator,idx){

    $indicator.addEventListener('click',function(evt){
      evt.preventDefault();

      oldIdx=nowIdx;
      nowIdx=idx;
      console.log('nowIdx=',idx);

      const $parent = this.parentElement;

      $parent.classList.add('on');

      $pagenation[oldIdx].parentElement.classList.remove('on');

      $container.style.left = -1130*(nowIdx)+"px";
    });
  });

  


  $btnNext.addEventListener('click',function(evt){
    evt.preventDefault();

    oldIdx = nowIdx;

    if(nowIdx<9){
      nowIdx++;
    }else{
      nowIdx=0;
    }



    $container.style.left = -1130*(nowIdx)+"px";

    $pagenation[nowIdx].parentElement.classList.add('on');
    $pagenation[oldIdx].parentElement.classList.remove('on');

  });


  $btnPrev.addEventListener('click',function(evt){
    evt.preventDefault();

    oldIdx = nowIdx;
    
    if(nowIdx>0){
      nowIdx--;
    }else{
      nowIdx=9;
    }



    $pagenation[nowIdx].parentElement.classList.add('on');
    $pagenation[oldIdx].parentElement.classList.remove('on');

    $container.style.left = -1130*(nowIdx)+"px";

  });



});
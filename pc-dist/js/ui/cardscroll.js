(() => {

  window.addEventListener('resize', function(){
    actionScroll()
    
  })

  window.addEventListener('scroll', function(){

    let yOffset = window.scrollY; // 현재스크롤위치
    let targetYOffset = document.querySelector('.collection-card-slide-wrap').offsetTop;
    let visualBgHeight = document.querySelector('#collection-visual').clientHeight;

    const target = document.querySelector('.collection-card-slide-wrap');
    const leftTarget = document.querySelector('.collection-card-slide-wrap .card-slide-wrap .left-box ul');
    const rightTarget =  document.querySelector('.collection-card-slide-wrap .card-slide-wrap .right-box ul');

    function actionScroll(){

      let currentYOffset = yOffset - visualBgHeight - targetYOffset;
      let scrollHeight = target.scrollHeight;
      let scrollRatio = currentYOffset / scrollHeight;

      let rightTransform = currentYOffset * 2.2

      leftTarget.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -${currentYOffset}, 0, 1)`;
      rightTarget.style.transform = `translate3d(0, ${rightTransform}px, 0)`;
      
      
    }
  

    if(yOffset > targetYOffset + visualBgHeight) {
      actionScroll()
    }
  })
  
})();
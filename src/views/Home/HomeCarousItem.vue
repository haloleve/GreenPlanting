<template>
  <div class="focus">
    <ul>
        <li><img src="../../assets/images/homepage/carous1.jpg" alt=""></li>
        <li><img src="../../assets/images/homepage/carous2.jpg" alt=""></li>
        <li><img src="../../assets/images/homepage/carous3.jpg" alt=""></li>
        <li><img src="../../assets/images/homepage/carous2.jpg" alt=""></li>
        <li><img src="../../assets/images/homepage/carous1.jpg" alt=""></li>
    </ul>
    <ol>
        <li class="current"></li>
        <li></li>
        <li></li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'HomeCarousItem',
  mounted() {
    this.autoplay();
  },
  methods: {
    autoplay(){
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    var w = focus.offsetWidth;
    var flag = false;
    var index = 0;
    var back = document.querySelector('.goback');
    var timeLoop = setInterval(function(){
        index++;
        var translateX = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = `translateX(${translateX}px)`;
    },1500);

    ul.addEventListener('transitionend',function(){
        if(index >= 3){
            index = 0;
            ul.style.transition = 'none';
            var translateX = -index * w;
            ul.style.transform = `translateX(${translateX}px)`;
        }
        if(index < 0){
            index = 2;
            ul.style.transition = 'none';
            var translateX = -index * w;
            ul.style.transform = `translateX(${translateX}px)`;
        }
        //配套焦点
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })
    //手指滑动轮播
    var startX = 0;
    var moveX = 0;
    ul.addEventListener('touchstart',function(e){
        startX = e.targetTouches[0].pageX;
        clearInterval(timeLoop);
    })
    ul.addEventListener('touchmove',function(e){
        //计算移动距离
        //console.log(e.targetTouches)
        moveX = e.targetTouches[0].pageX - startX;
        var translateX = -index * w + moveX;
        ul.style.transition = 'none';
        ul.style.transform = `translateX(${translateX}px)`;
        flag = true;
        e.preventDefault();
    })
    ul.addEventListener('touchend',function(e){
        if(flag){
            if(Math.abs(moveX)>50){
                //如果右滑 播放是一张 moveX是正值
                if(moveX>0){
                    index--;
                }else{
                    index++;
                }
                ul.style.transition = 'all .3s';
                var translateX = -index * w;
                ul.style.transform = `translateX(${translateX}px)`;
            } else {
                ul.style.transition = 'all .3s';
                var translateX = -index * w;
                ul.style.transform = `translateX(${translateX}px)`;
            }
        }
        clearInterval(timeLoop);
        timeLoop = setInterval(function(){
            index++;
            var translateX = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = `translateX(${translateX}px)`;
        },1500);
    })
    }
  },
}
</script>
<style lang="scss" scope>
.focus{
  overflow:hidden;
  position: relative;
  img{
    width: 100%;
    height: 160px;
  }
  ul{
    overflow: hidden;
    width: 500%;
    margin-left: -100%;
    li {
      float: left;
      width: 20%;
    }
  }
  ol{
    position: absolute;
    bottom: 5px;
    right: 5px;
    margin:0;
    li{
      display: inline-block;
      width: 5px;
      height: 5px;
      background-color: #fff;
      margin: 0 3px;
      list-style: none;
      border-radius: 3px;
    }
    li.current{
      width: 15px;
    }
  }
}

</style>
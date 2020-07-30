<template>
  <main>
    <home-nav path="/search"></home-nav>
    <home-slider></home-slider>
    <home-carous></home-carous>
    <home-content></home-content>
    <back-top></back-top>
  </main>
</template>
<script>
import HomeNav from '../Home/HomeNav/HomeNavs';
import HomeSlider from '../Home/HomeNav/HomeSlider';
import HomeCarous from '../Home/HomeCarous/HomeCarous';
import HomeContent from '../Home/HomeContent/HomeContents';
import BackTop from '@/components/common/BackTop.vue';

export default {
  name: "Home",
  data(){
    return {
      
    }
  },
  components:{
    HomeNav,
    HomeSlider,
    HomeCarous,
    HomeContent,
    BackTop
  },
}
</script>
<style lang="scss" scope>
main{
  margin-bottom: 50px;
  overflow: hidden;
  .back-top{
    position: fixed;
    right: 20px;
    bottom: 20%;
  }
}
.content{
  width: 100vw;
  overflow: scroll;
}

</style>
<template>
  <main>
    <home-nav path="/search"></home-nav>
    <home-slider></home-slider>
    <home-carous></home-carous>
    <home-content></home-content>
  </main>
</template>
<script>
import HomeNav from '../Home/HomeNav/HomeNavs';
import HomeSlider from '../Home/HomeNav/HomeSlider';
import HomeCarous from '../Home/HomeCarous/HomeCarous';
import HomeContent from '../Home/HomeContent/HomeContents';

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
    HomeContent
  },
}
</script>
<style lang="scss" scope>
main{
  margin-bottom: 50px;
  overflow: hidden;
}
.content{
  width: 100vw;
  overflow: scroll;
}
</style>
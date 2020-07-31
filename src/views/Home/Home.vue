<template>
  <main>
    <home-nav :class="searchBarFixed == true ? 'isFixed' :''" path="/search"></home-nav>
    <home-slider :class="sliderBarFixed == true ? 'isFixedSlider' :''"></home-slider>
    <transition name="slider">
      <router-view></router-view>
    </transition>
  </main>
</template>
<script>
import HomeNav from '../Home/HomeNav/HomeNavs';
import HomeSlider from '../Home/HomeNav/HomeSlider';

export default {
  name: "Home",
  data(){
    return {
      searchBarFixed: false,
      sliderBarFixed: false,
    }
  },
  components:{
    HomeNav,
    HomeSlider,
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 250) {
        this.searchBarFixed = true;
        this.sliderBarFixed = true;
      } else {
        this.searchBarFixed = false;
        this.sliderBarFixed = false;
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>
<style lang="scss" scope>
main{
  margin-bottom: 50px;
  overflow: hidden;
  .isFixed{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .isFixedSlider{
    position: fixed;
    top: 43px;
    left: 0;
    width: 100%;
    z-index: 10;
  }
}
.content{
  width: 100vw;
  overflow: scroll;
}
.slider-enter{
  opacity: 0;
  position: absolute;
}
.slider-leave-to{
  opacity: 0;
  transform: translateX(-100vw);
  position: absolute;
}
.slider-enter-active,
.slider-leave-active{
  transition: all .5s ease;
}
</style>
<template>
  <main>
    <home-nav></home-nav>
    <home-carous></home-carous>
  </main>
</template>
<script>
import HomeNav from '../Home/HomeNav/HomeNavs';
import HomeCarous from '../Home/HomeCarous';

export default {
  name: "Home",
  components:{
    HomeNav,
    HomeCarous
  }
}
</script>
<style lang="scss" scope>
.content{
  width: 100vw;
  overflow: scroll;
}
</style>
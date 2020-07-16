<template>
  <main>
    <nav-bar>
      <div slot="nav-title">心情圈</div>
    </nav-bar>
    <div class="content">
      <div>dddd</div>
      <div>woshi nei</div>
    </div>
  </main>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';

export default {
  name: "Mood",
  components:{
    NavBar
  },
  computed: {
    NavBarName(){
      return this.$route.path.slice(1);
    }
  },
}
</script>
<style lang="scss" scope>
.content{
  width: 100vw;
  height: calc(100% - 98px);
  margin: 49px 0;
  overflow: scroll;
}
</style>
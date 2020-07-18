<template>
  <main class="mood-main">
    <mood-nav></mood-nav>
    <mood-content></mood-content>
  </main>
</template>
<script>
import MoodNav from './MoodNav/MoodNavs';
import MoodContent from './MoodContentItem/MoodContent';

export default {
  name: "Mood",
  components:{
    MoodNav,
    MoodContent
  },
  computed: {
    NavBarName(){
      return this.$route.path.slice(1);
    }
  },
}
</script>
<style lang="scss" scope>
.mood-main{
  width: 100vw;
  margin-bottom: 50px;
  overflow: scroll;
  > header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: gold;
  }
}
</style>
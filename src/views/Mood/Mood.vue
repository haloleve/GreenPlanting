<template>
  <main class="mood-main">
    <mood-nav></mood-nav>
    <mood-content></mood-content>
    <back-top></back-top>
    <issue-button></issue-button>
  </main>
</template>
<script>
import MoodNav from './MoodNav/MoodNavs';
import MoodContent from './MoodContentItem/MoodContent';
import BackTop from '@/components/common/BackTop.vue';
import IssueButton from '@/components/common/IssueButton.vue';

export default {
  name: "Mood",
  components:{
    MoodNav,
    MoodContent,
    BackTop,
    IssueButton
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
  position: relative;
  > header{
    background: #c5ebff;
  }
  .back-top{
    position: fixed;
    right: 20px;
    bottom: 20%;
  }
  .issue-btn{
    position: fixed;
    right: 20px;
    bottom: 25%;
  }
}
</style>
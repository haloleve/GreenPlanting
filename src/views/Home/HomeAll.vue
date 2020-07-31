<template>
  <div>
    <home-carous></home-carous>
    <home-content></home-content>
    <back-top></back-top>
  </div>
</template>
<script>
import HomeCarous from '../Home/HomeCarous/HomeCarous';
import HomeContent from '../Home/HomeContent/HomeContents';
import BackTop from '@/components/common/BackTop.vue';

export default {
  name: 'HomeAll',
  components: {
    HomeCarous,
    HomeContent,
    BackTop
  },
  
}
</script>
<style lang="scss" scoped>
.back-top{
  position: fixed;
  right: 20px;
  bottom: 20%;
}
</style>
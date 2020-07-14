<template>
  <div class="tab-bar">
    <tab-bar-item path='/home'>
      <img slot="tab-img" src="../../assets/images/fontimg/home.svg">
      <img slot="tab-img-active" src="../../assets/images/fontimg/home-a.svg">
      <p slot="tab-text">首页</p>
    </tab-bar-item>
    <tab-bar-item path='/mood'>
      <img slot="tab-img" src="../../assets/images/fontimg/mood-happy.svg">
      <img slot="tab-img-active" src="../../assets/images/fontimg/mood-happy-a.svg">
      <p slot="tab-text">心情圈</p>
    </tab-bar-item>
    <tab-bar-item path='/serve'>
      <img slot="tab-img" src="../../assets/images/fontimg/cloud-server.svg">
      <img slot="tab-img-active" src="../../assets/images/fontimg/cloud-server-a.svg">
      <p slot="tab-text">服务</p>
    </tab-bar-item>
    <tab-bar-item path='/profile'>
      <img slot="tab-img" src="../../assets/images/fontimg/my.svg">
      <img slot="tab-img-active" src="../../assets/images/fontimg/my-a.svg">
      <p slot="tab-text">我的</p>
    </tab-bar-item>
  </div>
</template>
<script>
import TabBarItem from '../tabbar/TabBarItem';

export default {
  name: 'TabBar',
  components:{
    TabBarItem
  }
}
</script>
<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  width: 100vw;
  background-color: rgb(246, 246, 246);
}

</style>
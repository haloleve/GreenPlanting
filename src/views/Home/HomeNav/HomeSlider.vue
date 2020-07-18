<template>
  <div class="home-slider">
    <nav class="nav">
      <ul>
        <li class="current">首页</li>
        <li>花卉种植</li>
        <li>水果种植</li>
        <li>蔬菜作物种植</li>
        <li>观赏植物种植</li>
        <li>粮食食物种植</li>
        <li>纤维食物种植</li>
        <li>油科植物种植</li>
        <li>饮料植物种植</li>
        <li>药用植物种植</li>
      </ul>
    </nav>
  </div>
</template>
<script>
// import Touchs from '@/plugin/touch.js';

export default {
  name: 'HomeSlider',
  
}
</script>
<style lang="scss" scoped>
.home-slider{
  height: 30px;
  font-size: 12px;
  overflow:hidden;
  box-sizing: border-box;
  margin-bottom: 8px;
  .nav{
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    ul{
      width: 1000px;
      height: 100%;
      display: flex;
      align-items: center;
      li{
        height: 30px;
        width: 100px;
        box-sizing: border-box;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li.current{
        color: orange;
      }
    }
  }
}
.home-slider ::-webkit-scrollbar {
  display: none;
}
</style>
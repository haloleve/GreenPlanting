<template>
  <header>
    <div class="nav-bar-item">
      <div class="nav-back"><slot name="nav-back"></slot></div>
      <div class="nav-title"><slot name="nav-title"></slot></div>
      <div class="nav-lists"><slot name="nav-lists"></slot></div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'NavBar',
  components: {
    
  }
}
</script>
<style lang="scss" scope>
header{
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  // position: fixed;
  // top:0;
  // left: 0;
  width: 100vw;
  border-bottom: 1px solid #eaeaea;
  .nav-bar-item{
    display: flex;
    align-items: center;
    justify-content: center;
    height:49px;
  .nav-back{
    flex: 2;
  };
  .nav-title{
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;
  };
  .nav-lists{
    flex: 2;
  };
}
}
</style>
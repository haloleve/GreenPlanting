<template>
  <div class="nav-bar-item">
    <div class="nav-back"><slot name="nav-back"></slot></div>
    <div class="nav-title"><slot name="nav-title"></slot></div>
    <div class="nav-lists"><slot name="nav-lists"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'NavBarContent'
}
</script>
<style lang="scss" scope>
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
</style>
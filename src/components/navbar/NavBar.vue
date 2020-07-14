<template>
  <header>
    <nav-bar-content>
      <div slot="nav-title">首页</div>
    </nav-bar-content>
  </header>
</template>
<script>
import NavBarContent from '../navbar/NavBarContent';
export default {
  name: 'NavBar',
  components: {
    NavBarContent
  }
}
</script>
<style lang="scss" scope>
header{
  height: 49px;
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  background-color: #f6f6f6;
}
</style>
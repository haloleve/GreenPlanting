<template>
  <nav-bar class="menu-nav">
    <button @click="back" class="back el-icon-close" slot="nav-back"></button>
    <h3 slot="nav-title">趣识</h3>
  </nav-bar>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';

export default {
  name: 'MenuNav',
  components:{
    NavBar
  },
  methods: {
    back(){
      this.$router.push('/home');
    }
  },
}
</script>
<style lang="scss" scope>
.menu-nav{
  .back{
    width: 50px;
    height: 44px;
    color: #666;
    background-color: #fff;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 20px;
  }
}
</style>
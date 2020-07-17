<template>
  <nav-bar>
      <img slot="nav-back" src="https://cdnfile.aixifan.com/static/common/widget/header/img/logo.1630669e02c65e87236f.svg" />
      <div class="nav-search" slot="nav-title"><i @click="search" class="el-icon-search"></i></div>
    <button slot="nav-lists">请登录</button>
  </nav-bar>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';
export default {
  name: 'HomeNav',
  props:{
    path: {
      type: String
    }
  },
  data(){
    return {
      
    }
  },
  components: {
    NavBar
  },
  methods: {
    search(){
      this.$router.push(this.path);
    }
  },
}
</script>
<style lang="scss" scope>
.nav-back{
  img {
    height: 25px;
    width: 90%;
    padding-left: 5px;
  }
}
.nav-search {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  i{
    font-size: 21px;
    padding-right: 25px;
    padding-bottom: 5px;
  }
}
.nav-lists{
  display: flex;
  justify-content: center;
  button{
    width: 60px;
    height: 30px;
    padding: 10px;
    margin-bottom: 4px;
    font-size: 12px;
    color: #fff;
    border-radius: 15px;
    border: none;
    box-sizing: border-box;
    background: #1296db;
    font-weight: 500;
  }
}
</style>
<template>
  <nav-bar class="home-nav">
      <img slot="nav-back" src="https://cdnfile.aixifan.com/static/common/widget/header/img/logo.1630669e02c65e87236f.svg" />
      <div class="nav-search" slot="nav-title"><i @click="search" class="el-icon-search"></i></div>
    <button v-if="!userinfo" @click="toLogin" slot="nav-lists">请登录</button>
    <template v-else slot="nav-lists">
      <img :src="require(`@/assets/images/homepage/carous1.jpg`)" alt="" />
      <span>{{userinfo.username}}</span>
    </template>
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
      userinfo: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    search(){
      this.$router.push(this.path);
    },
    toLogin(){
      this.$router.push('/profile')
    }
  },
  created() {
    this.userinfo = JSON.parse(window.localStorage.getItem('userinfo'));
  }
}
</script>
<style lang="scss" scope>
.nav-back{
  img {
    height: 25px;
    width: 90%;
    padding-left: 10px;
    margin-top: 10px;
  }

}
.home-nav{
  background-image: linear-gradient(90deg, #1a2e4a 0, #409890 100%);
  border-bottom: none;
.nav-search {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  color: rgba(255,255,255,0.8);
  i{
    font-size: 21px;
    padding-right: 25px;
    padding-bottom: 5px;
    color: #00cc36;
  }
}
.nav-lists{
  display: flex;
  justify-content: center;
  img{
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 50%;
    margin-right: 5px;
    margin-top: 4px;
  }
  span{
    font-size: 14px;
    color: #fff;
  }
  button{
    width: 60px;
    height: 30px;
    padding: 10px;
    margin-bottom: 4px;
    font-size: 12px;
    color: #333;
    border-radius: 15px;
    border: none;
    box-sizing: border-box;
    background: linear-gradient(180deg, #16e09d 0%, #16e05a 100%);
    font-weight: 500;
  }
}
}


</style>
<template>
  <nav-bar>
    <button slot="nav-back" @click="back" class="back el-icon-arrow-left"></button>
    <div class="searchbox" slot="nav-title">
      <i class="el-icon-search"></i>
      <input @input="searching" type="search" maxlength="20" placeholder="请输入搜索内容">
    </div>
    <button slot="nav-lists" class="searching">搜索</button>
  </nav-bar>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';
import Searchings from '@/plugin/searching.js';

export default {
  name: "SearchNav",
  components:{
    NavBar
  },
  data(){
    return {
      sAjax: new Searchings(),
      handler: null,
    }
  },
  methods: {
    back(){
      this.$store.state.tabbar.style.display = 'flex';
      this.$router.push('/home');
    },
    searching(e){
      let vals = e.target.value;
      this.handler = this.sAjax.debounce(this.sAjax.send.bind(this.sAjax),500);
      this.handler(vals);
    }
  },
  mounted() {
    if(this.isSearch){
      this.$store.state.tabbar.style.display = 'none';
    }
  },
  computed: {
    isSearch(){
      return this.$route.path.indexOf('search') !== -1;
    }
  },
}
</script>
<style lang="scss" scope>
.nav-back{
  flex: 1.5 !important;;
} 
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
.searchbox{
  position: relative;
  height: 30px;
  width: 100%;
  background: #f7f7f7;
  border-radius: 15px;
  i:nth-child(1){
    position: absolute;
    left: 5px;
    top: 6px;
  }
  input{
    position: absolute;
    left: 20px;
    border: 0;
    font-size: 12px;
    color: #232326;
    padding-left: 5px;
    box-sizing: border-box;
    background: 0 0;
    height: 30px;
    text-overflow: ellipsis;
    vertical-align: middle;
    outline: none;
    white-space: nowrap;
    width: 85%;
    line-height: 30px;
  }
}
.searching{
    width: 60px;
    height: 30px;
    padding: 10px;
    margin: 0 0 5px 12px;
    font-size: 12px;
    color: #fff;
    border-radius: 14px;
    border: none;
    box-sizing: border-box;
    background: #1296db;
    font-weight: 600;
}
</style>
<template>
  <nav-bar>
    <button slot="nav-back" @click="back" class="back el-icon-arrow-left"></button>
    <div class="searchbox" slot="nav-title">
      <i class="el-icon-search"></i>
      <input ref="searchKey" @input="searching" type="search" maxlength="20" placeholder="请输入搜索内容">
    </div>
    <button @click="searchContent" slot="nav-lists" class="searching">搜索</button>
  </nav-bar>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';
import Searchings from '@/plugin/searching.js';
import { get,jsonp } from '@/utils/request';

export default {
  name: "SearchNav",
  props:{
    path: String
  },
  components:{
    NavBar
  },
  data(){
    return {
    }
  },
  methods: {
    back(){
      this.$store.state.tabbar.style.display = 'flex';
      this.$router.push(this.path);
    },
    searching(e){
      let vals = e.target.value;
      let jsonpUrl = `https://wq.jd.com/bases/searchdropdown/getdropdown?terminal=m&zip=1&key=${vals}&newjson=1&_=1596415708226&sceneval=2&callback=cb`;
      jsonp(jsonpUrl).then((res)=>{
        console.log();
        let args = { res, vals , searchInput:this.$refs.searchKey }
        this.$store.dispatch('searching',args);
      });
      // this.handler = this.sAjax.debounce(this.sAjax.send.bind(this.sAjax),500);
      // this.handler(vals);
    },
    searchContent(){
      let obj = [{id:'1',name: '我是测试的1',info: '我就是一个介绍啊'},{id:'2',name: '我是测试的2',info: '我就是一个介绍啊'},{id:'3',name: '我是测试的3',info: '我就是一个介绍啊'}];
      this.$store.commit('searchRes');
      this.$store.commit('setListInfo',obj);
      this.$router.push('/search/lists');
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
  flex: 1.5 !important;
} 
.nav-bar-item{
  position: relative;
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
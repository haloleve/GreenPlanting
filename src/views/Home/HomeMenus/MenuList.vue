<template>
  <div class="menu-list">
    <h3>趣识·百科</h3>
    <ul>
      <li v-for="(item) in listItem" :key="item.id">
        <router-link :to="item.path">
          <i class="el-icon-grape"></i>
          <span>{{item.name}}</span>
        </router-link>
      </li>
    </ul>
    <h3>其他频道</h3>
  </div>
</template>
<script>
export default {
  name: 'MenuList',
  data(){
    return {
      listItem: [ { id: 1, name: '观花植物',path:'/info/ghzw'} ,{ id: 2, name: '室内植物',path:'/info/snzw'} , { id: 3, name: '认识植物',path:'/info/rszw'} ,{ id: 4, name: '食用植物',path:'/info/syzw'} ,{ id: 5, name: '居家植物',path:'/info/jjzw'} ,{ id: 6, name: '草本植物',path:'/info/cbzw'} ,{ id: 7, name: '观叶植物',path:'/info/gyzw'} ,{ id: 8, name: '木本植物',path:'/info/mbzw'} ,{ id: 9, name: '水培植物',path:'/info/spzw'} ,{ id: 10, name: '水生植物',path:'/info/sszw'} ,{ id: 11, name: '植物名词解释',path:'/info/mcjs'} ,{ id: 12, name: '百度百科',path:'/info/bdbk'}]
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-list{
  h3{
    height: 27px;
    background-color: #f7f7f7;
    color: #999;
    padding-left: 16px;
    font-size: 13px;
    line-height: 27px;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    li{
      width: 33.333vw;
      min-height: 100px;
      font-size: 15px;
      color: #666;
      > a{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      i{
        display: inline-block;
        width: 55px;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: greenyellow;
      }
    }
    li:nth-of-type(-n+6):nth-of-type(n+4){
      border-bottom: 1px solid #f0f0f0;
    }
  }
  
}
</style>
<template>
  <div class="home-slider">
    <nav class="nav">
      <ul>
        <li v-for="(item,index) in sliders" @click="clickCur(index)" :class="{current:i === index}" :key="item.id">
          <router-link :to="item.path">{{item.vals}}</router-link>
        </li>
      </ul>
    </nav>
    <button @click="searchMenu" class="search-menu el-icon-menu"></button>
  </div>
</template>
<script>

export default {
  name: 'HomeSlider',
  data(){
    return {
      i: 0,
      sliders: [
        { id: 1,path: '/home/',vals: '所有'},
        { id: 2,path: '/home/hhzz',vals: '花卉种植'},
        { id: 3,path: '/home/sgzz',vals: '水果种植'},
        { id: 4,path: '/home/sczwzz',vals: '蔬菜种植'},
        { id: 5,path: '/home/gszwzz',vals: '观赏植物种植'},
        { id: 6,path: '/home/lszwzz',vals: '粮食植物种植'},
        { id: 7,path: '/home/xwzwzz',vals: '纤维食物种植'},
        { id: 8,path: '/home/ykzwzz',vals: '油科植物种植'},
        { id: 9,path: '/home/ylzwzz',vals: '饮料植物种植'},
        { id: 10,path: '/home/yyzwzz',vals: '药用植物种植'},
      ]
    }
  },
  methods: {
    searchMenu(){
      this.$router.push('/home/menu');
    },
    clickCur(index){
      this.i = index;
    }
  },
  
}
</script>
<style lang="scss" scoped>
.home-slider{
  height: 46px;
  font-size: 12px;
  overflow:hidden;
  box-sizing: border-box;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  color: rgba(255,255,255,0.8);
  background-image: linear-gradient(90deg, #1a2e4a 0, #409890 100%);
  .nav{
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    flex: 1;
    -webkit-overflow-scrolling: touch;
    ul{
      min-width: 1200px;
      font-size: 16px;
      padding: 5px 0;
      a{
        text-decoration: none;
        color: inherit;
      }
      li{
        float: left;
        position: relative;
        padding: 0 18px;
        line-height: 40px;
      }
      li.current{
        color: #fff;
        font-size: 18px;
      }
      li.current::after{
        content: "";
        display: block;
        position: absolute;
        top: 32px;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 3px;
        background-image: linear-gradient(to right, #16e05a 0, #16e09d 100%);;
      }
    }
  }
  .search-menu{
    height: 100%;
    width: 45px;
    font-size: 16px;
    color: rgba(255,255,255,0.8);
    padding-left: 10px;
    text-align: center;
    border: none;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.home-slider ::-webkit-scrollbar {
  display: none;
}
</style>
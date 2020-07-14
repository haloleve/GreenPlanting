<template>
  <div class="tab-bar-item" @click="tabClick">
    <div v-if="!isImgAct"><slot name="tab-img"></slot></div>
    <div v-else><slot name="tab-img-active"></slot></div>
    <div :style="isActColor"><slot name="tab-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props:{
    path: String,
    actColor:{
      type: String,
      default: '#1296db'
    }
  },
  data(){
    return{
      // isImgAct: false
    }
  },
  computed:{
    isImgAct(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActColor(){
      return this.isImgAct ? {color: this.actColor} : {};
    }
  },
  methods:{
    tabClick(){
      this.$router.push(this.path);
    }
  }
}
</script>
<style lang="scss" scoped>
/* @import '../../assets/css/iconfont.css'; */
.tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
  img{
    width: 20px;
    height: 20px;
    margin: {
      top: 5px;
    };
    vertical-align: middle;
  };
  p{
    padding-top: 5px;
  }
}
</style>
<template>
  <nav-bar class="pinlun-nav">
    <button @click="back" class="back el-icon-close" slot="nav-back"></button>
    <h3 slot="nav-title">全部评论</h3>
    <button v-if="isAsync" slot="nav-lists" @click="order" class="order el-icon-s-operation"></button>
    <button v-else slot="nav-lists" @click="order" class="order el-icon-s-unfold"></button>
  </nav-bar>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';
import MyAlert from '@/plugin/myAlert.js';

export default {
  name: 'PinLunNav',
  components:{
    NavBar
  },
  props: {
    isAsync: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      
    }
  },
  methods: {
    back(){
      this.$store.state.tabbar.style.display = 'flex';
      this.$router.push('/mood');
    },
    order(){
      // this.isAsync = !this.isAsync;
      if(this.isAsync){
        new MyAlert('按时间');
      }else{
        new MyAlert('按评论');
      }
      this.$emit('cgAsync',!this.isAsync);

    }
  },
  mounted() {
    if(this.isPinLun){
      this.$store.state.tabbar.style.display = 'none';
    }
  },
  computed: {
    isPinLun(){
      return this.$route.path.indexOf('pinlun') !== -1;
    }
  },
}
</script>
<style lang="scss" scope>
.pinlun-nav{
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
  .order{
    @extend .back;
    margin-left: 20px;
  }
}
</style>
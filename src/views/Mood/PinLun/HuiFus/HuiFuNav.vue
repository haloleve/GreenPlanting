<template>
  <nav-bar class="huifu-nav">
    <button @click="back" class="back el-icon-close" slot="nav-back"></button>
    <h3 slot="nav-title">全部回复</h3>
  </nav-bar>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';

export default {
  name: 'HuiFuNav',
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
      this.$router.push('/mood/pinlun');
    },
    
  },
  mounted() {
    if(this.isHuiFu){
      this.$store.state.tabbar.style.display = 'none';
    }
  },
  computed: {
    isHuiFu(){
      return this.$route.path.indexOf('huifu') !== -1;
    }
  },
}
</script>
<style lang="scss" scope>
.huifu-nav{
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
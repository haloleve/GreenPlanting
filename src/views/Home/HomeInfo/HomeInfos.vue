<template>
  <div class="plane-infos">
    <nav-bar>
      <button slot="nav-back" @click="back" class="back el-icon-arrow-left"></button>
      <div slot="nav-title">
        <h3>{{getCategory}}</h3>
      </div>
    </nav-bar>
    <item-info></item-info>
  </div>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';
import ItemInfo from './ItemInfo';

export default {
  name: 'HomeInfo',
  components:{
    NavBar,
    ItemInfo
  },
  methods: {
    back(){
      this.$store.state.tabbar.style.display = 'flex';
      this.$router.push('/home');
    }
  },
  mounted() {
    if(this.isSearch){
      this.$store.state.tabbar.style.display = 'none';
    }
  },
  computed: {
    isSearch(){
      return this.$route.path.indexOf('info') !== -1;
    },
    getCategory(){
      return this.$route.params.category;
    }
  },
}
</script>
<style lang="scss" scope>
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

</style>
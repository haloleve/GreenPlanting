<template>
  <main>
    <menu-nav></menu-nav>
    <menu-list></menu-list>
  </main>
</template>
<script>
import MenuNav from './MenuNav';
import MenuList from './MenuList';

export default {
  name: 'HomeMenu',
  components:{
    MenuNav,
    MenuList
  },
  mounted() {
    if(this.isMenu){
      this.$store.state.tabbar.style.display = 'none';
    }
  },
  computed: {
    isMenu(){
      return this.$route.path.indexOf('menu') !== -1;
    }
  },
}
</script>
<style lang="scss" scoped>
main{
  margin-bottom: 0;
}
</style>
<template>
  <main>
    <menu-nav></menu-nav>
  </main>
</template>
<script>
import MenuNav from './MenuNav';

export default {
  name: 'HomeMenu',
  components:{
    MenuNav
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

</style>
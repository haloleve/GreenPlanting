<template>
  <div>
    <button @click="back">back</button>
  </div>
  
</template>
<script>
export default {
  name: 'Search',
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
      return this.$route.path.indexOf('search') !== -1;
    }
  },
}
</script>
<style lang="scss" scope>

</style>
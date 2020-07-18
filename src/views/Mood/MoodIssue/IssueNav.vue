<template>
  <nav-bar class="issue-header">
    <button slot="nav-back" @click="back" class="back">取消</button>
    <button slot="nav-lists">发表</button>
  </nav-bar>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';

export default {
  name: 'IssueNav',
  components:{
    NavBar
  },
  methods: {
    back(){
      this.$store.state.tabbar.style.display = 'flex';
      this.$router.push('/mood');
    }
  },
  mounted() {
    if(this.isSearch){
      this.$store.state.tabbar.style.display = 'none';
    }
  },
  computed: {
    isSearch(){
      return this.$route.path.indexOf('issue') !== -1;
    }
  },
}
</script>
<style lang="scss" scoped>
.issue-header{
  .back{
    width: 50px;
    height: 42px;
    padding-left: 15px;
    color: #666;
    background-color: #fff;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-size: 14px;
  }
  .nav-lists{
    display: flex;
    justify-content: center;
    button{
      width: 60px;
      height: 30px;
      padding: 10px;
      margin-bottom: 4px;
      font-size: 12px;
      color: #fff;
      border-radius: 15px;
      border: none;
      box-sizing: border-box;
      background: #1296db;
      font-weight: 500;
    }
  }
}

</style>
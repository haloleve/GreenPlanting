<template>
  <nav-bar class="mood-nav">
    <h3 slot="nav-title">心情圈</h3>
    <div slot="nav-lists">
      <button @click="issue">+</button>
    </div>
  </nav-bar>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';

export default {
  name: 'MoodNav',
  components:{
    NavBar
  },
  methods: {
    issue(){
      this.$router.push('/issue');
    }
  },
}
</script>
<style lang="scss" scope>
.mood-nav{
  > .nav-bar-item{
    > .nav-lists{
      button{
        width: 32px;
        height: 32px;
        margin-left: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(241, 234, 130);
        color: #333;
        font-size: 14px;
        border: 1px solid #333;
      }
   }
  }
  
}
</style>
<template>
  <button @click="btnToTop" ref="back" class="el-icon-upload2"></button>
</template>
<script>
export default {
  name: 'BackTop',
  mounted() {
    window.addEventListener('scroll', this.toTop);
  },
  methods: {
    toTop(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > 300){
        this.$refs.back.className = 'back-top el-icon-upload2'
      }else{
        this.$refs.back.className = 'el-icon-upload2';
      }
    },
    btnToTop(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let timeId = setInterval(()=>{
        if(document.documentElement.scrollTop == 0){
          clearInterval(timeId);
        }
        document.documentElement.scrollTop -= 60;
      },20);
      
    }
  },
}
</script>
<style lang="scss" scoped>
button{
  display: none;
}
.back-top{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: rgb(195, 236, 236);
  background: #fff;
  border: 1px solid #b3b3b3;
  outline: none;
  border-radius: 50%;
}
</style>
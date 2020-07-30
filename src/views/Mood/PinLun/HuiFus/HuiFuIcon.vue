<template>
  <div class="huifu-icons">
    <div>
      <span class="el-icon-caret-top">12</span>
      <span class="el-icon-caret-bottom">22</span>
      <span class="el-icon-crop"> &nbsp; &nbsp; 分享</span>
    </div>
    <div>
      <span class="el-icon-position"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HuiFuIcon",
}
</script>
<style lang="scss" scoped>
.huifu-icons{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  font-size: 12px;
  span{
    margin: 0 5px;
  }
}
</style>
<template>
  <div class="pinlun-icons">
    <div>
      <span class="el-icon-caret-top">12</span>
      <span class="el-icon-caret-bottom">22</span>
      <span class="el-icon-crop"> &nbsp; &nbsp; 分享</span>
      <span class="el-icon-chat-round"> &nbsp; &nbsp; 回复</span>
    </div>
    <div>
      <span class="el-icon-position"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "PinLunIcon",
}
</script>
<style lang="scss" scoped>
.pinlun-icons{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  font-size: 12px;
  padding-bottom: 10px;
  span{
    margin: 0 5px;
  }
}
</style>
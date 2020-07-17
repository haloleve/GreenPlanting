<template>
  <left-right>
    <h2 slot="title-left">最近搜索</h2>
    <i slot="title-right" class="el-icon-delete"></i>
  </left-right>
</template>
<script>
import LeftRight from '@/components/common/LeftRight';

export default {
  name: 'SearchTitle',
  components: {
    LeftRight
  }
}
</script>
<style lang="scss" scope>
.sec-title{
  margin-top: 12px;
  h2{
    font-size: 15px;
    line-height: 15px;
    color: #232326;
    width: 100px;
    padding-left: 1px;
  }
  i{
    position: relative;
    top: 2px;
    width: 15px;
    height: 15px;
  }
}
</style>
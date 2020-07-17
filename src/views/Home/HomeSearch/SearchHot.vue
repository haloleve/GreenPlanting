<template>
  <left-right>
    <h2 slot="title-left">热搜</h2>
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
}
</style>
<template>
  <div class="sec-title">
    <div class="title-left">
      <slot name="title-left"></slot>
    </div>
    <div class="title-right">
      <slot name="title-right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LeftRight'
}
</script>
<style lang="scss" scope>
.sec-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 15px;
}
</style>
<template>
  <div class="citem">
    <slot name="citem"></slot>
  </div>
</template>
<script>
export default {
  name: "CItem"
}
</script>
<style lang="scss" scope>
.citem{
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 65px;
  height: 34px;
  color: #505050;
  font-size: 14px;
  margin: 8px 10px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 15px;
}
</style>
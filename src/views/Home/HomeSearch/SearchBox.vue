<template>
  <div class="search-box">
    <slot name="search-box"></slot>
  </div>
</template>
<script>

export default {
  name: "SearchBox",
  components: {
    
  }
}
</script>
<style lang="scss" scope>
.search-box{
  margin-top: 10px;
  padding: 4px 10px;
  min-height: 120px;
  overflow: hidden;
}
</style>
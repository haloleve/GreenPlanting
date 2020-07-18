<template>
  <div class="mood-content">
    <mood-content-item></mood-content-item>
    <mood-content-item></mood-content-item>
  </div>
</template>
<script>
import MoodContentItem from './MoodContentItem'

export default {
  name: 'MoodContent',
  components: {
    MoodContentItem
  }
}
</script>
<style lang="scss" scoped>
.mood-content{
  margin-top: 50px;
  background: #f6f6f6;
  .content-item{
    margin-bottom: 15px;
    background: #fff;
  }
}
</style>
<template>
  <div class="card-box">
      <item-card-top>
        <img slot="item-top" src="@/assets/images/homepage/plane01.jpg" alt="plane">
        <template slot="item-bot">
          <h3>我是名字</h3>
          <p>吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/homepage/plane01.jpg" alt="plane">
        <template slot="item-bot">
          <h3>我是名字</h3>
          <p>我是介绍</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/homepage/plane01.jpg" alt="plane">
        <template slot="item-bot">
          <h3>我是名字</h3>
          <p>我是介绍</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/homepage/plane01.jpg" alt="plane">
        <template slot="item-bot">
          <h3>我是名字</h3>
          <p>我是介绍</p>
        </template>
      </item-card-top>
      <item-card-top class="full">
        <img slot="item-top" src="@/assets/images/homepage/plane01.jpg" alt="plane">
        <template slot="item-bot">
          <h3>我是名字</h3>
          <p>我是介绍</p>
        </template>
      </item-card-top>
    </div>
</template>
<script>
import ItemCardTop from '@/components/common/ItemCardTop';

export default {
  name: 'CardBox',
  components: {
    ItemCardTop
  }
}
</script>
<style lang="scss" scope>
.card-box{
  width: 100%;
  padding: 5px 10px 5px 15px;
  overflow: hidden;
}
</style>
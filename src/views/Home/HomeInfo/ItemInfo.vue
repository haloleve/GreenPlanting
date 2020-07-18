<template>
  <div class="item-info">
    <item-card-left>
      <img slot="item-left" src="@/assets/images/homepage/plane01.jpg" alt="plane">
      <template slot="item-right">
        <h3>孔雀竹芋的养护心得</h3>
        <p>孔雀竹芋，叶面上有墨绿与白色或淡黄相间的羽状斑纹，并具独特金属光泽</p>
        <div class="badge">
          <p>关键词: <span>孔雀竹</span><span>养护</span></p>
          <i class="el-icon-more"></i>
        </div>
      </template>
    </item-card-left>
    <item-card-left>
      <img slot="item-left" src="@/assets/images/homepage/plane01.jpg" alt="plane">
      <template slot="item-right">
        <h3>我是名字</h3>
        <p>我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍我是介绍</p>
        <div class="badge">
          <p>类别: <span>我的</span><span>你的</span></p>
          <i class="el-icon-more"></i>
        </div>
      </template>
    </item-card-left>
  </div>
  
</template>
<script>
import ItemCardLeft from '@/components/common/ItemCardLeft';

export default {
  name: 'ItemInfo',
  components: {
    ItemCardLeft
  },
  
}
</script>
<style lang="scss" scope>

</style>
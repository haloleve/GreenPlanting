<template>
  <div class="card-box">
      <item-card-top>
        <img slot="item-top" src="@/assets/images/homepage/plane03.jpg" alt="plane">
        <template slot="item-bot">
          <h3>孔雀竹芋</h3>
          <p>孔雀竹芋，叶面上有墨绿与白色或淡黄相间的羽状斑纹，并具有独特金属光泽，好似孔雀的尾羽，因而叫孔雀竹芋。</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/homepage/plane02.jpg" alt="plane">
        <template slot="item-bot">
          <h3>马蹄莲</h3>
          <p>性喜温暖气候，不耐寒，不耐高温，生长适温为20℃左右，0℃时根茎就会受冻死亡。冬季需要充足的日照，光线不足着花少，稍耐阴。</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/homepage/plane04.jpg" alt="plane">
        <template slot="item-bot">
          <h3>倒挂金钟</h3>
          <p>倒挂金钟在我国各地均有栽培，其花色艳，花期长，是深受人们喜爱的盆栽花卉。</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/homepage/plane05.jpg" alt="plane">
        <template slot="item-bot">
          <h3>君子兰</h3>
          <p>君子兰喜欢半阴，在室内种植君子兰需要人工进行调整光照对它的影响。君子兰的叶子有趋光性，如果将它长期放在室内一个地方，叶子必定朝太阳的方向偏转</p>
        </template>
      </item-card-top>
      <item-card-top class="full">
        <img slot="item-top" src="@/assets/images/homepage/plane07.png" alt="plane">
        <template slot="item-bot">
          <h3>昙花一现</h3>
          <p>昙花都是在晚上才默默开花，开出的花大而美丽，可惜时间也非常短促，只有3～4个小时，就是因为这一特性，引来了许多花友的追捧。如果你也想养好昙花，阅读本文你应该收获不少。</p>
        </template>
      </item-card-top>
      <div class="more-cg">
        <el-button @click="toMore" type="primary" icon="el-icon-refresh-left">更多</el-button>
        <el-button type="primary" icon="el-icon-refresh-left">换一批</el-button>
      </div>
    </div>
</template>
<script>
import ItemCardTop from '@/components/common/ItemCardTop';

export default {
  name: 'HFCardBox',
  components: {
    ItemCardTop
  },
  methods: {
    toMore(){
      this.$router.push('/home/hhzz')
    }
  },
}
</script>
<style lang="scss" scope>
.card-box{
  width: 100%;
  padding: 5px 10px 5px 15px;
  margin-bottom: 30px;
  overflow: hidden;
  .more-cg{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    .el-button{
      margin: 10px;
      margin-top: 30px;
      margin-bottom: 0;
      padding: 12px 40px;
      background-color: #f5f7fa;
      color: #222;
      border: none;
      border-radius: 20px;
    }
    i{
      color: #0bbe06;
    }
  }
}
</style>
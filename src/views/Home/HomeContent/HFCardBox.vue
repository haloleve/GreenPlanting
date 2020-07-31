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
      this.$router.push('/info')
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
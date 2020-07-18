<template>
  <div class="content">
    <div class="content-title">
      <h2>种植心得</h2>
    </div>
    <left-right>
      <h4 slot="title-left">花卉种植</h4>
      <span slot="title-right" @click="toItemList">更多</span>
    </left-right>
    <hf-card-box></hf-card-box>
    <left-right>
      <h4 slot="title-left">观赏植物种植</h4>
      <span slot="title-right">更多</span>
    </left-right>
    <gs-card-box></gs-card-box>
    <left-right>
      <h4 slot="title-left">粮食植物种植</h4>
      <span slot="title-right">更多</span>
    </left-right>
    <left-right>
      <h4 slot="title-left">纤维植物种植</h4>
      <span slot="title-right">更多</span>
    </left-right>
  </div>
  
</template>
<script>
import LeftRight from '@/components/common/LeftRight';
import HfCardBox from './HFCardBox';
import GsCardBox from './GSCardBox';

export default {
  name: 'HomeContent',
  components: {
    LeftRight,
    HfCardBox,
    GsCardBox,
  },
  methods: {
    toItemList(){
      this.$router.push('/info')
    }
  },
}
</script>
<style lang="scss" scope>
.content-title{
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    font-size: 18px;
    line-height: 14px;
    font-weight: 400;
    margin-left: 10px;
    padding-top: 10px;
  }
}
.title-left{
  border-left: 5px solid #1296db;
  border-bottom: 1px solid #1296db;
  font-size: 14px;
  h4{
    padding: 0 5px 0 12px;
  }
}
.title-right{
  span{
    font-size: 12px;
  }
}

</style>
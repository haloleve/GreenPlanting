<template>
  <div class="content">
    <left-right>
      <h4 slot="title-left">花卉种植</h4>
    </left-right>
    <hf-card-box></hf-card-box>
    <left-right>
      <h4 slot="title-left">观赏植物种植</h4>
    </left-right>
    <gs-card-box></gs-card-box>
    <left-right>
      <h4 slot="title-left">粮食植物种植</h4>
    </left-right>
    <left-right>
      <h4 slot="title-left">纤维植物种植</h4>
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
  border-left: 3px solid #1296db;
  font-size: 14px;
  margin: 5px 0 10px -4px;
  h4{
    font-size: 16px;
    line-height: 22px;
    font-weight: 900;
    padding: 0 5px 0 12px;
  }
}
.title-right{
  span{
    font-size: 12px;
  }
}

</style>
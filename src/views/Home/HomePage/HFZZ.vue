<template>
  <div>
    <img id="banner" src="@/assets/images/types/hhzz/type1.jpg" />
    <left-right>
      <h3 slot="title-left">为你精选</h3>
    </left-right>
    <div class="picks">
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
    </div>
    <left-right>
      <h3 slot="title-left">花卉种植</h3>
    </left-right>
    <div class="picks">
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
      <item-card-top>
        <img slot="item-top" src="@/assets/images/types/hhzz/type1.jpg" />
        <template slot="item-bot">
          <h4>金边吊兰</h4>
          <p>吊兰自然下垂的枝叶非常美观</p>
        </template>
      </item-card-top>
    </div>
    <p class="bottom">到底啦</p>
  </div>
</template>
<script>
import LeftRight from '@/components/common/LeftRight';
import ItemCardTop from '@/components/common/ItemCardTop';

export default {
  name: 'HFZZ',
  components:{
    LeftRight,
    ItemCardTop
  }
}
</script>
<style lang="scss" scoped>
#banner{
  max-height: 200px;
  min-width: 95vw;
  margin: 10px;
}
h3{
  color: #000;
  padding-left: 4px;
}
.picks{
  overflow: hidden;
  margin-bottom: 30px;
}
.bottom{
  color: #a2a2b6;
  font-size: 13px;
  text-align: center;
  padding: 10px 0 20px 0;
}
</style>
<template>
  <div class="hot-list">
    <ul>
      <li>1.北国风光，千里冰封，万里雪飘</li>
      <li>2.望长城内外，惟余莽莽</li>
      <li>3.大河上下，顿失滔滔</li>
      <li>4.山舞银蛇，原驰蜡象</li>
      <li>5.欲与天公试比高</li>
      <li>6.须晴日，看红装素裹，分外妖娆</li>
      <li>7.江山如此多娇，引无数英雄竞折腰</li>
      <li>8.惜秦皇汉武，略输文采</li>
      <li>9.唐宗宋祖，稍逊风骚</li>
      <li>10.一代天骄，成吉思汗，只识弯弓射大雕</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SearchHotList',
}
</script>
<style lang="scss" scope>
.hot-list{
  width: 100vw;
  ul {
    padding: 0 10px;
    > li{
      float: left;
      width: 50%;
      height: 25px;
      line-height: 25px;
      font-size: 12px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
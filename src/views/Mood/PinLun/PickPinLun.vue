<template>
  <div class="pick-pl">
    <h3>热门评论</h3>
    <div class="hot-replys">
      <hot-reply></hot-reply>
      <hot-reply></hot-reply>
    </div>
    <ul>
      <h3>全部回复共<span>4条</span></h3>
      <pick-item></pick-item>
      <pick-item></pick-item>
      <pick-item></pick-item>
    </ul>
    <div class="pick-input">
      <img src="@/assets/images/homepage/plane01.jpg" alt="">
      <input type="text" placeholder="请输入评论..."><i class="el-icon-chat-round"></i>
    </div>
  </div>
</template>
<script>
import PickItem from './PickItem.vue';
import HotReply from './HotReply.vue';

export default {
  name: 'PickPinLun',
  components:{
    PickItem,
    HotReply
  }
}
</script>
<style lang="scss" scoped>
.pick-pl{
  h3{
    font-size: 16px;
    color: #000;
    margin: 10px 0 10px 10px;
  }
  
  .hot-replys{
    border-bottom: 15px solid #ddd;
    .item-reply:first-of-type{
      border-top: none;
    }
  }
  .pick-input{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 45px;
    width: 100vw;
    background: rgba(240, 248, 255,.8);
    > img{
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-left: 10px;
    }
    input{
      flex: 1;
      height: 30px;
      font-size: 14px;
      color: #ccc;
      border-radius: 15px;
      border: 1px solid #ccc;
      outline: none;
      margin: 5px 5px 0 15px; 
      padding-left: 15px;
      padding-right: 30px;
      position: relative;
    }
    i{
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }
}
</style>
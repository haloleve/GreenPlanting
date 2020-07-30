<template>
  <li>
    <img src="@/assets/images/homepage/plane01.jpg" alt="">
    <section class="time-content">
      <p>用户名<i class="el-icon-male"></i></p>
      <time>01.01</time>
      <p class="time-comment">白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
        白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
        白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
        白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
      </p>
      <pin-lun-icon></pin-lun-icon>
      <reply-box></reply-box>
    </section>
  </li>
</template>
<script>
import PinLunIcon from '../PinLunIcon';
import ReplyBox from '../ReplyBox.vue';

export default {
  name: 'PickItem',
  components:{
    ReplyBox,
    PinLunIcon
  }
}
</script>
<style lang="scss" scoped>
li {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 5px;
  border-bottom: 1px solid #dedede;
  > img{ 
    align-self: flex-start;
    width: 35px;
    height: 35px;
    margin: 0 15px;
    border-radius: 50%;
  }
  .time-content{
    flex: 1;
    > p.time-comment{
      max-width: 340px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
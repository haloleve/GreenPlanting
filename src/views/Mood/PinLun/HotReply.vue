<template>
    <div class="item-reply">
      <img src="@/assets/images/homepage/plane01.jpg" alt="">
      <section class="reply-content">
        <p>用户名<i class="el-icon-male"></i></p>
        <time>01.01</time>
        <p class="reply-comment">白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
          白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
          白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
          白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
        </p>
        <pin-lun-icon></pin-lun-icon>
      </section>
    </div>
</template>
<script>
import PinLunIcon from './PinLunIcon';

export default {
  name: 'HotReply',
  components: {
    PinLunIcon
  }
}
</script>
<style lang="scss" scoped>
.item-reply{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 5px;
  border-top: 1px solid #000;
  > img{ 
    align-self: flex-start;
    width: 35px;
    height: 35px;
    margin: 0 15px;
    border-radius: 50%;
  }
  .reply-content{
    flex: 1;
    > p.reply-comment{
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
<template>
  <li>
    <img src="@/assets/images/homepage/plane01.jpg" alt="">
    <section class="pick-content">
      <p>用户名<i class="el-icon-male"></i></p>
      <time>01.01</time>
      <p class="pick-comment">白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
        白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
        白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
        白日依山尽，黄河入海流。欲穷千里目，更上一层楼。
      </p>
      <hui-fu-icon></hui-fu-icon>
    </section>
  </li>
</template>
<script>
import HuiFuIcon from './HuiFuIcon';

export default {
  name: 'HuiFuItem',
  components: {
    HuiFuIcon
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
  .pick-content{
    flex: 1;
    > p.pick-comment{
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
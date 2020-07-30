<template>
  <main>
    <hui-fu-nav></hui-fu-nav>
    <div class="all-reply">
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
          <hui-fu-icon></hui-fu-icon>
        </section>
      </div>
      <ul>
        <h3>全部回复共<span>4条</span></h3>
        <hui-fu-item></hui-fu-item>
        <hui-fu-item></hui-fu-item>
        <hui-fu-item></hui-fu-item>
      </ul>
    </div>
  </main>
</template>
<script>
import HuiFuNav from './HuiFuNav';
import HuiFuIcon from './HuiFuIcon';
import HuiFuItem from './HuiFuItem';

export default {
  name: 'HuiFu',
  components: {
    HuiFuNav,
    HuiFuItem,
    HuiFuIcon
  }
}
</script>
<style lang="scss" scoped>
.all-reply{
  h3{
    font-size: 16px;
    color: #000;
    margin: 10px 0 10px 10px;
  }
  .item-reply{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 5px;
    border-bottom: 15px solid #dddddd;
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
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
<template>
  <div class="reply">
    <ul>
      <li><p><em>用户1:</em>我是评论我是评论我是评论我是评论我是评论我是评论我是评论</p></li>
      <li><p><em>用户1:</em>我是评论</p></li>
      <li><p><em>用户1:</em>我是评论</p></li>
    </ul>
    <p @click="huifu">查看全部12条回复</p>
  </div>
</template>
<script>
export default {
  name: 'ReplyBox',
  methods: {
    huifu(){
      this.$router.push('/mood/pinlun/huifu');
    }
  },
}
</script>
<style lang="scss" scoped>
.reply{
  background: rgba(222, 222, 222,.6);
  color: #000;
  font-size: 14px;
  max-width: 340px;
  max-height: 120px;
  padding: 10px;
  box-sizing: border-box;
  li{
    display: flex;
    align-items: center;
    margin: 5px 0;
    em{
      font-style: normal;
      color: skyblue;
      margin-right: 4px;
    }
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
<template>
    <div class="content-item">
      <div class="user">
        <img src="@/assets/images/homepage/plane01.jpg" alt="用户头像">
        <p>王多鱼</p>
      </div>
      <mood-comment-content>
        <p slot="comment-cont">三峡日报 疏花水柏枝是极度濒危易灭绝的野生植物。上世纪末，植物专家断言三峡水库建成蓄水后其天然种群将灭绝。4月11日，记者在三峡苗圃研究中心惊喜地发现，1000多株疏花水柏枝在这里旺盛地生长着。</p>
        <img slot="comment-pic" src="@/assets/images/homepage/plane01.jpg" alt="">
        <comment-icon slot="comment-icon" @updateReply="updateReply" :reply="isReply"></comment-icon>
      </mood-comment-content>
      <mood-comment v-if="isReply"></mood-comment>
    </div>
</template>
<script>
import MoodCommentContent from '../MoodComment/MoodCommentContent';
import MoodComment from '../MoodComment/MoodComments';
import CommentIcon from '../MoodComment/CommentIcon';

export default {
  name: 'MoodContentItem',
  components: {
    MoodCommentContent,
    MoodComment,
    CommentIcon
  },
  data(){
    return {
      isReply: true
    }
  },
  methods: {
    updateReply(){
      this.isReply = !this.isReply;
    }
  },
}
</script>
<style lang="scss" scoped>
.content-item{
  margin-bottom: 15px;
  .user{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
      width: 40px;
      height: 40px;
      margin: 15px 0 15px 15px;
      border-radius: 50%;
    }
    p{
      font-size: 14px;
      margin-left: 10px;
    }
  }
  .comment-content{
    padding: 0 15px;
    margin-bottom: 10px;
    img{
      width: 100%;
      margin: 5px auto;
      max-width: 375px;
      max-height: 120px;
    }
    p{
      margin: 5px 0 10px 0;
      padding: 0 10px;
      text-indent: 1em;
      font-size: 14px;
    }
  }
  .comments{
    padding: 0 15px;
    .el-input{
      height: 30px;
    }
    
  }
}
</style>
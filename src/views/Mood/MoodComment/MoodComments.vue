<template>
  <div class="comments">
    <el-input placeholder="请输入内容">
      <template slot="append"><i class="el-icon-position"></i></template>
    </el-input>
    <div class="user-comment">
      <ul>
        <li>
          <img src="@/assets/images/homepage/plane01.jpg" alt="用户头像">
          <div class="user-comment-content">
            <p>用户名<span class="user-badge el-icon-male"></span></p>
            <time>01-01</time>
            <div class="comment-text">朝辞白帝彩云见,千里江陵一日还朝辞白帝彩云见,千里江陵一日还朝辞白帝彩云见,千里江陵一日还</div>
            <comment-icon></comment-icon>
          </div>
        </li>
        <li>
          <img src="@/assets/images/homepage/plane01.jpg" alt="用户头像">
          <div class="user-comment-content">
            <p>用户名<span class="user-badge el-icon-male"></span></p>
            <time>01-01</time>
            <div class="comment-text">朝辞白帝彩云见,千里江陵一日还朝辞白帝彩云见,千里江陵一日还朝辞白帝彩云见,千里江陵一日还</div>
            <comment-icon></comment-icon>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import CommentIcon from './CommentIcon';

export default {
  name: 'MoodComment',
  components:{
    CommentIcon
  },
  
}
</script>
<style lang="scss" scoped>
.user-comment{
  ul{
    padding-top: 15px;
    border-top: 1px solid #ccc;
    li{
      display: flex;
      min-height: 80px;
      max-height: 120px;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      > img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
      .user-comment-content{
        margin-left: 15px;
        font-size: 14px;
        .comment-text{
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        time{
          font-size: 12px;
        }
        .comment-icons{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 5px;
          font-size: 12px;
          span{
            margin: 0 5px;
          }
        }
      }
    }
  }
}
</style>
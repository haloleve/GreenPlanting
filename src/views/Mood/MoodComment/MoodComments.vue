<template>
  <div class="comments">
    <div class="user-comment">
      <h3>评论</h3>
      <ul>
        <li>
          <img src="@/assets/images/homepage/plane01.jpg" alt="用户头像">
          <div class="user-comment-content">
            <p>
              <span>用户名</span>
              <span><i class="el-icon-thumb"></i>49</span>
              </p>
            <div class="comment-text">朝辞白帝彩云见,千里江陵一日还朝辞白帝彩云见,千里江陵一日还朝辞白帝彩云见,千里江陵一日还</div>
          </div>
        </li>
        <li>
          <img src="@/assets/images/homepage/plane01.jpg" alt="用户头像">
          <div class="user-comment-content">
            <p>
              <span>用户名</span>
              <span><i class="el-icon-thumb"></i>49</span>
            </p>
            <div class="comment-text">朝辞白帝彩云见,千里江陵一日还朝辞白帝彩云见,千里江陵一日还朝辞白帝彩云见,千里江陵一日还</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="all-comment">
      <p @click="toPinLun">查看全部100条评论</p>
    </div>
    <div class="user-comments-input">
      <img src="@/assets/images/homepage/plane01.jpg" alt="用户头像">
      <input @click="toPinLun" type="text" placeholder="添加评论..">
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
  methods: {
    toPinLun(){
      this.$router.push('/mood/pinlun');
    }
  },
}
</script>
<style lang="scss" scoped>
.user-comment{
  ul{
    padding-top: 10px;
    li{
      display: flex;
      min-height: 80px;
      max-height: 120px;
      padding: 15px 0;
      
      > img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
      .user-comment-content{
        margin-left: 15px;
        font-size: 14px;
        p{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2px;
          i {
            padding-right: 5px;
          }
        }
        .comment-text{
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
.all-comment{
  font-size: 14px;
  color: rgb(124, 124, 124);
  margin-left: 50px;
}
.user-comments-input{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 ;
  border-radius: 20px;
  > img{
      width: 35px;
      height: 35px;
      vertical-align: middle;
      margin-right: 10px;
      border-radius: 50%;
  }
  > input {
    flex: 1;
    border:2px solid #f6f6f6;
    outline: none;
    font-size: 12px;
    margin: 10px 0;
    padding: 10px 10px;
    border-radius: 15px;
    vertical-align: middle;
  }
}
</style>
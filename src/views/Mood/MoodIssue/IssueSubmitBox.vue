<template>
  <div class="issue-box">
    <input class="issue-title" type="text" placeholder="标题(建议30字以内)" />
    <textarea rows="8" cols="30" placeholder="分享当前心情..."></textarea>
    <div class="issue-picbox">
      <p>添加心情圈图片</p>
      <el-upload action="#" list-type="picture-card" :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
          >
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div class="issue-agreement">
      <el-checkbox>我已阅读并接收《用户上传内容协议》</el-checkbox>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IssueSubmitBox',
  data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      };
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
}
</script>
<style lang="scss" scoped>
.issue-box{
  margin-top: 30px;
  .issue-title{
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding-left: 25px;
    border: none;
    border-top: 1px solid #ccc;
    outline: none;
    font-size: 18px;
  }
  textarea{
    width: 100%;
    padding: 10px 5px;
    font-size: 14px;
    padding-left: 25px;
    border: none;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    outline: none;
  }
  .issue-picbox{
    padding: 10px;
    p{
      margin: 10px 5px;
    }
  }
  .issue-agreement{
    width: 100%;
    padding: 10px;
  }
}
input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{
  color: #ccc;
}
</style>
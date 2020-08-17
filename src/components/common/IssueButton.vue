<template>
  <button class="issue-btn el-icon-plus" @click="toIssue"></button>
</template>
<script>
export default {
  name: 'IssueButton',
  methods: {
    toIssue(){
      this.$router.push('/issue')
    }
  },
}
</script>
<style lang="scss" scoped>
.issue-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: rgb(195, 236, 236);
  background: rgb(235, 243, 118);
  border: 1px solid #b3b3b3;
  outline: none;
  border-radius: 50%;
}
</style>
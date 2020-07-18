<template>
  <main class="issues">
    <issue-nav></issue-nav>
    <issue-submit-box></issue-submit-box>
  </main>
</template>
<script>
import IssueNav from './IssueNav';
import IssueSubmitBox from './IssueSubmitBox';

export default {
  name: 'MoodIssue',
  components:{
    IssueNav,
    IssueSubmitBox
  }
}
</script>
<style lang="scss" scoped>

</style>
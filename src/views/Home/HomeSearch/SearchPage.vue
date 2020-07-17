<template>
  <div class="search">
    <search-nav></search-nav>
    <search-hot></search-hot>
    <search-box>
      <template slot="search-box">
        <search-hot-list></search-hot-list>
      </template>
    </search-box>
    <search-recent></search-recent>
    <search-box>
      <template slot="search-box">
        <c-item><span slot="citem">你好</span></c-item>
        <c-item><span slot="citem">我好</span></c-item>
        <c-item><span slot="citem">他好</span></c-item>
        <c-item><span slot="citem">你好</span></c-item>
        <c-item><span slot="citem">我好</span></c-item>
        <c-item><span slot="citem">他好</span></c-item>
      </template>
    </search-box>
  </div>
</template>
<script>
import SearchNav from './SearchNav';
import SearchRecent from './SearchRecent';
import SearchBox from './SearchBox';
import SearchHot from './SearchHot';
import SearchHotList from './SearchHotList';
import CItem from '@/components/common/CItem';


export default {
  name: 'Search',
  components: {
    SearchNav,
    SearchRecent,
    SearchBox,
    SearchHot,
    SearchHotList,
    CItem
  },
  
}
</script>
<style lang="scss" scope>

</style>
<template>
  <div class="search">
    <search-nav path="/home"></search-nav>
    <search-key-word v-if="hasKeyWord" :keyword="hasKeyWord"></search-key-word>
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
import SearchKeyWord from './SearchKeyWord.vue';
import CItem from '@/components/common/CItem';


export default {
  name: 'Search',
  components: {
    SearchNav,
    SearchRecent,
    SearchBox,
    SearchHot,
    SearchHotList,
    CItem,
    SearchKeyWord
  },
  data(){
    return {
      keyword: this.$store.state.searchRes
    }
  },
  computed: {
    hasKeyWord(){
      return this.$store.state.searchRes;
    }
  },
}
</script>
<style lang="scss" scope>

</style>
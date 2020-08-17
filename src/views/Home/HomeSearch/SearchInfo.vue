<template>
  <div>
    <search-nav ref="searchnav" path="/search"></search-nav>
    <search-key-word v-if="hasKeyWord" :keyword="hasKeyWord"></search-key-word>
    <div v-if="haveInfo">
      <left-right v-for="(item) in haveInfo" :key="item.id">
        <p slot="item-left">{{item.name}}</p>
        <p slot="item-right">{{item.info}}</p>
      </left-right>
    </div>
    <div v-else class="nores">找不到哦</div>
  </div>
</template>
<script>
import SearchNav from './SearchNav';
import SearchKeyWord from './SearchKeyWord.vue';
import Searchings from '@/plugin/searching.js';
import { get,jsonp } from '@/utils/request';
import LeftRight from '@/components/common/ItemCardLeft';

export default {
  name: 'SearchInfo',
  components:{
    SearchNav,
    SearchKeyWord,
    LeftRight
  },
  data(){
    return{
      keyword: this.$store.state.searchRes,
      haveInfo: null,
    }
  },
  mounted() {
    let val = this.$store.state.searchKey;
    let inp = this.$refs.searchnav.$refs.searchKey;
    this.haveInfo = this.$store.getters.getListInfo;
    console.log(this.haveInfo);
    inp.value = val;
  },
  computed: {
    hasKeyWord(){
      return this.$store.state.searchRes;
    }
  },
  methods: {
    searching(e){
      let vals = e.target.value;
      let jsonpUrl = `https://wq.jd.com/bases/searchdropdown/getdropdown?terminal=m&zip=1&key=${vals}&newjson=1&_=1596415708226&sceneval=2&callback=cb`;
      jsonp(jsonpUrl).then((res)=>{
        let args = { res, vals , searchInput:this.$refs.searchKey }
        this.$store.dispatch('searching',args);
      });
    },
  },
}
</script>
<style lang='scss' scoped>
.nores{
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
}
</style>
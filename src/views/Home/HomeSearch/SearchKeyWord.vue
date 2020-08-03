<template>
  <ul class="key-word">
    <li @click="searchKey(item)" v-for="(item) in keyword" :key="item.key">
      <a href="javascript:void(0);">{{item.key}}</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SearchKeyWord',
  props: ['keyword'],
  methods: {
    searchKey(item){
      // console.log(this.$store.state.searchInput);
      this.$store.getters.searchInput.value = item.key;
      this.$store.commit('searchRes');
    }
  },
}
</script>
<style lang="scss" scoped>
.key-word{
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  padding-left: 20px;
  background: #fff;
  z-index: 10;
  li {
    height: 42px;
    display: block;
    position: relative;
    padding-right: 20px;
    list-style: none;
    cursor: pointer!important;
    border-bottom: 1px solid #f6f6f6;
    > a {
      display: -webkit-box;
      height: 42px;
      overflow: hidden;
      -webkit-box-align: center;
      color: #232326;
      font-size: 13px;
      padding-top: 1px;
      padding-bottom: 1px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
<template>
  <div ref="carous" class="carous">
    <carous-item>
        <li slot="carous-item"><img src="@/assets/images/homepage/carous3.jpg" alt=""></li>
        <li slot="carous-item"><img src="@/assets/images/homepage/carous1.jpg" alt=""></li>
        <li slot="carous-item"><img src="@/assets/images/homepage/carous2.jpg" alt=""></li>
        <li slot="carous-item"><img src="@/assets/images/homepage/carous3.jpg" alt=""></li>
        <li slot="carous-item"><img src="@/assets/images/homepage/carous1.jpg" alt=""></li>
    </carous-item>
    <carous-index>
        <li slot="carous-index" class="current"></li>
        <li slot="carous-index"></li>
        <li slot="carous-index"></li>
    </carous-index>
  </div>
</template>
<script>
import CarousItem from './CarousItem';
import CarousIndex from './CarousIndex';
import Carous from '../../../plugin/carous.js';

export default {
  name: 'HomeCarousItem',
  mounted() {
    new Carous({'id': this.$refs.carous.className,'interval':1500});
  },
  methods: {
    
  },
  components:{
    CarousItem,
    CarousIndex
  }
}
</script>
<style lang="scss" scope>
.carous{
  overflow:hidden;
  position: relative;
  box-sizing: border-box;
  margin: 4px 6px;
  img{
    width: 100%;
    height: 160px;
  }
  ul{
    overflow: hidden;
    width: 500%;
    margin-left: -100%;
    li {
      float: left;
      width: 20%;
    }
  }
  ol{
    position: absolute;
    bottom: 5px;
    right: 5px;
    margin:0;
    li{
      display: inline-block;
      width: 5px;
      height: 5px;
      background-color: #fff;
      margin: 0 3px;
      list-style: none;
      border-radius: 3px;
    }
    li.current{
      width: 15px;
    }
  }
}
</style>
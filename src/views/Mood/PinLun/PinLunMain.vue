<template>
  <main>
    <pin-lun-nav :isAsync="isAsync" @cgAsync="cgAsync"></pin-lun-nav>
    <pick-pin-lun v-if="isAsync"></pick-pin-lun>
    <time-order v-else></time-order>
  </main>
</template>
<script>
import PinLunNav from './PinLunNav';
import PickPinLun from './PickPinLun';
import TimeOrder from './TimeOrders/TimeOrder';

export default {
  name: 'PinLunMain',
  components:{
    PinLunNav,
    PickPinLun,
    TimeOrder
  },
  data(){
    return {
      isAsync: true
    }
  },
  methods: {
    cgAsync(payload){
      this.isAsync = payload;
    }
  },
}
</script>
<style lang="scss" scoped>
main{
  margin-bottom: 46px;
}
</style>
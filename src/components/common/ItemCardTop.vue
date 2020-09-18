<template>
  <div @click="iteminfo" class="item-card-top">
    <div class="item-top-img">
      <slot name="item-top">
      </slot>
    </div>
    <div class="item-top-info">
      <slot name="item-bot"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemCardTop',
  methods: {
    iteminfo(){
      this.$router.push('/detail')
    }
  },
}
</script>
<style lang="scss" scope>
.item-card-top{
  width: 50%;
  float: left;
  padding: 8px 4px;
  box-sizing: border-box;
  .item-top-img{
    width: 100%;
    height: auto;
    img{
      width: 100%;
      height: 100px;
    }
  }
  .item-top-info{
    position: relative;
    font-size: 14px;
    color: #000028;
    margin-top: 6px;
    p{
      width: 98%;
      margin-top: 4px;
      color: #a2a2b6;
      line-height: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 12px;
      // &::after{
      //   position: absolute;
      //   right: 10px;
      //   bottom: 1px;
      //   width: 15px;
      //   height: 15px;
      //   color: #1296db;
      //   content: "▲";
      //   transform: rotate(90deg);
      //   display: block;
      // }
    }
  }
}
.full{
  width: 100%;
  .item-top-img{
    margin: 0;
    width: 100%;
    img{
      width: 100%;
      min-height: 160px;
    }
  }
}
</style>
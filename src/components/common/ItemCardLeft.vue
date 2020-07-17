<template>
  <div class="item-card-left">
    <div class="item-left-img">
      <slot name="item-left">
      </slot>
    </div>
    <div class="item-left-info">
      <slot name="item-right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemCardTop',
  methods: {
    iteminfo(){
      this.$router.push('/info')
    }
  },
}
</script>
<style lang="scss" scope>
.item-card-left{
  display: flex;
  width: 100%;
  min-height: 100px;
  padding: 14px 8px;
  box-sizing: border-box;
  border-bottom: 1px solid #e4e1e1;
  .item-left-img{
    width: 130px;
    height: 85px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .item-left-info{
    flex: 1;
    position: relative;
    margin-left: 12px;
    font-size: 13px;
    color: #222;
    p{
      width: 100%;
      margin-top: 4px;
      color: #999;
      max-height: 45px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .badge{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
      font-size: 12px;
      span{
        display: inline-block;
        transform: scale(0.8);
        padding: 0 1px;
      }
      i{
        position: relative;
        top: 4px;
        color: #1296db;
        transform: rotate(90deg);
      }
    }
  }
}
</style>
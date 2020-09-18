<template>
  <div class="item-details">
    <nav-bar>
      <button slot="nav-back" @click="back" class="back el-icon-arrow-left"></button>
      <h3 slot="nav-title">孔雀竹芋的养护心得</h3>
    </nav-bar>
    <article>
      <div class="detail-head">
        <img src="@/assets/images/homepage/plane03.jpg" alt="">
        <p class="detail-head-info">
            孔雀竹芋，叶面上有墨绿与白色或淡黄相间的羽状斑纹，并具有独特金属光泽，好似孔雀的尾羽，因而叫孔雀竹芋。孔雀竹芋适宜盆栽，作室内摆设，甚为别致精美。下面为大家介绍一下孔雀竹芋的养护心得。
        </p>
      </div>
      <div class="detail-bd">
        <div class="common-sense">
          <left-right class="detail-sec-title">
            <i slot="title-left" class="el-icon-paperclip"></i>
            <h4 slot="title-left">要知道的孔雀竹芋常识：</h4>
          </left-right>
          <ul>
            <li>1、敏感：竹芋对水和光都是很敏感的。比红掌还敏感！</li>
            <li>2、浇水：竹芋浇水不能见干见湿的，需要保持土的湿润，但不要积水。</li>
            <li>3、见光：竹芋也是需要光的，但不是直射的太阳光，而是放在光线很明亮的地方，一定不能直射，甚至不需要散射。但一定要光线明亮的地方。</li>
            <li> 4、湿润：早上起床给竹芋喷水，全部叶片全部喷到。每两个星期用微湿的抹布擦拭叶片。晚上一定不能让叶子沾上水！</li>
          </ul>
        </div>
        <div class="experience">
          <left-right class="detail-sec-title">
            <i slot="title-left" class="el-icon-paperclip"></i>
            <h4 slot="title-left">花友养护心得:</h4>
          </left-right>
          <div class="exp-bd">
            <h2>一、见光环境</h2>
            <p>我之前都放在阳台靠帘子的地方遮光，但整个阳台很明亮。现在下午阳台太热，我放到客厅里面，温度比阳台低很多。到下午5点的时候，夕阳通过纱帘弱弱的射到客厅，可以照到竹芋和红掌。这样，竹芋和红掌都可以每天在保持明亮光线的情况下，有半个小时或一个小时左右的非常弱的日光散射。</p>
            <h2>二、浇水养护</h2>
            <p>我春天的时候是用自动浇水器，在存水中放入稀薄的水溶肥料，养护几个月。然后到天热的时候，不再使用持续的微肥，而是放入室内，普通管理。每天用眼观察盆土的湿润状态。如果感觉半干半湿了，就浇水一次，浇到底部刚刚透水为止。早上起来的时候，或气温很高的时候，用喷雾器给叶片全部喷一次水。不要让叶片滴水，全部湿润到就可以。浇水器最好用长嘴的，可以伸进根部去浇水，晚上浇水一定不能让水沾上叶子</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import NavBar from '@/components/navbar/NavBar';
import LeftRight from '@/components/common/LeftRight';

export default {
  name: 'HomeDetail',
  components: {
    NavBar,
    LeftRight
  },
  methods: {
    back(){
      this.$router.push('/home');
    }
  },
}
</script>
<style lang="scss" scope>
.back{
  width: 50px;
  height: 44px;
  color: #666;
  background-color: #fff;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 20px;
}
.item-details article{
  padding: 10px;
  margin-bottom: 50px;
  .detail-head {
    width: 100%;
    min-height: 300px;
    img{
      height: 178px;
      width: 100%;
    }
    p{
      margin-top: 16px;
      text-indent: 1em;
      padding: 1px;
      font-size: 16px;
      line-height: 18px;
      color: #333;
      overflow : hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }
  .detail-bd{
    .common-sense{
      ul {
        font-size: 13px;
        text-indent: 1em;
        padding: 10px;
        li{
          line-height: 18px;
          margin: 8px 0;
        }
      }
    }
  }
  .experience{
    .exp-bd{
      padding: 10px;
      h2{
        margin: 15px 0;
        font-size: 14px;
        color: #1C38B3;
      }
      p{
        text-indent: 1em;
        font-size: 13px;
        line-height: 18px;
      }
    }
  }
}
.detail-sec-title{
  padding-bottom: 15px;
  margin-top: 10px;
  border-bottom: 1px solid #333;
  font-size: 14px;
  > .title-left{
    border: none;
    position: relative;
    i{
      position: absolute;
      left: -5px;
      font-size: 16px;
      color: #310606;
    }
    h4{
      padding-left: 15px;
    }
  }
}

</style>

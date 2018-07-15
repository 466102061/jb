<template>
  <div class="page-body"  v-bind:style="{ height: height }" @scroll="scroll" scroll-y :scroll-into-view="toView">

      <!--banner-->
      <div class="banner pro-banner" v-if="banners.length > 0">
          <swipe class="my-swipe" name="swipe">
            <swipe-item name="swipe-item" class="slide-item" v-for="(item, index) in banners" :key="index"><img :src="item.img" class="slide-img" /></swipe-item>
          </swipe>
          <span class='pro-pan' v-if="data.item_expire_date">有效期至 {{data.item_expire_date}}</span>
      </div><!--banner-->

        <!--title-->
      <div class='pro-info'>
        <div class='title'>{{data.title}}</div>
        <div class='desc' v-if="data.describe">{{data.describe}}</div>
        <div class='pro-info-panel clearfix'>
          <div class='item arrow arrow-right' @click='linkToShop' style='display:block;position:relative;width:100%;cursor:pointer;'>
            <img src='../../assets/img/picon1.png' class='icon' />
            <span class='text' style='font-size:26rpx;'>{{data.shop_name}}官方直销</span>
          </div>
        </div>
        <div class='clearfix pro-info-panel' v-if="data.feature">
            <div class='item' v-for="(item, index) in data.feature" :key="index" v-if="item">
                <img src='../../assets/img/picon2.png' class='icon' />
                <span class='text'>{{item}}</span>
            </div>
        </div>
      </div><!--title-->

       <!--table-->
    <div class='otable-view' v-if="packageList.length > 0">
      <div class='hd'>商品套餐</div>
      <div class='otable' v-for="(item, index) in packageList" :key="index" :package_name="item.package_name">
          <div class="flex otr">
              <div class='flex-item'>{{item.package_name}}</div>
              <div class='flex-item item-price'>¥ {{item.shop_price}}</div>
          </div>
      </div>
    </div><!--table-->

      <!--产品图片详情-->
   <div style='background-color:#fff;'>
        <!--tab-->
        <div class='pTab-view'>
            <div class='pTab-item' :style='{position:btnPosition}'>
                <div class="mbody"><tabItem v-bind:tab="tab" v-bind:cur="tabPanelCur" v-bind:tabClicked="switchTab" /></div>
            </div>
            <img :src='pTabIcon' style='opacity: 0;' @load='imgload' />
       </div>
       <!--tab-->
       <!--图文介绍-->
       <div style="width:100%;height:auto;padding:0 10px;overflow-x:hidden;overflow-y:auto;">
        <div class='tab-panel' id="tabPanelDiv_0">
          <div style='height:50px;' v-if="tabClick && tabPanelCur == 0"></div>
          <div v-html="graphicContent"></div>
        </div>

         <div class='tab-panel tab-panel-top' id="tabPanelDiv_1">
          <div style='height:50px;' v-if="tabClick && tabPanelCur == 1"></div>
           <div class='content'>
              <img :src='noticePic'   mode='widthFix' lazy-load="true" @load='noticePicPos' />
           </div>
          <div v-html="packageContent"></div>
          <div  class='content'>
           <img src='../../assets/img/gmxz.png' mode='widthFix' />
           </div>
          <div v-html="noticeContent"></div>
        </div>
      </div>
   </div>

 <!--购买-->
 <div style="height:50px;"></div>
  <div class='fixed fixed-bottom'>
      <div class='pb-btn flex mbody'>
        <div class='item flex-item'>
          <div class='price'>
            <span class='unit'>¥</span>
             <span class='num'>{{data.price}}</span> 
          </div>
        </div>
        <div class='item flex-item' style='padding-right:30rpx;'>
          <span class='gray-text'>门市价:¥</span>
           <span class="text-line-through text-middle" style='color:#babecc;'>{{data.sale_price}}</span> 
       </div>
        <!--预约-->
        <div class='item flex-item' v-if="btn_status == 1" style='position:relative;'>
            <form @submit="appointment" report-submit>
                  <div class='btn-red btn-block'>预约抢购</div>
                  <button formType="submit" class='yy-btn'></button>
            </form>
        </div>
        <!--购买-->
        <div class='item flex-item' @click='sumit' v-else-if="btn_status == 2">
            <div class='btn-blue btn-block'>立即购买</div>
        </div>
        <!--已下架-->
        <div class='item flex-item disable' v-else-if="btn_status == 3">
            <div class='btn-blue btn-block'>已下架</div>
        </div>
        <!--已售罄-->
        <div class='item flex-item disable' v-else-if="btn_status == 4">
            <div class='btn-blue btn-block'>已售罄</div>
        </div>
        <!--已截止-->
        <div class='item flex-item disable' v-else-if="btn_status == 5">
            <div class='btn-blue btn-block'>已截止</div>
        </div>
      </div>
  </div>
  <!--立即抢购提示-->
  <div class='b-tips-div' v-if="btn_status == 1">
      <span>抢购开始倒计时:</span>
      <span class='num'>{{timeup.day}}</span>
      <span>天</span>
      <span class='num'>{{timeup.h}}</span>
      <span>时</span>
      <span class='num'>{{timeup.m}}</span>
      <span>分</span>
      <span class='num'>{{timeup.s}}</span>
      <span>秒</span>
  </div>

  </div>
</template>

<script>
import * as bjPage from './page.js'
import tabItem from '@/components/tab'
import { Swipe, SwipeItem } from '../../components/swipeH5/index.js';
export default {
  data () { // 选项 数据
    return bjPage.props
  },
  components: { // 定义组件
     tabItem : tabItem,
     Swipe : Swipe,
     SwipeItem : SwipeItem
  },
  computed : {
  },
  methods: bjPage.pageMethods,
  mounted () {
    //设置body高度
    bjPage.setPageHeight(this,'height');
    bjPage.loadData(this);
  }
}
</script>

<style>
@import '../../assets/css/proDetail.css';
.banner{ 
  height:210px;
  overflow:hidden;
}
.slide-img{
  display:block;
  width:100%;
  height:auto;
}
.my-swipe {
    width:100%;
    height: 210px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
</style>

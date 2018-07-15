<template>
  <div class="page-body"  v-bind:style="{ height: height }">
    <div style="padding:12rpx 0;">
        <div class='empty-top' v-if="result.length == 0">
            <img src='../../assets/img/home.png' class='icon' />
            <div class='text'>您还未访问过小程序店铺</div>
        </div>
        <!--shop-->
        <div class='footprint' v-else>
            <!--item-->
            <div class='item' v-for="(item, index) in result" :key="index" :shop_id="item.shop_id">
                  <div class='hd'>
                        <img :src='item.shop_logo' class='logo' />
                        <div class='btn-inline' :data-shop_id="item.shop_id" v-on:click="toShoping">进店</div>
                        <div class='title'>{{item.shop_name}}</div>
                        <div class='desc'>
                               <img src='../../assets/img/icon-1.png' class='icon text-middle' />
                               <span class='text text-middle'>{{item.shop_name}}官方直销</span>
                        </div>
                  </div>
                  <div class='ct'>
                      <div class="div-wrap">
                        <div class='div' v-for="(img_item, img_index) in item.item_list" :key="img_index" :id="item.id">
                              <img :src='img_item.ad_img' class='pic' /></div>
                      </div>
                  </div>
            </div>
            <!--item-->
        </div>
    </div>

  </div>
</template>

<script>
import bjcore from '../../common/index.js'
export default {
  data () { 
    return {
      height : 'auto',
      result : [
        {
          shop_id : 1,
          shop_logo : require('../../assets/img/1.jpg'),
          shop_name : '商户1',
          item_list : [
            {
              id : 1,
              ad_img : require('../../assets/img/1.jpg')
            },
            {
              id : 1,
              ad_img : require('../../assets/img/2.jpg')
            },
            {
              id : 1,
              ad_img : require('../../assets/img/1.jpg')
            }
          ]
        }
      ],
      hasData : false
    }
  },
  components: { 
  },
  computed : {
  },
  methods: { 
    toShoping(e){
      const shop_id = e.currentTarget.dataset.shop_id;
      const url = bjcore.pageUrl(this, 'index');
      this.API.navigateTo(this,url);
    }
  },
  onReachBottom() {
    console.log('onReachBottom:');
  },
  mounted () {
    //设置body高度
    bjcore.setPageHeight(this,'height');
    //console.log('bjcore:',bjcore);
    //this.$loading.show();

  }
}
</script>

<style>
@import '../../assets/css/home.css';
</style>

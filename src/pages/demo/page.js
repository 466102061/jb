/** 
 * page数据源
 */

import bjcore from '../../common/index.js'
import { ENV_MP, ENV_H5 } from '../../config/index.js'

//page初始参数
const props = {
    height : 'auto',
    tab:['图文详情','商品须知'],
    offsetTop : '',
    data : {},//数据
    btn_status : '',//产品状态
    btnPosition : "",//滚动固定按钮style
    pTabIcon : '',//
    packageList:"",
    graphicContent:"",
    packageContent:"",
    noticeContent:"",
    toView : '',
    timeup : {
        day : '',
        h : '',
        m : '',
        s : ''
    },
    banners: [],
    tabPanel: [
      // { id: 0, text: '<p style="color:red">产品须知...</p>' },
      // { id: 1, text: '<p style="font-size:20px;">图文详情...</p>' }
    ],
    tabClick: false,
    noticePosition: '',
    noticePic:'',
    tabPanelCur : 0
}

//page方法
const pageMethods = {
    //产品须知切换
    switchTab(index){
      const cur = index;
      const toView = 'tabPanelDiv_'+cur;
      this.tabPanelCur = cur;
      this.tabClick = true;
      this.toView = toView;
      if(this.ENV == ENV_H5){
        location.href = "#"+toView;
      }
      console.log('tab接收到子组件回传参数：'+cur,this.tabClick)
    },
    //tab距离上边距
    imgload(e){
      let top = e.currentTarget.offsetTop;
      if (top) {
        top -= 50;
      } else {
        top = 304;
      }
      this.offsetTop = top;
      console.log('imgload:',e.currentTarget.offsetTop);
    },
    //商品须知-内容位置
    noticePicPos(e) {
      this.noticePosition = e.currentTarget.offsetTop;
      console.log('noticePosition:',e.currentTarget.offsetTop);
    },
    //商城首页
    linkToShop(){
      const shop_id = this.API.storage.getItem('shop_id');
      const url = bjcore.pageUrl(this, 'index');
      this.API.navigateTo(this, url);
    },
    //滚动
    scroll(e){
      let scrollTop = 0;
      if(this.ENV === ENV_H5){
          scrollTop = this.$el.scrollTop;//或者e.currentTarget.scrollTop
      }else if(this.ENV === ENV_MP){
          scrollTop = e.mp.detail.scrollTop;//原生小程序e.detail.scrollTop
      }

      //tab固定
      const offsetTop = this.offsetTop;
      let btnPosition = "";
      if (scrollTop >= offsetTop){//固定
        btnPosition = "fixed";
      } else {
        btnPosition = "static";
      }
      
      //内容切换
      const noticePosition = this.noticePosition;
      scrollTop += 100;
      if (scrollTop >= noticePosition && noticePosition){
         this.tabPanelCur = 1;//滚动到商品须知
         const tabPanelCur = this.tabPanelCur;
        // console.log('滚动到商品须知', scrollTop, noticePosition,tabPanelCur);
      }else{
         this.tabPanelCur = 0; 
      }
      this.btnPosition = btnPosition;
      this.tabClick = false;
      console.log('scroll',scrollTop);
      //console.log(this.$refs.myapp.getBoundingClientRect().top,this.$el.scrollTop);
    },
    //提交
    sumit(){
      const url = bjcore.pageUrl(this, 'submitOrder');
      this.API.navigateTo(this, url) 
    },
    //预约
    appointment(e){
      //ajax
      const that = this;
      that.$loading.show();
      let form_id = '';
      if(this.ENV === ENV_MP){
         form_id = e.detail.formId;
      }
      const url = that.API_DOMAIN + '/Preorder/addPreorderApi';
      const uid = that.API.storage.getItem("uid");
      const item_id = that.API.storage.getItem("item_id");
      const user_token = that.API.storage.getItem("user_token");
      let data = {
        uid : uid,
        form_id : form_id,
        item_id : item_id,
        user_token : user_token
      };
      data = bjcore.extend(data);
      that.isRequesting = true;
      const ajax = that.API.httpRequest({
        data : data,
        url : url
      });
      ajax.then(res=>{
        that.$loading.hide();
        console.log('item/get:',res.data,data);
        if(res.data.status == 0){
          that.$dialog({
            content : res.data.result.msg
          });
        }else{
          that.$toast(res.data.error_msg);
        }
      }).catch(ex=>{
          console.error('产品详情数据请求失败！'+ex.message)
      })
    }
}

//预约抢购剩余时间
function timesUp(res_time){
      let timer = null;
      const that = this;
      countDown(res_time);
      clearInterval(timer);
      timer = setInterval(function () {
        res_time--;
        if (res_time >=0){
          countDown(res_time);
        }else{
          clearInterval(timer);
          that.setData({
            btn_status : 0
          })
        }
      },1000);

      //倒计时
      function countDown(res_time){
        const day = Math.floor(res_time / (60 * 60 * 24));
        let h = Math.floor(res_time / (60 * 60)) - day * 24;
        h = h > 9 ? h : '0' + h;
        let m = Math.floor(res_time / 60) - day * (24 * 60) - h * 60;
        m = m > 9 ? m : '0' + m;
        let s = res_time - day * 24 * 60 * 60 - h * 60 * 60 - m * 60;
        s = s > 9 ? s : '0' + s;
        const timeup = {
          day : day,
          h : h,
          m : m,
          s : s
        };
        that.setData({
          timeup : timeup
        })
     }
  }

//加载数据
function loadData(self){
      //ajax
      const that = self;
      that.$loading.show();
      const url = that.API_DOMAIN + '/item/get';
      const shop_id = that.API.storage.getItem("shop_id");
      const item_id = that.API.storage.getItem("item_id");
      let data = {
        shop_id: shop_id,
        item_id : item_id
      };
      data = bjcore.extend(data);
      that.isRequesting = true;
      const ajax = that.API.httpRequest({
        data : data,
        url : url
      });
      ajax.then(res=>{
        that.$loading.hide();
        console.log('item/get:',res.data,data);
        if(res.data.status == 0){
            let banners = [];
            if(res.data.result.main_img.length > 0){
              for(let key in res.data.result.main_img){
                const item = res.data.result.main_img[key];
                const obj = {
                   img : item.main_img,
                   url : ''
                }
                banners.push(obj);
              }
              banners = bjcore.resetData.resArray(that.IMG_DOMAIN,banners,'img','sizeWith',750,420);//banner
            }
            // console.log('banners:',banners);
            //图文详情与产品须知
            let rtext = [];
            var graphicContent = res.data.result.desc;
            graphicContent = graphicContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
            graphicContent = graphicContent.replace(/\<section/gi, '<div');
            graphicContent = graphicContent.replace(/\<\/section\>/gi, '</div>');

            var packageContent = res.data.result.package_desc;
            packageContent = packageContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
            packageContent = packageContent.replace(/\<section/gi, '<div');
            packageContent = packageContent.replace(/\<\/section\>/gi, '</div>');

            var noticeContent = res.data.result.notice;
            noticeContent = noticeContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
            noticeContent = noticeContent.replace(/\<section/gi, '<div');
            noticeContent = noticeContent.replace(/\<\/section\>/gi, '</div>');

	        that.banners = banners;
	        that.tabPanel = rtext;
	        that.btn_status = res.data.result.btn_status;
	        that.data = res.data.result;
	        that.packageList = res.data.result.package_list;
	        that.graphicContent = graphicContent;
	        that.packageContent = packageContent;
	        that.noticeContent = noticeContent;
	        that.noticePic = require('../../assets/img/package.png');
	        that.pTabIcon = require('../../assets/img/arrow.png');
            //预约倒计时
            if (res.data.result.btn_status == 1) {
              timesUp(res.data.result.rest_time);
            }
        }else{
          that.$toast(res.data.error_msg);
        }
      }).catch(ex=>{
          console.error('产品详情数据请求失败！'+ex.message)
      })
}

//设置高度
function setPageHeight(self){
    bjcore.setPageHeight(self,'height');
}

export {
  props,
  loadData,
  pageMethods,
  setPageHeight
}
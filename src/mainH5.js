// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppH5'
import router from './router'
import store from './store/index.js'
import { API_H5 } from './lib/libframe/api'
import Loading from './lib/libframe/loading/indexH5.js'
import Toast from './lib/libframe/toast/indexH5.js'
import Dialog from './lib/libframe/dialog/indexH5.js'
import { ENV_H5, DEBUG, API_DOMAIN_DEV, API_DOMAIN_PRO } from './config'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Loading)
Vue.use(Toast)
Vue.use(Dialog)

Vue.mixin({
  data () {
    return {
      API: '', // api
      ENV : '',// 环境
      router: '/', // h5路由
      API_DOMAIN : '',//域名
      IMG_DOMAIN : ''//图片资源域名
    }
  },
  methods: {
      // getRoot () {
      //     return  this.$route
      // },
      // navigateTo (url) {
      //     this.$router.push(url)
      // },
      // reLaunchTo (url) {
      //     this.$router.replace(url)
      // }
      // 
  },
  created () {
    const that = this;
     that.ENV = ENV_H5;
     that.API = API_H5;
     if(DEBUG){
        that.API_DOMAIN = API_DOMAIN_DEV;
     }else{
        that.API_DOMAIN = API_DOMAIN_PRO;
     }
    // console.log(that.API,that.API_DOMAIN,that.ENV);
  },
  mounted (){
    // this.$dialog({
    //   content:'hhhh',
    //   cancelCallback : function(){
    //     console.log('cancel');
    //   },
    //   confirmCallback : function(){
    //     console.log('confirm');
    //   }
    // })
    //this.$toast('Y的出错了~');
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

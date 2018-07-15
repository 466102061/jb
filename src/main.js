import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import { API_MP } from './lib/libframe/api'
import Loading from './lib/libframe/loading/indexMp.js'
import Toast from './lib/libframe/toast/indexMp.js'
import Dialog from './lib/libframe/dialog/indexMp.js'
import { ENV_MP, DEBUG, API_DOMAIN_DEV, API_DOMAIN_PRO } from './config'

Vue.config.productionTip = false
//App.mpType = 'app'
Vue.prototype.$store = store
Vue.use(Loading)
Vue.use(Toast)
Vue.use(Dialog)

Vue.mixin({
  data() {
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
      //     return this.$root.$mp
      // },
      // navigateTo (url) {
      //     wx.navigateTo({url: url})
      // },
      // reLaunchTo (url) {
      //     wx.reLaunch({url: url})
      // }
  },
  created() {
    const that = this;
     that.ENV = ENV_MP;
     that.API = API_MP;
     if(DEBUG){
        that.API_DOMAIN = API_DOMAIN_DEV;
     }else{
        that.API_DOMAIN = API_DOMAIN_PRO;
     }
     //console.log(that.API,that.API_DOMAIN,that.ENV);
  },
  mounted(){
    // this.$dialog({
    //   content:'hhhh',
    //   cancelCallback : function(){
    //     console.log('cancel');
    //   },
    //   confirmCallback : function(){
    //     console.log('confirm');
    //   }
    // })
    // this.$toast('Y的出错了~');
  }
})

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/home/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'bj_官方商城',
      navigationBarTextStyle: 'black'
    }
  }
}

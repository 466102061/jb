<template>
  <div class="page-body"  v-bind:style="{ height: height }" @scroll.native="scroll" @scrolltolower="scrolltolower">
    <view> 
      <rich-text nodes="<div>this is rich-text node2</div>"></rich-text>
    </view>
    <img src="../../assets/img/pass.png" />
    <div id="app-6" ref="myapp">
      <p>vuex-store:</p>
      <p>昵称:{{getUserInfo.name}}</p>
      <p>电话:{{getUserInfo.phone}}</p>
    </div>
  <tabItem v-bind:tab="tab" v-bind:curIndex="curTabIndex" v-bind:tabClicked="tabClick" />
  </div>
</template>

<script>
import {
  mapGetters,
  mapState,
  mapActions
} from 'vuex'
//const tabItem = () => import('../../components/tab')
import tabItem from '@/components/tab'
import bjcore from '../../common/index.js'
export default {
  data () { // 选项 数据
    return {
    height : 'auto',
    message : '45454',
      index : 0,
      curBtnIndex : 9,
      curTabIndex : 0,
      tab:['活动推荐','机构大全']
    }
  },
  components: { // 定义组件
tabItem
  },
  computed : {
    //缓存，只有当属性发生变化的时候，才会重新计算
    //计算属性,计算任何复杂逻辑的属性
    ...mapGetters([
      'getUserInfo'
    ])
  },
  methods: { // 事件处理方法
      ...mapActions([
        'setUserName',
        'setUserPhone'
      ]),
      scroll (){
      console.log('scroll:');
      },
      scrolltolower (){
      console.log('scrolltolower:');
      },
    tabClick(index){
      this.index = index;
      console.log('tab接收到子组件回传参数：'+index)
    }
  },
  onReachBottom() {
    console.log('onReachBottom:');
  },
  created () { // 生命周期函数
      // console.log('homeroot', this.$root, this.$root.$mp)
  },
  mounted () {
     this.setUserName('mp')
      bjcore.setPageHeight(this,'height');
  }
}
</script>

<style lang="less">

</style>

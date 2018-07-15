<template>
  <div class="page-body" v-bind:style="{ height: height }"  @scroll="scroll">
    <div>
    <img src="../../assets/img/pass.png" />
    <div id="app-6" ref="myapp">
      <p>vuex-store:</p>
      <p>昵称:{{getUserInfo.name}}</p>
      <p>电话:{{getUserInfo.phone}}</p>
    </div>
    </div>
  <tab v-bind:tab="tab" v-bind:curIndex="curTabIndex" v-bind:tabClicked="tabClick" />
  </div>
</template>

<script>
import {
  mapGetters,
  mapState,
  mapActions
} from 'vuex'
import bjcore from '../../common/index.js'
const tab = () => import('../../components/tab')
export default {
  data () { // 选项 数据
    return {
    height : 'auto',
    message : '45451',
      index : 0,
      curBtnIndex : 9,
      curTabIndex : 0,
      tab:['活动推荐','机构大全']
    }
  },
  components: { // 定义组件
   tab
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
      console.log(this.$refs.myapp.getBoundingClientRect().top,this.$el.scrollTop);
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
      //
      this.setUserName('好的');
      bjcore.setPageHeight(this,'height');

  }
}
</script>

<style>
</style>

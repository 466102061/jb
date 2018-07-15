<template>
<div class='tab-bar-fixed'>
    <div class="tab-bar mbody">
        <div v-for="(item,index) in tabs" :class="cur == item.name ? 'cur item' : 'item'" :key = "index" :data-name="item.name" :data-path="cur == item.name ? '' : item.path" @click='ontap'>

            <img :src='cur == item.name ? item.curIcon : item.normalIcon' class='icon' />
            <div class="text">{{item.text}}</div>
        </div>
    </div>
</div>
</template>

<script>
import bjcore from '../../common/index.js'
export default {
  name : 'tabBars',
  props : ['cur'],
  methods : {
    ontap (e){
        const path = e.currentTarget.dataset.path;
        if(!path) return;
        const url = bjcore.pageUrl(this, path);
        this.API.navigateTo(this,url);
        //this.API.reLaunchTo(this,url);
    }
  },
  data(){
    return {
      tabs : [
          {
            name: 'index',
            text: '首页',
            path: 'index',
            curIcon : require('../../assets/img/tab-home-cur.png'),
            normalIcon : require('../../assets/img/tab-home-normal.png')
          },
          {
            name: 'user',
            text: '我的',
            path: 'user',
            curIcon: require('../../assets/img/tab-user-cur.png'),
            normalIcon: require('../../assets/img/tab-user-normal.png')
          }
      ]
    }
  },
  mounted (){
  }
}
</script>

<style scoped>
.tab-bar-fixed{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 69;
}
.tab-bar{
  display: flex;
  display: -webkit-flex;
  height: 48px;
  border-top: 1px solid #e8e9eb;
  background-color: #fff;
}
.mbody{
	width:100%;
	max-width:420px;
	margin:0 auto;
}
.tab-bar .item:not(:last-child){
  border-right: 1px solid #e8e9eb;
}
.tab-bar .item{
  flex: 1;
  text-align: center;
  font-size: 15px;
  color: #d5d5d5;
  line-height: 48px;
  position: relative;
  cursor:pointer;
  background-color: #fff;
}
.tab-bar .item .icon{
  display:inline-block;
  vertical-align: middle;
  width: 22px;
  height: 22px;
  margin-right: 15px;
  background-size: 22px;
}
.tab-bar .item .text{
  display: inline-block;
  vertical-align: middle;
}
.tab-bar .item.cur{
  color: #ffbe00;
  cursor:default;
}
</style>
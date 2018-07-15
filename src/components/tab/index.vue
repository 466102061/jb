<template>
<div class="clearfix mobdy">
   <div class="tabItem" v-for="(item,index) in tab" :key="index"><span @click="tabClick(index)" :class="curKey==index? 'cur span' : 'span'">{{item}}</span></div>
</div>
</template>

<script>
export default {
	name : 'tab',
	props : ['curIndex','tab','tabClicked'],
	methods : {
		tabClick (index){
			this.curKey = index
			this.tabClicked(index)
		}
	},
	data(){
		return {
			curKey : this.curIndex
		}
	}
}
</script>

<style scoped>
.tabItem{
	width:50%;
	height:48px;
	float:left;
	text-align:center;
	background-color:#fff;
	border-bottom:1px solid #f7f7f7;
}
.tabItem .span{
	display:inline-block;
	height:48px;
	line-height:48px;
	font-size:15px;
	color:#808080;
	padding:0 15px;
	cursor:pointer;
}
.tabItem .cur{
	color:#333333;
	border-bottom:2px solid #ffbe00;
}

</style>
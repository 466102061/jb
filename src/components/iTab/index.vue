<template>
<div class="clearfix mobdy">
	<div class="iTab">
	   <div v-for="(item,index) in tab" :class="curKey == item.id ? 'cur item' : 'item'"  :key="index" :data-id="item.id" @click='tabClick(item.id)'>
	        <img :src='curKey == item.id ? item.icon_active : item.icon' class='icon' />
	        <div class="text">{{item.cat_name}}</div>
	  </div>
	</div>
</div>
</template>

<script>
export default {
	name : 'iTab',
	props : ['cur','tab','tabClicked'],
	methods : {
		tabClick (index){
			if(this.curKey === index) return;
			this.curKey = index
			this.tabClicked(index)
		}
	},
	data(){
		return {
			curKey : this.cur
		}
	},
	mounted (){
		//console.log('iTab:',this.tab);
	}
}
</script>

<style scoped>
.iTab{
  display: flex;
  display: -webkit-flex;
  height: 75px;
  margin-bottom: 5px;
  background-color: #fff;
}
.iTab .item{
  flex: 1;
  text-align: center;
  font-size: 12px;
  color: #333;
  padding-top: 18px;
  cursor:pointer;
  background-color: #fff;
}
.iTab .item .icon{
  display: block;
  width: 22px;
  height: 22px;
  background-size: 22px;
  margin: 0 auto 4px;
}
.iTab .item.cur{
  color: #ffbe00;
  cursor:default;
}

</style>
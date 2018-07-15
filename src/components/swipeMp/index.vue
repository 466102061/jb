<template>
<swiper class="swiper" indicator-dots="true" indicator-color="rgba(f,f,f,0.4)" indicator-active-color="rgba(250,190,0,1)" autoplay="true" interval="3000" duration="400" :style="{height:height}">
  <block v-for="(item, index) in imgUrls" :index="index" :key="key">
      <swiper-item>
          <image :src="item.img" class="slide-image" mode="aspectFill" :style="{height:height}" />
      </swiper-item>
  </block>
</swiper>
</template>

<script>
export default {
	name : 'tab',
	props : ['imgUrls','height'],
	methods : {
		ontap (e){
		}
	},
	data(){
		return {
		}
	}
}
</script>

<style scoped>
.swiper{
	height:210px;
}
.slide-image{
  display: block;
  width: 100%;
  height: 210px;
}

</style>
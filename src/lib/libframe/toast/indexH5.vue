<template>
    <div class="toast-box" v-if="show">
    	<div :class="show ? 'toast cur' : 'toast'">{{tips}}</div>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
        tips: {
          type: String,
          default: ''
        },
    }
}
</script>

<style>
.toast{
	position: fixed;
	display:inline-block;
    min-width: 7.6em;
    min-height: 40px;
    line-height:20px;
    top: 50%;
    left: 50%;
    font-size:14px;
    color:#fff;
    padding:10px;
    text-align:center;
    margin-top:-40px;
    /*opacity: 0;*/
  transition: all .3s;
  -webkit-transition: all .3s;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    background: rgba(40, 40, 40, 0.75);
    border-radius: 5px;
    color: #FFFFFF;
    z-index: 993;
}
/*.toast.cur{
  opacity: 1;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}*/
</style>
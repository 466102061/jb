<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据

  },
  mounted (){
     //console.log('webpack:',process.env);
  }
}
</script>

<style>
picker,picker:before,picker:after,
input,input:before,input:after,
text,text:before,text:after,
view,view:before,view:after{
  box-sizing:border-box;
  -webkit-box-sizing:border-box;
  -o-box-sizing:border-box;
}
.page-body{
  width: 750rpx;
  height: auto;
  font-size: 24rpx;
  background-color: #f6f6f6;
  padding-bottom:1rpx;
  color: #333333;
}
image{
  border: 0;
}
@import './assets/css/main.css';
</style>

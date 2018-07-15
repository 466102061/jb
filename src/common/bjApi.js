import { ENV_MP } from '../config/index.js'

//设置标题
function setTitle(that,title){
	if(!title) return;
	if(that.ENV == ENV_MP){
        wx.setNavigationBarTitle({
          title: title
        })
	}else{
		document.title = title;
	}
}


//封装页面跳转url
function wrapPageUrl(that,path){
	if(that.ENV == ENV_MP){//小程序
		return '/pages/'+ path + '/main';
	}else{//h5
		return '/'+path;
	}
}

//设置页面高度
function setPageHeight(that,property){
	if(that.ENV == ENV_MP){
		wx.getSystemInfo({
	      success: function (res) {
	      	that[property] = res.windowHeight+'px'
	      }
	    })
	}else{
		that[property] = document.documentElement.clientHeight + 'px';
		 // 设备宽度   var diviceWidth = document.documentElement.clientWidth;
		 // 设备高度   var diviceHeight = document.documentElement.clientHeight;
	}
}

export {
	setTitle,
	wrapPageUrl,
	setPageHeight
}
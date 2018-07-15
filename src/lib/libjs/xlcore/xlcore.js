/*
*@description
*
* xlcore.trim()                          : 去左右空格
*
* xlcore.timestamp()                     : 10位时间戳
*
* xlcore.getQueryString(name)            : 获取url请求参数name
* 
*/

;(function (){

//定义Xlcore类
function Xlcore(){};

//去左右空格
Xlcore.prototype.trim = function(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
};

//10位时间戳
Xlcore.prototype.timestamp = function(){
	var timestamp = +new Date;
	timestamp /= 1000;
	timestamp = Math.floor(timestamp);
	return timestamp;
};

//获取url请求参数name
Xlcore.prototype.getQueryString = function(name){
	var value = "";
	var searchs = window.location.search.substr(1);
	//window.location.search : '?flag=kk&kk=132'
	if (searchs) {
	   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	   var r = searchs.match(reg);
	   if (r && r[2]) {
	      value = unescape(r[2]);
	   }
	}
	return value;
}

//实例
var xlcore = new Xlcore();

//导出
if(typeof module === 'Object'){
	//AMD,CommonJS
	module.exports = xlcore;
}else if (typeof define === 'function' && define.amd) {
	//CMD,seaJs
	define(xlcore)
}else{
	window.xlcore = xlcore;
}
	
})()
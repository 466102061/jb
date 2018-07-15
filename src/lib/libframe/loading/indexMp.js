// loading.js
var loading = {};
loading.install = function (Vue, options) {
    Vue.prototype.$loading =  {
    	show : function(){
    		wx.showLoading();
    	},
    	hide : function () {
    		wx.hideLoading();
    	}
    }
}
export default loading;
// dialog.js
var dialog = {};
dialog.install = function (Vue, options) {
    Vue.prototype.$dialog = (opts) => {
    	const option ={
    		title : '提示信息',
    		content : '',
    		showCancel : true,//显示取消按钮
    		cancelText : '取消',
    		cancelColor : '#000',
    		confirmText : '确认',
    		confirmColor : '#ffbe00',
    		cancelCallback : function(){},
    		confirmCallback : function(){}
    	}
    	const opt = Object.assign(option,opts);
          wx.showModal({
          		title : opt.title,
          		content : opt.content,
          		showCancel : opt.showCancel,
          		cancelText : opt.cancelText,
          		cancelColor : opt.cancelColor,
          		confirmColor : opt.confirmColor,
          		confirmText : opt.confirmText,
          		success : function(res){
          			console.log('dialog:',res);
          			if(res.confirm){//确认按钮
          				if(typeof opt.confirmCallback === 'function'){
          					opt.confirmCallback();
          				}
          			}else if(res.cancel){//取消按钮
          				if(typeof opt.cancelCallback === 'function'){
          					opt.cancelCallback();
          				}
          			}
          		}
          })
    }
}
export default dialog;
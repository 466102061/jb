//微信同步存储

//设缓存
function setItem(key, data){
	wx.setStorageSync(key, data)
}

//取缓存
function getItem(key){
	return wx.getStorageSync(key)
}

//清楚建值为key的缓存
function removeItem(key){
	wx.removeStorageSync(key)
}

//清楚全部缓存
function clear(){
	wx.clearStorage()
}

//导出
export {
	setItem,
	getItem,
	removeItem,
	clear
}
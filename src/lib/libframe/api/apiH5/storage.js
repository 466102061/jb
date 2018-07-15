//浏览器localstorage

//设缓存
function setItem(key, data){
	localStorage.setItem(key, JSON.stringify(data))
}

//取缓存
function getItem(key){
	return JSON.parse(localStorage.getItem(key))
}

//清楚建值为key的缓存
function removeItem(key){
	localStorage.removeItem(key)
}

//清楚全部缓存
function clear(){
	localStorage.clear()
}

//导出
export {
	setItem,
	getItem,
	removeItem,
	clear
}
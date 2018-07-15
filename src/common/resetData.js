/**
 * 把数组(对象)data中的img图片，以特定格式重新拼接后，返回新的数组(对象)data
 *
 * @description 
 *
 * img_domain：图片拼接域名
 *
 * data：需拼接的数据
 * 
 * splice_key：拼接图片key
 *
 * splice_type ：拼接方式(sizeWith, widthAuto, heightAuto)
 *
 * w/h: 拼接的宽、高
 * 
 */

import * as spliceImgUrl from './spliceImgUrl.js'

//数组里多个对象
function resArray(img_domain, data, splice_key, splice_type, w, h){
  let result = [];
  for (let key in data) {
	  const obj = resObject(img_domain, data[key], splice_key, splice_type, w, h);
	   //console.log('obj:',obj);
	   result.push(obj);
  }
  return result;
}

//单个对象
function resObject(img_domain, data, splice_key, splice_type, w, h){
  let result = data;
  result[splice_key] = spliceImgUrl[splice_type](img_domain, result[splice_key], w, h);
  return result;
}

export {
	resArray,
  resObject
}
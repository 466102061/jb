/*

签名加密过程如下：

对所有API请求参数（包括公共参数和业务参数，但除去sign参数），根据参数名称的ASCII码表的顺序排序。如：foo:1,bar:2,foo_bar:3,foobar:4排序后的顺序是bar:2,foo:1,foo_bar:3,foobar:4。
将排序好的参数名和参数值拼装在一起，根据上面的示例得到的结果为：bar2foo1foo_bar3foobar4。
把拼装好的字符串采用utf-8编码，使用签名算法对编码后的字节流进行摘要。如果使用MD5算法，则需要在拼装的字符串前后加上app的secret后，再进行摘要，如：md5(secret+bar2foo1foo_bar3foobar4+secret)。

*/

import md5 from '../lib/libjs/md5/md5.js'
import { APP_KEY } from '../config/index.js'


//根据参数key的ASCII码表的顺序排序
function sortObjToString(obj){
      if(Object.prototype.toString.call(obj) != "[object Object]"){
        console.error('所要-签名-的参数必须是对象！');
        return;
      }
      let keys = Object.keys(obj);//键
      keys = keys.sort();//排序：小->大
      //签名
      let str = '';
      for(let i in keys){
        const key = keys[i];
        if (typeof obj[key] != 'object') {
          str += key + '=' + encodeURIComponent(obj[key]);
        }
      }
      return str;
 }


//签名
function sign(obj) {
  let str = sortObjToString(obj);
  //  console.log('参数ASCII码排序：',str);
  str = md5(APP_KEY + str + APP_KEY);
  return str.toUpperCase();
}


export {
	sign,
	sortObjToString
}

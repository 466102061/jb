/*

签名加密过程如下：

对所有API请求参数（包括公共参数和业务参数，但除去sign参数），根据参数名称的ASCII码表的顺序排序。如：foo:1,bar:2,foo_bar:3,foobar:4排序后的顺序是bar:2,foo:1,foo_bar:3,foobar:4。
将排序好的参数名和参数值拼装在一起，根据上面的示例得到的结果为：bar2foo1foo_bar3foobar4。
把拼装好的字符串采用utf-8编码，使用签名算法对编码后的字节流进行摘要。如果使用MD5算法，则需要在拼装的字符串前后加上app的secret后，再进行摘要，如：md5(secret+bar2foo1foo_bar3foobar4+secret)。

*/
import { sign } from './bjSign.js'
import { VERSION, APP_ID } from '../config/index.js'
var xlcore = require('../lib/libjs/xlcore/xlcore.js');

//扩展请求参数(对象)
export default function extendRequestData(obj) {
  if (Object.prototype.toString.call(obj) != "[object Object]") {
    console.error('所要-扩展-的参数必须是对象！');
    return;
  }
  //时间戳
  const times = xlcore.timestamp();
  let options = {
      v: VERSION,
      app_id : APP_ID,
      timestamp: times
  };
  options = Object.assign(obj, options);
  //sign
  const signStr = sign(options);
  options = Object.assign(obj, { sign: signStr});
   console.log('bj请求参数：:',options);
  return options;
}
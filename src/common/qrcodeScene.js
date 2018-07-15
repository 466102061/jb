/**
 * 处理二维码参数
 */
export default function qrcodeScene(scene) {
  var arr = scene.split("&");
  var params = [];
  for (var i = 0; i < arr.length; i++) {
    var a = arr[i].split("=");
    var key = a[0];
    var value = a[1];
    params[key] = value;

  }

  return params;
}
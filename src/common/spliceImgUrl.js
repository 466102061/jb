/*******************************************************************************
 * 拼装的参数：https://域名+/{{文件名}}?imageView2/1/w/{{宽度}}/h/{{高度}}
*
 */


const DEFAULT_VAULE = 338;

//固定尺寸
function sizeWith (img_domain, file_name, width, height){
    const w = width > 0 ? width : DEFAULT_VAULE;
    const h = height > 0 ? height : DEFAULT_VAULE;
    return `${img_domain}/${file_name}?imageView2/1/w/${w}/h/${h}`;
}

//固定高度，宽度自适应
function widthAuto(img_domain, file_name, height) {
  const h = height > 0 ? height : DEFAULT_VAULE;
  return `${img_domain}/${file_name}?imageView2/2/h/${h}`;
}

//固定宽度，高度自适应
function heightAuto(img_domain, file_name, width) {
  const w = width > 0 ? width : DEFAULT_VAULE;
  return `${img_domain}/${file_name}?imageView2/2/w/${w}`;
}


export {
	sizeWith,
	widthAuto,
	heightAuto
}
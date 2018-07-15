/*
*apiH5与apiMp中具有同名的异步函数，实现相同的功能，
*然后导入到各自平台的入口文件，赋值给Vue全局变量BJ_API，
*之后的页面调用BJ_API具体的方法，最终实现各平台的兼容
 */


import API_H5 from './apiH5/index.js'
import API_MP from './apiMp/index.js'

export {
	API_H5,
	API_MP
}
import * as resetData from './resetData.js'
import * as spliceImgUrl from './spliceImgUrl.js'
import extend from './bjExtend.js'
import qrcodeScene from './qrcodeScene.js'
import ERROR_CODE from './errorCode.js'
import { sign , sortObjToString } from './bjSign.js'
import { setTitle , setPageHeight, wrapPageUrl as pageUrl } from './bjApi.js'

const bjcore = {
	sign,
	extend,
	pageUrl,
	setTitle,
	resetData,
	ERROR_CODE,
	qrcodeScene,
	spliceImgUrl,
	setPageHeight,
	sortObjToString
}

export default bjcore;
## 笨鲸小程序与h5混合开发说明

> A Mpvue project of BenJing

### 1.启动项目

``` bash

1.安装依赖包
npm install

2.启动小程序
npm run dev

3.启动h5
npm run devH5

4.打包小程序
npm run build

5.打包h5
npm run buildH5

> 注意事项：用微信开发者工具新建项目时，路径请选择根路径文件(bjm)，而不是打包后产生的文件(dist)


```
### 2.项目结构
```tree
.
├── build							    	// 小程序打包的webpack配置
│   ├── ... 					
│
├── config 								// 小程序打包的环境与入口配置
│   ├── ...
|
├── buildH5								// h5打包的webpack配置
│   ├── ... 					
│
├── configH5 								// h5打包的环境与入口配置
│   ├── ...
│
├── dis 							    	// 小程序打包生成的发布包
│   ├── ...
│
├── disH5 								// h5打包生成的发布包
│   ├── ...
|
├── src  							        // 程序代码
|   |
│   ├── assets  							
│   │   |
|   |   ├──css                      
|   |   |    ├──....
│   │   |
|   |   └──img                           //图片资源
|   |       ├──....
|   |
│   ├── common  							//业务相关的公用js
│   │   |
|   |   ├── ...    
|   |
│   ├── model  							//模拟测试数据
│   │   |
|   |   ├── ...    
|   |
│   ├── components  		                //组件(注意命名)					
│   │   |
|   |   ├──swipeH5                        //h5组件swipe  
|   |   |    ├──....                
│   │   |
|   |   ├──swipeMp                       //小程序组件swipe
|   |   |    ├──....
│   │   |
|   |   ├──swipe                          //兼容平台、公用的组件swipe
|   |   |    ├──....
|   | 
│   ├── page  				             //页面	
│   │   |
|   |   ├──home                            //平台不兼容，2套入口页面      
|   |   |    ├──indexMp.vue                //小程序
|   |   |    ├──indexH5.vue                //h5
|   |   |    ├── page.js                   //页面数据源
|   |   |    └── main.js                   //小程序页面配置
│   │   |
|   |   ├──index                      
|   |   |    ├──index.vue
|   |   |    ├── page.js
|   |   |    └── main.js  
|   |
│   ├── config  			         	      //常量配置	
│   │   |
|   |   ├──bjENV.js                         //平台常量      
|   |   ├──config.js                        //其他(版本号、签名参数等)
|   |   └── index.js                        //所有常量导出文件
|   |
│   ├── router  		                      //h5路由				
|   |   └── index.js 
|   |  
│   ├── store  		                       //vuex-store				
|   |   ├──...   
|   | 
│   ├── lib 				        	     // lib库，不参与项目的业务逻辑，整个lib库可移植到其他项目中
|   |    |
│   |    ├──libframe                         //框架相关的库、api等
|   |    |    |
|   |    |    ├── api                       //框架api，兼容h5和小程序
|   |    |    ├── loading                   //框架vue-loading插件
|   |    |    ├── ....
|   |    |
|   |    ├──libjs                           //我们自己的js基础库xlcore.js(兼容浏览器，node环境)，第三方独立的库等
|   |    |     |
|   |    |     ├── xlcore                   
|   |    |     ├── md5 
|   |    |     ├── ....   
|   |    |
|   |    ├── ...
|   |
|   |
|   ├── App.vue                             //小程序入口template
|   |
|   ├── main.vue                            //小程序入口
|   |
|   ├── AppH5.vue                           //h5入口template
|   | 
|   └── mainH5.js                           //h5入口
|   
├── node_modules 				               // 开发依赖包
│       ├── ...
│
├── static 						           // webpck中配置的原样拷贝的资源包
│      ├── ...
|
|
├── .babelrc 
|
├── .editorconfig
|
├── .eslintignore
|
├── .eslintrc.js
|
├── .gitignore
|
├── .postcssrc.js
|
├── index.html
|
├── package-lock.json
|
├── package.json
|
├── project.config.json                    //设置小程序appid
|
├── codeStyle.md                           //js代码规范
|
└── README.md     		



> 说明：

1.项目相关的代码、资源都在src文件下，其他目录可以不用理会，除非想修改webpack的配置

2.文件夹dis、disH5(打包)以及node_modules(安装开发依赖)，为开发环境下产生的包，原则上不要上传

3.关于模块接口开发(如：api、config常量),最好有一个默认的index.js文件，做为该模块下所有接口(export/export default)的导出媒介

4.lib库，不参与项目的业务逻辑，项目业务相关的公用js请放置在src/common，具体页面业务的page.js放在各自的页面文件夹下

5.关于平台不兼容不得不写两套代码的参考命名：如滑动组件，兼容组件swipe，h5组件swipeH5,小程序组件swipeMp

6.关于文件夹static与assets(src/assets)的说明，二者都有可放置静态资源意思，前者(static)为webpck插件copy-webpack-plugin配置成原样拷贝的资源包路径，
也就是说该目录下的一切资源都会原样拷贝整合到打包后的静态资源中，最终会导致打包后的静态资源在实际项目中有多余的资源，故而我们采取把项目资源放到src/assets中

7.js代码规范，请阅读codeStyle.md文件


```
### 2.项目API
``` bash

1.全局常量
API                 #api
ENV                 #平台环境
API_DOMAIN          #接口调用域名
IMG_DOMAIN          #图片资源域名

2.项目根路径
this.API.getRoot(this)

3.页面跳转
this.API.navigateTo(this, url)       #路由到新页面
this.API.reLaunchTo(this, url)       #重载该页面

4.本地数据存储
this.API.storage.setItem(key, data)    #存
this.API.storage.getItem(key)          #取
this.API.storage.removeItem(key)       #清
this.API.storage.clear()               #清全部

5.网络请求(async promise)
this.API.httpRequest({
    url : '',
    method : 'POST',
    data : {}
})

6.vue原型扩展api
this.$loading.show()             #显示加载...
this.$loading.hide()             #关闭加载...
this.$toast(tips)                #错误提示弹窗，2.5s后自动关闭
this.$dialog({                   #confirm弹窗
	title : '提示信息',
	content : '',
	showCancel : true,
	cancelText : '取消',
	cancelColor : '#000',
	confirmText : '确认',
	confirmColor : '#ffbe00',
	cancelCallback : function(){},
	confirmCallback : function(){}
})            
...

7.bj项目api
bjcore.setTitle(this, title)             #设置文档标题
bjcore.pageUrl(this, path)               #封装页面路由路径
bjcore.setPageHeight(this, property)     #设置页面高度
...


```
### 3.相关技术文档
``` bash

1.http://mpvue.com/mpvue/#_3              #mpvue

2.https://cn.vuejs.org/v2/guide/          #vue

3.https://router.vuejs.org/zh/            #vue-router

4.https://vuex.vuejs.org/zh/              #vuex

5.https://developers.weixin.qq.com/miniprogram/dev/index.html           #微信小程序

6.https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842     #微信公众平台




```
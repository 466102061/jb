# js代码规范

## 日志使用 使用xlcore情况
1.日志统一使用xlcore库 支持不定参数, 默认指向console对应函数，有特殊需求请自行接管

    xlcore.info
    xlcore.error
    xlcore.warn
    xlcore.debug

2.客户端在外放时会删除所有warn基本以下日志输出。

## 断言使用 使用xlcore情况
xlcore.assert 断言用于帮助调试使用，属于调试代码不要写入业务逻辑, 在外放后也将会被删除。



## 代码注释使用jsDoc风格
*Right:*

    /**
    * 描述
    * @param  {变量类型} 变量名
    * @return {}
    * @example
    */

## 变量、属性都采用小驼峰

变量、属性的命名风格都需要遵循小驼峰风格。
同时所有的命名都是有意义的。
尽量避免用单字符变量和少见单词来命名。

*Right:*

    var adminUser = db.query('SELECT * FROM users ...');


*Wrong:*


    var admin_user = db.query('SELECT * FROM users ...');
    var a = db.query('SELECT * FROM users ...');


## 字典字段使用小写加下划线


*Right:*

    var a = ["main_key":1];


*Wrong:*


    var a = ["MainKey":1];

## 函数名采用小驼峰,私有函数前面加下划线

*Right:*


    function isNewData(){
    	return true;
    }

    function _isNewData(){
    	return true;
    }

*Wrong:*


    function IsNewData(){
    	return true;
    }






## 成员变量命名
*Right:*


    this.value = true;
    this._private = true; //私有变量


## 类名采用大驼峰

类名都采用大驼峰风格来命名。

*Right:*


    function BankAccount() {
    }
    

*Wrong:*


    function bank_Account() {
    }


## 用大写来标识常量

常量变量和对象的静态常量属性都需要特殊表明，通过全部大写的方式来表明。

尽管 Node.js / V8 支持 mozilla 的 [const][const] 关键字，
但是不幸的是，对象的属性并不支持这个关键字，而且 const 没有包含于任何一个 ECMA 规范中。

*Right:*


    var SECOND = 1 * 1000;
    
    function File() {
    }
    File.FULL_PERMISSIONS = 0777;


*Wrong:*


    const SECOND = 1 * 1000;
    
    function File() {
    }
    File.fullPermissions = 0777;


[const]: https://developer.mozilla.org/en/JavaScript/Reference/Statements/const


## 4空格缩进
使用4个空格而不是 tab 来进行代码缩进

## 使用有意义的判断条件

所有复杂的条件判断都需要赋予一个有意义的名字或者方法。

*Right:*


    var isValidPassword = password.length >= 4 && /^(?=.*\d).{4,}$/.test(password);
    
    if (isValidPassword) {
      console.log('winning');
    }


*Wrong:*


    if (password.length >= 4 && /^(?=.*\d).{4,}$/.test(password)) {
      console.log('losing');
    }


## 写精简的函数

保持你的函数尽可能的精简。
一个好的函数应该能够在幻灯片上一屏显示，并且让坐在教室最后一排的人看清楚。
别再去数你的每一个函数并控制在15行以内了。

## 尽早的从函数中返回

为了避免深入嵌套的 if 语句，请尽早的从函数中返回。

*Right:*

    
    function isPercentage(val) {
      if (val < 0) {
    	return false;
      }
    
      if (val > 100) {
    	return false;
      }
    
      return true;
    }


*Wrong:*


    function isPercentage(val) {
      if (val >= 0) {
    	if (val < 100) {
      		return true;
	    } else {
	      return false;
	    }
	      } else {
	    return false;
	      }
    }


针对这个示例，甚至可以进一步精简优化：


    function isPercentage(val) {
      var isInRange = (val >= 0 && val <= 100);
      return isInRange;
    }


## 给你的闭包命名

请尽量给你的闭包、匿名函数命名。
这让人知道你在意这个函数，更重要的是，这将会产生可读性更好的堆栈跟踪和CPU调用信息等。

*Right:*


    req.on('end', function onEnd() {
      console.log('winning');
    });


*Wrong:*


    req.on('end', function() {
      console.log('losing');
    });

## 注意this的指向

特别是在闭包中注意当前this指向的对象!!


## 不要嵌套闭包

使用闭包，但是不要嵌套他们，否则你的代码将会一团糟。

*Right:*


    setTimeout(function() {
      client.connect(afterConnect);
    }, 1000);
    
    function afterConnect() {
      console.log('winning');
    }


*Wrong:*


    setTimeout(function() {
      client.connect(function() {
    	console.log('losing');
      });
    }, 1000);



## 大括号位置

请把你的所有的左大括号都放在语句开始的这一行。

*Right:*


    if (true) {
      console.log('winning');
    }


*Wrong:*


    if (true)
    {
      console.log('losing');
    }


同时，请注意在条件判断前后都添加一个空格。


## 使用 === 比较符

写代码并不是在背这些 [stupid rules][comparisonoperators] 。使用 `===` 操作符来进行比较操作，它会完全按照你的期望来执行。

*Right:*


    var a = 0;
    if (a === '') {
      console.log('winning');
    }
    


*Wrong:*


    var a = 0;
    if (a == '') {
      console.log('losing');
    }


[comparisonoperators]: https://developer.mozilla.org/en/JavaScript/Reference/Operators/Comparison_Operators



## 不要扩展内建类型

不要扩展 javascript 内建对象的方法。将来的你会感谢你这个做法的。

*Right:*


    var a = [];
    if (!a.length) {
      console.log('winning');
    }


*Wrong:*


    Array.prototype.empty = function() {
      return !this.length;
    }
    
    var a = [];
    if (a.empty()) {
      console.log('losing');
    }




## Object.freeze, Object.preventExtensions, Object.seal, with, eval

尽量不要使用。

## Getters 和 Setters

不要使用 setters ，他们会引发一些使用你的代码的人无法解决的问题。
当没有[副作用][sideeffect]的时候，可以使用 getters，例如提供一个集合类的长度属性的时候。

[sideeffect]: http://en.wikipedia.org/wiki/Side_effect_(computer_science)

## 异步回调函数
NodeJS 的异步回调函数的第一个参数应该是错误指示，只有这样才能够享受许多流程控制模块的福利。

*Right:*


    function cb(err, data , ...) {...}


*Wrong:*


    function cb(data, ...) {...}




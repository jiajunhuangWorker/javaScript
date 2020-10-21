/*
课前
转义字符
\
\r行结束符
\t: 空格
\n 换行
*/

// document.body.innerHTML ="\
// <div>2</div>\
// <span>3</span>\
// ";


/*
1.写一个正则表达,匹配手机号
^1[0-9]{10}$
2.正则匹配邮箱
xxx@xxxx.xxxx.xxxx
^\w+[@][\da-zA-Z]+([.][a-zA-Z]+)+$
3.匹配姓名 3-6位中文
^[\u4e00-\u9FA5]{2,6}$
4.密码必须是6-12位字符,数字字母下划线
^\w{6,12}$
5.匹配座机号
前面 1-3个数字 后面4-8个数字
^\d{1,3}(-)\d{4,8}$
6.匹配一个整数
^\d+(\.\d+)?$
7.匹配一个小数
^\d+(.)\d+$
6.匹配一个正数
^[^-]\d+(\.\d+)?$
*/

/*
RegExp
正则表达式的作用:匹配特殊字符或有特殊搭配原则的字符的最佳选择
两种创建方式
字面量创建
	/rule/
构造函数创建
	new RegExp()
	RegExp()
RegExp(rule) 和 new RegExp(rule)区别
new 1.地址不一样
RegExp 2.是地址一样

*/


/*
标志位
/rule/gim
new RegExp("rule","gim")
i:ignoreCase(忽略大小写)
g:全局匹配
m:多行匹配
*/
var reg1 = new RegExp("abc","g");
console.info(reg1)

/*
^首个元素
[^]范围内非(除了)
*/
var str2 = 'abc\nabcda';
var reg2 = /^a/gm;
console.info(str2.match(reg2))


/*
[]:1位值 区间
*/
var reg3 = /[1-9][A-z]/g;
var str3 = "123dasd323sfsd555";
console.info(str3.match(reg3))

/*
（|）或这
*/

/*
元字符
	是拥有特殊含义的字符
\w ===[0-9A-z_]
\W[^\w]
\d[0-9]
\D[^0-9]
\s [\t\n\r\v\f]空格字符
\S[^\s]
\b 单词边界
\B 非单词编辑
/\b33\B/
*/

/*
unicode
 能包含上文字
 按照层去划分
 unicode编码和汉字去进行匹配
*/
console.info("\u8001");

/*
量词
n+  +代表{1,正无穷}  贪婪匹配原则
n* *{0,正无穷}	懒惰匹配原则
n? {0,1};
n{x} {x}
n{x,y} {x,y}
n$以什么结尾
^n以什么为开头
*/
var reg4 = /\w*/g;
console.info('str3:123dasd323sfsd555')
console.info(str3.match(/\w*/g));
console.info(str3.match(/\w+/g));
console.info(str3.match(/\w?/g));
console.info(str3.match(/\w{3}/g));
console.info(str3.match(/\w{3,5}/g));
console.info(str3.match(/\w{3,}/g));
console.info(str3.match(/\w{3,5}/g));
console.info(str3.match(/\w{3,5}/g));

/*
字符串首尾有数字
*/
var numReg =/^\d|\d$/;
var numReg =/^\d[\s\S]$/;

/*
方法
test()  reg.test(str)
exec()  reg.exec(str)  和游标关系
match() str.match(reg)
*/
var  str = '111234567111890';
var reg = /111/g;

/*
	全局匹配效果
	test()
*/ 
console.info(reg,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info(reg,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info(reg,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info(reg,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info(reg,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info(reg,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info(reg,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info(reg,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)


/*
exec()
*/
var str = '22ab33aba11ba11b';
var reg = /\d+/g;//加了g
var reg2 = /ab/;//不加了g
console.info(reg.exec(str),'是否真数组',Array.isArray(reg.exec(str)));
// lastIndex 会影响匹配
console.info(reg.exec(str));
while(result = reg.exec(str)){
	console.info('匹配的结果:',result[0],'出现的位置:',result['index'])
}
reg.lastIndex = 0;//手动控制lastIndex
console.info(reg.exec(str));
console.info(reg.exec(str));


console.info(reg.exec(str));
console.info(reg.exec(str));

// 							正则不加g
console.info(reg2.exec(str));
console.info(reg2.exec(str));
console.info(reg2.exec(str));
console.info(reg2.exec(str));


/*
字符串相关的正则
match
search
replace
*/
var str = '223aaaabbbbccccdddd';
var reg = /(\w)\1(\w)\2/g;
console.info(str.match(reg))
/*
search
找下标
存在返回!-1
*/
console.info(str.search(reg));
/*
split
*/
console.info(str.split(/a/g))
/*
replace
替换
*/
console.info(str.replace(/\d/g,'被替换了'))
var str = 'aabb';
console.info(str.replace(/(\w)\1(\w)\2/g,'$2$2$1$1'))

/*
replace可以写函数
*/
console.info(str.replace(/(\w)\1(\w)\2/g,function($,$1,$2){
	console.info($)
	console.info($1)
	console.info($2)
}))
/*
首字母变大写
*/
var str = "hello world";
str = str.replace(/\s*\b[a-z]\s*/g,function(match){
	return match.toUpperCase();
})
console.info('首字母变大写驼峰命名法'+str)
var str = 'the-first-name';
var reg = /-(\w)/g;
console.info(str.replace(reg,function($,$1){
	console.info($)
	console.info($1)
return $1.toUpperCase();
}))

/*
正向预查
正向断言
*/
var str = 'abaaaa';
var reg = /a(?=b)/g;
var reg1 = /a(?!b)/g;
console.info(str.match(reg));
console.info(str.match(reg1));


var str = "aaaaa";
var reg = /a?/g;
var reg1 = /a*/g;
console.info(str.match(reg))//贪婪;
console.info(str.match(reg1))//非贪婪;

// 贪婪模式
var  str = '1234abc23cd445';
var reg = /\d+/g;
// 需要全局匹配
console.info('贪婪模式(尽可能的去匹配):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('贪婪模式(尽可能的去匹配):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('贪婪模式(尽可能的去匹配):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('贪婪模式(尽可能的去匹配):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('贪婪模式(尽可能的去匹配):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('贪婪模式(尽可能的去匹配):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('贪婪模式(尽可能的去匹配):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('贪婪模式(尽可能的去匹配):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)

var reg = /\d+?/g;
console.info('懒惰模式(匹配到就结束):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('懒惰模式(匹配到就结束):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('懒惰模式(匹配到就结束):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('懒惰模式(匹配到就结束):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('懒惰模式(匹配到就结束):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('懒惰模式(匹配到就结束):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('懒惰模式(匹配到就结束):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)
console.info('懒惰模式(匹配到就结束):',reg,'str:',str,'初始-',reg.lastIndex,reg.test(str),'结束-',reg.lastIndex)

/*
1000000000
1.000.000.000
*/
var str = "￥100000203004";
var reg = /(?=(\B)(\d{3})+$)/g;
console.info(str.replace(reg,"."));

/*
1.正则表达式 匹配一个字符串,得到匹配的次数+匹配的结果
*/
var arr = [],str="你好21不好22额为全额sb不好",reg=/[^/w/W]+?/g,count = 0;
while(result = reg.exec(str)){
	count+=1;
	arr.push(result[0])
}
console.info(arr,count)
/*
2.得到一个字符串中中文字符的数量
*/
arr =[],count = 0,reg=/[\u4e00-\u9FA5]+?/g;
while(result = reg.exec(str)){
	count+=1;
	arr.push(result[0])
}
console.info(arr,count)
/*
3.过滤敏感词,有一个敏感词数组需要将字符串中出现敏感词替换为四个星号
*/
var stringArr=["糖","搞笑"];
var str = "你知道吃多了糖会蛀牙吗?搞笑的家伙,糖吃多了对身体不好搞笑";
stringArr = new RegExp(stringArr.join("|"),"g");
console.info(str.replace(stringArr,"****"))
// function encodeUnicode(str) {
//   var res = [];
//   for (var i = 0; i < str.length; i++) {
//       res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);
//   }
//   return "\\u" + res.join("\\u");
// }
/*
4.得到一个html 字符串出现章节的数量
*/
var str ='<dt>第一章</dt>'+
			'<dd>22</dd>'+
			'<dt>第二章</dt>'+
			'<dd>22</dd>'+
			'<dt>第三章</dt>'+
			'<dd>22</dd>'+
			'<dt>第四章</dt>'+
			'<dd>22</dd>'+
			'<dt>第五章</dt>',
reg = new RegExp('第[\u4e00-\u9FA5]章','g'),count = 0;
console.info(str)
while(result = reg.exec(str)){
	count+=1;
	console.info(result)
}
console.info(count)

// 捕获组
var reg = /(\d[a-z])[a-z]+/g;
var  s = '2afdsfds-3bfdsfdsf-5ffdfds';
while(result = reg.exec(s)){
	console.info(result)
}
// 捕获组应用 groups里面有值
var time  = '2015-5-5,2014-2-3,2011-2-3';
var reg = /(\d{4})-(\d{1,2})-(\d{1,2})/g
while (result = reg.exec(time)) {
	console.log(result[1],result[2],result[3])
}
// 捕获组命名  groups里面有值
var reg = /(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})/g
while (result = reg.exec(time)) {
	console.log(result.groups)
}
// 非捕获组  groups里面没值
var reg = /(?:<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})/g
while (result = reg.exec(time)) {
	console.log(result.groups)
}
var reg = /(\d{4})-(\d{1,2})-(\d{1,2})/g
// replace
time = time.replace(reg,function(match,g1,g2,g3){
	console.info(match,g1,g2,g3)
	return g1+'/'+g2+'/'+g3
})
console.info(time)

time = time.replace(reg,"$1/$2/$3")
console.info(time)

// 反向引用
var reg = /(\d{2})\1/g
var s = "1313";
console.info(reg.test(s));
var s = "aaaaaaaabbbbbbccccccccdefggggg";
var reg = /(\w)\1+/g
while(result = reg.exec(s)){
	console.info(result)
}
// 反向引用获取名称
var reg = /(?<char>\w)\1\k<char>+/g
while(result = reg.exec(s)){
	console.info(result)
}

var str = "dsadas123dsadasd3213dsadaz4324dsadas123213dsad232"
var reg = /[a-zA-Z](?=\d+)/g;
while(result = reg.exec(str)){
	console.info(result)
}

// 正向断言
var str = "100000203004";
var reg = /\B(?=(\d{3})+$)/g;
console.info(str.replace(reg,"."));


//反向断言 让字母后面不是数字的显示出来
var str = "dsa123213dsad321321dsadas";
var reg = /[a-zA-Z](?!\d+)/g
while(result = reg.exec(str)){
	console.info(result)
}

//判断密码强度
//要求密码中必须出现小写字母大写字母数字特殊字符
var s = "23dsadA."
var  reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@_,.]).{6,12}$/;
console.info(reg.test(s))

/*
密码强度 6~12
出现大小写字母,数字,特殊字符 强
出现大小写字母,数字, 中
出现大小写字母, 低
*/
function checkUserPw(pwd){
	if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@_,.]).{6,12}$/.test(pwd)){
		return '密码强'
	}else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/.test(pwd)){
		return '密码中'
	}else if(/^(?=.*[a-z])(?=.*[A-Z]).{6,12}$/.test(pwd)){
		return '密码弱'
	}else{
		return '条件不满足密码长度6~12'
	}
}
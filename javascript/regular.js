/*
课前
转义字符
\
\r行结束符
\t: 空格
\n 换行
*/

document.body.innerHTML ="\
<div>2</div>\
<span>3</span>\
";

/*
RegExp
正则表达式的作用:匹配特殊字符或有特殊搭配原则的字符的最佳选择
两种创建方式
字面量
new RegExp
*/
var reg = /ab/g;
var str = 'abcd'
console.info(reg.test(str))
/*
i:ignoreCase(忽略大小写)
g:全局匹配
m:多行匹配
*/
var reg1 = new RegExp("abc","g");
console.info(reg1)
console.info(reg1.test(str))
console.info(str.match(reg))

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
var reg3 = /[1-9][A-z][1-9]/g;
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
// console.info(\u8001);
// console.info(\u100000-\U10ffff);

/*
一切集合
[\d/D]
.[^|r|n]
*/

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

/*字符串首尾有数字

*/
var numReg =/^\d|\d$/;
var numReg =/^\d[\s\S]$/;

/*
reg.source
*/

/*
方法
test()  reg.test(str)
exec()  reg.exec(str)  和游标关系
match() str.match(reg)
*/

var str = 'abababab';
var reg = /ab/g;//加了g
var reg2 = /ab/;//不加了g
console.info(reg.exec(str));
console.info(reg.exec(str));
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
子表达式
匹配第一个表达式内容
*/
var str = '223aaaabbbbccccdddd';
var reg = /(\w)\1(\w)\2/g;
console.info(str.match(reg))
/*
找下标
存在返回!-1

*/
console.info(str.search(reg));
/*
replace
替换
*/
console.info(str.replace(/\d/g,'cc'))
var str = 'aabb';
console.info(str.replace(/(\w)\1(\w)\2/g,'$2$2$1$1'))

console.info(str.replace(/(\w)\1(\w)\2/g,function($,$1,$2){
	console.info($)
	console.info($1)
	console.info($2)
}))

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


/*

1000000000
1.000.000.000
*/
var str = "1000000000";
var reg = /(?=(\B)(\d{3})+$)/g;
console.info(str.replace(reg,"."));
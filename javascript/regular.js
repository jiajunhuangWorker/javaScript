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
console.info(\u8001);
// console.info(\u100000-\U10ffff);

/*
一切集合
[\d/D]
.[^|r|n]
*/
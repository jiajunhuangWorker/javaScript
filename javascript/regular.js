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
g:全局
m:
*/
var reg1 = new RegExp("abc","g");
console.info(reg1)
console.info(reg1.test(str))
console.info(str.match(reg))
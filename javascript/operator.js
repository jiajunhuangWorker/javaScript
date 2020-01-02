var a=1;
/*
先打印后++
*/
document.write(a ++)
document.write(a);

var b=1
var c=b++ +1
document.write('<br/>c:',c);
document.write('<br/>b:',b);

document.write('<br/>0%5:',0%5)

document.write('<br/>---js比较运算符---')


var a=123,b=877;
a=a+b;
b=a-b;
a=a-b;
document.write('<br/>a',a);
document.write('<br/>b',b);


/*ascll码比较*/
document.write('<br/>10>8:','10'>'8',' //两个字符串比较先查找到1然后1和8进行比较');
document.write('<br/>Infinity == Infinity:',Infinity == Infinity);
document.write('<br/>NaN == NaN:',NaN == NaN);

/*逻辑运算符
&&运算符先看前面的表达式转换为布尔值时否为真如果为真就看第二个表达式转换为布尔值的结果,如果只有两个
表达式的化,只看第二个表达式,就返回该表达式的值

undefined,null,NaN,"",0,false 转换为布尔值都为false
*/
/*
&&
*/
document.write('<br/>1 && 3+2:',(1 && 3+2));
document.write('<br/>0 && 3+2:',(0 && 3+2));
document.write('<br/>1 && undefined:',(1 && undefined));
document.write('<br/>0 && document.write("a"):',0 && document.write("a"));
/*
||
兼容的时候使用
 var e=e||window.event
*/
document.write('<br/>0||false||1:',0||false||1);
/*
！
*/
document.write('<br/>123',!123)
document.write('<br/>')
/*
条件语句
*/
var score = parseInt(window.prompt('textarea'));
if(score>90 && score<=100){
	document.write('alibaba');
}else if(score>80 && score<=90){
	document.write('tencent');
}else if(score>70 && score<=80){
	document.write('baidu');
}else if(score>60 && score<=70){
	document.write('mogujie');
}else{
	document.write('no,no,no');
}

/*
循环语句
*/
var i=1;
for(;i;){
	document.write('<br/>i:'+i);
	i++;
	if(i>10){
		i=0;
	}
}
for (var i = 0; i <= 100; i++) {
	if(i%3==0 && i%5==0 || i%7==0){
		document.write('<br/>i能被3&&5||7整除:',i)
	}
}
/*
1.计算2的n次幂，n可输入n为自然数
2.计算n的阶乘,n可输 5*4*3*2*1
3.斐波那 1 1 2 3 5 8
4.编写一个三维输的正整数反向
5.a,b,c三个数字大印出来
6.打印出100以内的质数
*/
/*
1.计算2的n次幂，n可输入n为自然数
*/
var score = parseInt(window.prompt('请输要求2的多少次幂'));
if(score!=0){
	var num=1;
	for(var i=0;i<score;i++){
		num*=2;
	}
	document.write('<br/>2的'+score+'次幂是:',num);
}else{
	document.write('<br/>2的0次幂是:1');
}

/*
2.计算n的阶乘,n可输 5*4*3*2*1
*/
var score2 = parseInt(window.prompt('请输阶乘数字'));
var str='',result=1;
for(var i=score2;i>0;i--){
	str+=i>1?i+'*':i;
	result*=i;
}
document.write('<br/>'+str+':'+result);

/*3.斐波那
斐波那契数列（意大利语：Successione di Fibonacci），又译为菲波拿契数列、菲波那西数列、斐氏数列、黄金分割数列。
1 1 2 3 5 8
*/
var score3 = parseInt(window.prompt('请输入斐波那数列'));
function num(n){
	n--;
	if(1<n){
		num(n);
	}
	console.info(n+'+'+(n-1)+':'+(n+n-1))
}
/*
4.编写一个三位输的正整数反向
*/
var score4 = window.prompt('请输入3位数字');
var result='';
for(i=score4.length;0<i;i--){
	result+=score4[i-1];
}
document.write('<br/>'+score4+'反转之后:'+result);
/*
5.a,b,c三个数字比较
*/

/*
6.打印出100以内的质数
*/
var score6 = window.prompt('请输入数字检验出质数');
var str='';
for(var i=score6;1<i;i--){
	if(i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0){
		str+=i+'-';
	}
}
document.write('<br/>'+score6+'的质数有:'+str+'7-5-3-2');




/*
typeof number,string,boolean,object,undefined, function
*/
console.info('typeof null:',typeof null);
console.info('typeof 1:',typeof 1);
console.info('typeof 你好:',typeof '你好');
console.info('typeof false:',typeof false);
console.info('typeof []:',typeof []);
console.info('typeof {}:',typeof {});
console.info('typeof undefined:',typeof undefined);
console.info('typeof function (){}:',typeof function (){});

/*
	显式转换
*/
var num = Number('123')
console.info("Number('123')", num);
var num = Number('undefined')
console.info("Number(undefined)", num);
var num = Number(true)
console.info("Number(true)", num);
var num = Number(false)
console.info("Number(falae)", num);
var num = Number('a')
console.info("Number('a')", num);
console.info('--------parseInt---------')
var num = parseInt('a');
console.info("parseInt('a')", num);
var num = parseInt('a123');
console.info("parseInt('a123')",num);
var num = parseInt('123a');
console.info("parseInt('123a')",num);
var num = parseInt('123.9');
console.info("parseInt('123.9')",num);
var num = parseInt(true);
console.info("parseInt(true)",num);
var num = parseInt(false);
console.info("parseInt(false)",num);
var num = parseInt(undefined);
console.info("parseInt(undefined)", num);
var num =  parseInt(101010,2)
console.info(" parseInt(101010,2)");
console.info(num)
var num =  parseInt(20,8)
console.info(" parseInt(20,8)");
console.info(num)
var num =  parseInt(20,16)
console.info(" parseInt(20,16)");
console.info(num)

/*
	隐式转换
*/
var num = 1+'1';
console.info("1+'1':",(1+'1'));

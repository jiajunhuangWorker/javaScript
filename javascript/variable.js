/*
变量声明
*/
var a;
a=100;

// document.write(a);
/*
单一声明模式
*/
var a,b,c,d,e;
/*
命名规则:
	1.开头是英文字母,_,$开头
	2.变量名可以包括英文字母,_,$,数字
	3.不可以用系统的关键字,保留字作为变量名
*/

/*
基本语法
由值来判断原始值或者引用值
值类型-数据类型
不可改变的原始值(stack栈数据)
number,boolean,string,undefined,null(覆盖使用)
原始值存放的地方是stack(栈)
先进后出
栈内存之间的关系是拷贝的关系
*/
var a=10;
var b=a;
a=20;
document.write('	原始值: ',b)


/*
基本语法
js语句基本规则
语句后面要用分号结束;
js语法错误会引发后续代码终止，但不会影响其他js代码块
书写格式要规范'=+/-'两边都应该有空格
*/

/*
引用值(heap堆数据)
array,object,function
栈内存是存放堆内存地址(引用),堆 内存是存放数据
*/
var arr=[1];
var arr1=arr;
arr.push(2);
document.write('	引用值: ',arr);

var  arr=[1,2];
var arr1=arr;
arr=[1,3];
document.write('	arr1:',arr1);

/*
js错误分为两种
1.低级错误(语法解析错误)
先通篇去进行的扫描html然后在进行解析
2.逻辑错误(标准错误,情有可原)
*/
var a=10;
document.write(a);
var b=20;
document.write(b);

/*
js运算操作符
'+'
1.数学运算,字符串连接
2.任何数据类型加字符串都等于字符串

'-','*','/','%',"=","()"
NaN(not a number)
infinity(正无穷)
-infinity(负无穷)

优先级'='最弱,"()"优先级较高
"++","--","+=","-=","/=","*=","%="
*/
var dobulePlusElementA=10;
var dobulePlusElementB=20;
dobulePlusElementA=++dobulePlusElementA;
document.write(dobulePlusElementA);

var dobulePlusElementA=10;
var dobulePlusElementC=++dobulePlusElementA - 1 + dobulePlusElementA++;
document.write('	---'+dobulePlusElementC + '	' + dobulePlusElementA)

var javascriptA = 10;
javascriptA+=10+1;
document.write('&nbsp;&nbsp;javascriptA: ',javascriptA);

var a = (10 * 3 - 4 / 2 + 1) % 2;//1
	document.write('<br/>');
	document.write('a++:',a);// 2
	b=3;
	b %= a + 3;	//3
	document.write('<br/>');
	document.write('++a',++a);
	document.write('<br/>');
	document.write('a++:',a++);// 2
	document.write('<br/>');
	document.write('--b:',--b);//2
	var a= 123,b=234,c=null;
	c=a;
	a=b;
	b=c;
	console.info(a,b);

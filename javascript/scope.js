function test(){
	var a = 123;
	function demo(){
		var b=234;
		console.info(a);
	}
	demo();
	console.info(b);
}
test();


/*
js运行三部曲:
	语法分析-->预编译-->解析性语言
javascript特点:
	单线程,解析性语言
语法分析
	先通篇扫描一遍整个javascript判断有没出现少括号等之类的情况

预编译
	函数声明整体提升(函数创建的时候就在window中注册了)
	变量 声明提升

解析性语言

暗示全局变量(imply global)
	任何变量,如果未经声明就赋值,此变量就为全局对象所有
全局对象:window(window就是全局的域)

*/
window.a = 10;
console.info('a' , a);
var b = 234;
console.info('window.b' , window.b);


function num(){
	/*
		c未声明在window所有
	*/
	var d = c =123;

}
num();
console.info('window.c',window.c);
console.info('window.d',window.d);

/*
函数声明整体提升
变量声明提升
*/
console.info(yubianyi)
var yubianyi=132;


/*
imply blobal 暗示全局变量
*/

// 预编译发生在函数之前的前一刻
/*
创建AO对象 activation object 执行上下文
四部曲:

1.创建AO对象
2.找形参和变量声明,将变量和形参名作为AO属性名 ,值为undefined
3.将实参值和形参统一
4.在函数体里面找函数声明,值赋予函数体

2.
AO{
	a:undefined,
	b:undefined
}
3.
AO{
	a:function a(){}
	b:function(){}
	d:function d(){}
}
*/
function fns(a){
	console.info(a);//1 -> 123(覆盖1) -> function a(){}(覆盖123)
	var a = 123;
	console.info(a)//1 -> 123(覆盖1) -> function a(){}(覆盖123) -> 123(提升了);
	function a(){}
	console.info(a)//1 -> 123(覆盖1) -> function a(){}(覆盖123) -> 123(提升了,在预编译的时候已经读取过一次function a(){});
	var b =function(){}
	console.info(b) //function(){}
	function d(){}//function d(){}

}

fns(1);

/*
创建AO对象 activation object 执行上下文
四部曲:

1.创建AO对象
2.找形参和变量声明,将变量和形参名作为AO属性名 ,值为undefined
3.将实参值和形参统一
4.在函数体里面找函数声明,值赋予函数体

2.
AO{
	a:undefined,
	b:undefined,
	c:undefined
}
3.
AO{
	a:1
	,b:undefined
	,c:undefined
	,d：function d(){}
}
AO{
	a:1 -> 3
	,b:2
	,c:0
	,d：function d(){}
}
*/
function test(a,b){
	console.info(a)//1
	c=0;
	var c;
	a=3;
	b=2;
	console.info(b)//2
	function b(){
	}
	function d(){}
	console.info(b);//2
}
test(1);


function test2(a,b){
	console.info(a)//1
	console.info(b)//undefined
	var b=234;
	console.info(b)//234
	a=123;
	console.info(a)//123
	function a(){}
	var a;
	b=345;
	var b= function (){}
	console.info(a);//123
	console.info(b);//function (){}
}
test2(1);
/*
创建AO对象 activation object 执行上下文
四部曲:

1.创建AO对象
2.找形参和变量声明,将变量和形参名作为AO属性名 ,值为undefined
3.将实参值和形参统一
4.在函数体里面找函数声明,值赋予函数体

2.
AO{
	a:undefined,
	b:undefined,
}
3.
AO{
	a:1 -> function a(){}
	,b:undefined
}
AO{
	a:1 -> function a(){} ->123
	,b:undefined -> 234 -> 345 -> function (){}
}
*/

/*
全局 go对象 global object
Go{
	a:function(){}
}
window == GO
*/
console.info(txt)//function txt(){}
var txt =123;
function txt(){

}


/*

*/
function trys(){
	var aoA = goB = 3;
	console.info(window.goB)
}
trys();
console.info(goB)
// console.info(aoA)



console.log(test3);//fn
function test3(test){
	console.info(test);//test(){}
	var test3=234;
	console.info(test3);//234
	function test(){}
}
test3(1)
var test3=123;


/*
就近原则
*/
global=100;
function fn(){
	console.info(global);//undefined
	global=200;
	console.info(global);//200
	var global=300;
}
fn();
var global;



function tests(){
	console.info(b);//undefined
	if(a){
		var b= 1000;
	}
	c=234;

}
var a;
tests();
a=10;
console.info(c);//234



console.info(bar());//11
function bar(){
	foo = 10;
	function foo(){

	}
	var foo = 11;
	return foo;
}





function bar2(){
	return foo;
	foo = 10;
	function foo(){

	}
	var foo = 11;
}
console.info(bar2());// function foo(){}





a=100;
function demos(){
	function e(){}
	arguments[0]=2;
	console.info('e:'+e+'<br/>');//2
	if(a){

		var b=123;
		function c(){}
	}
	var c;
	a=10;
	var a;
	console.info('b:'+b+'<br/>');//undefined
	f=123;
	console.info('c:'+c+'<br/>');// undefined
	console.info('a:'+a+'<br/>');//10
}
var a;
demos(1);
console.info('a:'+a+'<br/>');//100
console.info('f:'+f+'<br/>');//123



var str= undefined+1;
console.info(str)//NAN
var str= false+1;
console.info(str)//1
var str= null+1;
console.info(str)//1
var demo=false == 1;
console.info(demo)//false
if(typeof aa &&  -true +(+undefined)+''){ //"undefined" && "NaN" 字符串
	console.info('typeof aa &&  -true +(+undefined)+\'\'');//输出
}
if ('aa') {
	console.info('aa')
}
if(11+'11'*2 ==33){
	console.info('11+\'11\'*2 ==33');//输出
}
!!" "+!!""-!!false||console.info('能打印吗?')// true + false - false ||console.info('1')

var  x = 1;
if(function f(){}){
	x+=typeof (f)
}
console.info(x);
if(function f(){}){
	console.info(3333)
}
console.info(window.foo || (window.foo = 'bar'))




/*
作用域精解
运行期上下文:
	当函数执行时,会创建一个成为执行器上下文的内部对象。
一个执行期上下文定义了一个函数执行时的环境,函数每次执行时对应的执行上下文都是独一无二的,
所以多次调用一个函数会导致创建多个执行上下文,
当函数执行完毕,它所产生的执行上下文被销毁

查找变量:
	从作用域链的顶端依次向下查找


test.[[scope]]
每个JavaScript函数都是一个对象,对象中有些属性我们可以访问,但有些不可以,这些属性仅供JavaScript引擎存取
[[scope]]就是其中一个。
[[scope]]指的就是我们所说的作用域其中存储了运行其上下文的集合

作用域链:
	[[scope]]中所存储的执行期上下文对象的集合,这个集合呈链式链接,我们把这种链式链接叫做作用域链
*/


/*
创建
scopeA defined scopeA[[scope]] -> 0:GO{}
scopeA doing scopeA[[scope]]   -> 0:scopeA[scope] AO{}
								  1:GO{}

scopeB[[scope]]  defined scopeB[[scope]] -> 0:GO{}
scopeB[[scope]]  doing scopeB[[scope]] -> 0:scopeB[scope] AO{}
										  1:scopeA[scope] AO{}
										  2:GO{}
*/

function scopeA(){
	function scopeB(){
		var b = 234;
		a=666  //拿了a的引用然后改变了值
		global=111
	}
	var a = 123;
	scopeB();
	console.info(a);
	console.info(global);
}
var global =100;
scopeA();
/*
	执行上下文之后是怎么销毁的
	通过垃圾回收机制不定时去关闭的
	有点像递归
*/
/*
aa defined aa.[[scope]] -> 0:GO
aa doing aa.[[scope]]   -> 0:AO
						-> 1:GO

bb defined bb.[[scope]] -> 0:aaAO
						-> 1:GO
bb doing bb[[scope]]    -> 0:bbAO
						-> 1:aaAO
						-> 2:GO

cc defined cc[[scope]]  -> 0:bbAO
						-> 1:aaAO
						-> 2:GO
cc doing cc[[scope]]    -> 0:ccAO
						-> 1:bbAO
						-> 2:aaAO
						-> 3:GO
*/

function aa(){
	function bb(){
		function cc(){

		}
		cc();
	}
	bb();
}
aa();





/*
题目1
*/
/*
return b
demo 保存了b 导致 aaa()的作用域链不能被释放
闭包:
内部的函数被保存到外部就必须生成闭包   aaa()无法被释放
*/
function thisA(){
	function bbb(){
		var bbb = 234;
		console.info(aaa);
	}
	var aaa = 123;
	return  b;
}
var glob = 100;
thisA();

/*
题目2
*/
function aaaa(){
	var num =100;
	function b(){
		num ++;
		console.info(num)
		c();
	}
	function c(){
		console.info('我是functionCCC');
	}
	return b;
}
var demo= aaaa();
demo();//101
demo();//102

/*
当内部函数被保存到外部时,将会生成闭包.闭包会导致原有作用域链不释放,造成内存泄漏
闭包作用
	实现公有变量
		累加器
	可以做缓存(存储结构)
	可以实现封装,属性私有化
	模块化开发,防止污染全局变量

*/
/*累加器例子*/
function component(){
	var num= 100;
	function add(){
		num++;
		console.info(num);
	}
	function jian(){
		num --;
		console.info(num);
	}
	return [add,jian];
}
var myCom=component();
myCom[0]();
myCom[1]();

/*缓存例子*/
function eat(){
	var food = '';
	var foods = {
		eat:function(){
			console.info('i an eat food :'+food);
		},
		food:function(foodName){
			food=foodName
		}
	}
	return foods;
}

var luEat=eat();
luEat.food('banner');
luEat.eat();


/*
	立即执行函数
	只被执行一次, 数据初始化函数

	总结:此类函数没有声明,在一次执行过后即释放.适合做初始化工作
*/
var num=(function(a,b,c){
console.info('立即执行函数.执行完立即销毁')
console.info(a+b+c);
return a+b+c;
}(1,2,3))
console.info('立即执行函数:',num);
var num2=(function(a,b,c){
console.info('立即执行函数.执行完立即销毁222')
console.info(a+b+c);
return a+b+c;
})(1,2,3);
console.info('立即执行函数:',num2);

/*
只有表达式才能被执行符号执行
*/
// function test(){
// 	console.info(11)
// }();
function test(a,b){
	console.info(a+b)
}(1,2);
/*
这种写法test()名称被永久放弃
*/
var str=function test(){
	console.info(22)
}();
console.info(str);

/*
+，-,!,||,&&
*/
+ function test(){
	console.info('+ function teat()')
}();



/*
闭包
函数调用才进行调用函数
	当内部函数被保存到外部时,将会生成闭包.闭包会导致原有作用域链不释放造成内存泄露
*/
function testFun(){
	var arr=[];
	for(var i=0;i<10;i++){
		arr[i]=(function (){
			return i;
		}())
	}
	return arr;
}
var myArr=testFun();
for(var j=0;j<10;j++){
	console.info(myArr[j])
}

/*

*/
var demo;
function scopeC(){
	var abc = 100;
	function a(){
		console.info(abc);
	}
	demo = a
}

scopeC();
demo();

/*

*/
var f=(
	function f(){
		return '1'
	},
	function g(){
		return 2;
	}
)();
console.info(typeof f)

var ab=1;
if(function f(){}){
	ab += typeof f;
}
console.info(ab);
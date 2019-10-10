//编译过程
//预编译
//单线程和解析性语言(翻译一句执行一句)
/*
语法分析(通便扫描)
预编译(window上去将所有的window去挂在到)
解析性语言(翻译一句执行一句)
*/
// 预编译
/*
	函数声明整体提升到 window中
	变量 声明提升
*/
console.info(a);
function a(a){
	var a=123;
	var a=function(){
		console.info(1)
	}
	a();
}
var a=123;
/**
暗示全局变量
imply global
a =10;未经声明就直接赋值window所有 (window 就是全局的域)
全局上任何变量即使声明了也是window所有
window
**/
console.info(window.a == a)
var a= b = 123;
console.info('a',a,'b',b)

function test(){
	var c= d = 123;
	console.info('c',window.c)
	console.info('c',window.d)
}
test();
function test2(){
	var e=123;
}
test2()
console.info(window.e)

/*
预编译过程

四部曲
创建AO对象 Activation Object（执行其上下文）
AO{

}
找到形参和变量声明,将变量和形参作为AO属性名,值为undefined
AO{
	a:undefined,
	b:undefined
}
将实参值和形参统一
AO{
	a:1,
	b:function b(){},
	d:function d(){}
}
在函数体里找函数声明,值赋予函数体
AO{
	a:function a(){},
	b:function b(){},
	d:function d(){}
}


*/
function fn(a){
	console.log(a)
	var a=123;
	console.info(a);
	function a(){}
	console.info(a)
	function b(){}
	console.info(b)
	function b(){}
}
fn(1)


function fn2(a,b){
	console.info(a)//1;
	c=0;
	var c;
	a=3;
	b=2;
	console.log(b)//function b;
	function b(){}
	function d(){}
	console.info(b)//2
}
fn2(1)

function fn3(a,b){
	console.info(a)//function;
	console.info(b)//undefined;
	var b=234;
	console.info(b)//234;
	a=123;
	console.info(a)//123;
	function a(){

	}
	var a;
	b=234;
	var b=function (){};
	console.info(a)//123
	console.info(b)//function
}
fn3(1)


/*
全局的预编译
Go global Object
Go{
	a:123
}
window === Go
*/
var a=123;
function a (){}



console.info(test)//fn
function test(test){
	console.log(test)//fn;
	var test=234;
	console.info(test)//234;
	function test(){

	}
}
test(1);
var test =123;


/*
global
*/
global=100;
function fn4(){
	console.info(global)//undefined;
	global=200;
	console.info(global)//200;
	var global=300;
}
fn4();
var global;


function fn5(){
	console.log(b)//undefined;
	if(a){
		var b=100;
	}
	c=234;
	console.info(c)//234;
}
var a;
fn5();
a=10;
console.info(c)//234;

/*百度题目*/
/*
go{

}
*/
function bar(){
	return foo;
	foo=10;
	function foo(){

	}
	var foo=11;
}
/*
ao{
	foo:undefined;
}
ao{
	foo:fn;
}
*/
console.info(bar())//fn

/*
go{
	foo:11
}
*/
console.info(bar2());
function bar2(){
	foo=10;
	function foo(){

	}
	var foo =11;
	return foo
}
/*
1.

2.
*/
a=100;
function demo(e){
	function e(){}
	arguments[0]=2;
	console.info(e)//2;
	if(a){
		var b=123;
		function c(){

		}
	}
	var c;
	a=10;
	var a;
	console.info(b)//undefined;
	f=123;
	console.info(c)//undefined;
	console.info(a)//10;
}
var a;
demo(1);
console.info(a)//100;
console.info(f)//123;

var  str= false+1;
document.write(str)//1;
var demo=false==1
document.write(demo)//false;

if(typeof (a) && -true+(+undefined)+""){
	document.write('基础扎实')//进入
}
document.write('11'*2)//进入
if(11+'11'*2 ==33){
	document.write('基础扎实')//进入
}

console.info(!!" "+!!""-!!false||document.write('123'))

// var x=1;
// if(function f(){}){
// 	x+=
// }
if(window.foo||(window.foo='bar')){
	console.info(666)
}
console.info(window.foo||(window.foo='bar'))
// console.info(window.foo||window.foo='bar')报错
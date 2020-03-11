function foo(){
	bar.apply(null,arguments);
}
function bar(){
	console.info(arguments)//[1,2,3,4,5]
}
foo(1,2,3,4,5)

console.info(parseInt(3,0))//3
console.info(parseInt(3,2))//NaN

/*10进制
1 = 1
10 = 10
100 = 10^2
1000 = 10^3
10000 = 10^4
*/
console.info(typeof [],typeof null)//object object
/*
	string,object,number,boolean,undefined,function
*/

function b(x,y,z){
	arguments[2] = 10;
	console.info(arguments)
	console.info(z)//undefined
}
b();
var num = console.info((1,2));//2

var x = 1;
/*
function 变成表达式将忽略引用 转换为表达式 true
*/
if(function f(){}){
	x += typeof f;//f() 找不到了所以变成undefined
}
console.info(x);//1undefined
console.info(undefined == null)//true
console.info(parseInt('1a') == 1)//true
console.info(undefined === null)//false
function isNaNs(num){
	var ret = Number(num)
	if(ret+='' == 'NaN'){
		return true;
	}else{
		return false;
	}
}
isNaNs('abc')
console.info({} == {} )//false 对象指向不同

/*
	this
	1.函数预编译过程 this -> window
	2.全局作用域里this -> window
	3.call、apply可以改变函数运行时this指向
	4.obj.func(); func()里面的this指向obj
*/
/*1.函数预编译过程 this -> window*/
function  test0(c){
	//var this = Object.create(test.prototype);
	/*
		{
			__proto__:test.prototype
		}
	*/
	var a = 123;
	function b(){}
	/*2.全局作用域里this -> window*/
	console.info(this)//window          test0{}
	console.info(this.a)//undefined     undefined
}
test0(1)
/*
AO{
	arguments:[1]
	,this:window
	,c:1;
	,b:funciton(){}
	,a:undefined
}
*/
new test0();//test0()


var obj={
	name:function(){

	}
}
obj.name();//这里的obj 先指向了对象里面的方法




var name='222';
var a = {
	name:'111'
	,say:function(){
		console.info(this.name)
	}
}

var fun = a.say;
fun()////全局函数去执行指向window:222
a.say();//111
var b = {
	name:'333'
	,say:function(fun){
		/*
			this -> b
			将fun 搬进去
			a.say:function(){
				console.info(this.name)//222
			}
		*/
		fun();
	}
}
b.say(a.say);//222
b.say = a.say();//111
// b.say()//333


/*

arguments.callee
函数的引用
*/
function argumentsFun(){
	console.info(arguments.callee)
	console.info(arguments.callee == argumentsFun)
}
argumentsFun()

// 立即执行函数递归
var num = (function(n){
	if(n == 1){
		return 1;
	}
	return n * arguments.callee(n - 1);
}(20))


function test(){
	console.info(arguments.callee);
	function demo(){
		console.info(arguments.callee);
	}
	demo();
}
test();

/*
caller
*/
function test(){
	demo();
}
function demo(){
	console.info(demo.caller);
}
test();
/*
use strict
在标准模式下 arguments和caller 不给用
*/


/*

*/
var foo = 123;
function print0(){
	this.foo = 234;
	console.info(foo);
}
new print0();

var a = 5;
function test2(){
	a = 0;
	console.info(a); //0  0
	console.info(this.a);//5 undefined
	var a;
	console.info(a)//0 0
}
test2();
new test2();


function print1(){
	console.info(foo);//undefined
	var foo = 2;
	console.info(foo);//2
	// console.info(hello)//报错
}
print1();


/**/
function print2(){
	var marty = {
		name: 'lucas'
		,printName: function(){
			console.info(this.name);
		}
	}
	var test1 = {name:'test1'};
	var test2 = {name:'test2'};
	var test3 = {name:'test3'};
	test3.printName = marty.printName;
	var printName2 = marty.printName.bind({name:123});
	marty.printName.call(test1);//test1
	marty.printName.apply(test2);//test2
	marty.printName();//lucas
	printName2();//123
	test3.printName();//test3
}
print2();


var bar = {a:'002'};
function print3(){
	bar.a = 'a';
	Object.prototype.b = 'b';
	return function inner(){
		console.info(bar.a);// a
		console.info(bar.b);// b
 	}
}
print3()();


/*
克隆
*/
// var obj = {
// 	name:'abc'
// 	,age:123
// 	,sex:'female'
// 	,card:['visa','666',[1,2],{a:1,b:2}]
// 	,card2:[[6,6,6],{a:1,b:2}]
// }
// var obj1 = {}

// function clone(org,tag){
// 	org = org||{}
// 	for(val in tag){
// 		org[val] = tag[val];
// 	}
// }
// clone(obj1,obj)
// console.info(obj1)

/*
深度克隆
1.判断原始值
2.判断是数组还是对象
3.建立相应的数组或对象
4.
*/
var obj = {
	name:'abc'
	,age:123
	,name:'abc22'
	,sex:'female'
	,card:['visa','666',[1,2],{a:1,b:2}]
	,card2:{a:1,b:2}
}
var obj2 = {}


/*
跨域问题 时候 instanceof 会出现false  [] instanceof
*/
// function deepClone(tag,org){
// 	var tag = tag||{},
// 	arrStr = "[object Array]",
// 	toStr = Object.prototype.toString;
// 	for(val in org){
// 		if(org.hasOwnProperty(val)){
// 			if(typeof org[val] == 'object'){
// 				if (toStr.call(org[val]) == arrStr) {
// 					tag[val]=[];
// 				}else{
// 					tag[val]={};
// 				}
// 				deepClone(tag[val],org[val]);
// 			}else{
// 				tag[val] = org[val];
// 			}
// 		}
// 		// if(tag[val] instanceof Object){
// 		// 	if (tag[val] instanceof Array){
// 		// 		//数组
// 		// 		org[val] = new Array();
// 		// 		for(var i = 0; i < tag[val].length; i++){
// 		// 			org[val].push(tag[val][i])
// 		// 		}
// 		// 	}else{
// 		// 		console.info(222)
// 		// 		// 对象
// 		// 	}
// 		// }else{
// 		// 	org[val] = tag[val];
// 		// }
// 	}
// }
// deepClone(obj2,obj)
// console.info(obj2)

/*
深度克隆
1.判断原始值
2.判断是数组还是对象
3.建立相应的数组或对象
4.
*/
var obj = {
	name:'abc'
	,age:123
	,name:'abc22'
	,sex:'female'
	,card:['visa','666',[1,2],{a:1,b:2}]
	,card2:{a:1,b:2}
}
var obj2 = {}

function deepClone(org,tag){
	var tag = tag||{},
	type = "[object Array]",
	arr = Object.prototype.toString;

	for(val in org){
		if(org.hasOwnProperty(val)){
			if(typeof org[val] != 'object'){
				tag[val] = org[val];
			}else{
				if(arr.call(org[val])!=type){
					tag[val]={};
				}else{
					tag[val]=[];
				}
				deepClone(org[val],tag[val]);
			}
		}
	}
}
deepClone(obj,obj2);
console.info(obj2)
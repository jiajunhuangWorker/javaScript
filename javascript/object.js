/*
数组
*/

/*
对象
*/
var  mrDeng={
	name:'MrDeng'
	,age:40
	,sex:'male'
	,health:100
	,smoke:function(){
		console.info('i am smoke !!!');
		this.health--;
	},
	drink:function(){
		console.info('i an drink');
		this.health++;
	}
}
/*
增
*/
mrDeng.height=160+'cm'
/*
删
*/
delete mrDeng.name
/*
查
*/
console.info(mrDeng)
/*
改
*/
mrDeng.sex='renyao'
/*
不存在的属性就返回undefined
*/



/*
对象创建方法
1. var obj={} plainObject 对象字面量/对象直接量
2.构造函数
	1)系统自带的构造函数 new Object()  Array() Number()
	2) 自定义
*/
var obj = new Object();
	obj.name = '对象'
/*构造函数
	命名规则 大驼峰命名规则

	当new 之后
	隐式创建
	var this={
		name:''
		,height:''
		...
	}
	return this b
*/
function Car(){
	/*构造函数*/
	this.name = 'BMW';
	this.height = '1400';
	this.length = '4900';
	this.color = 'red';
	this.health = 100;
	this.run = function(){
		this.health --;
	}
}
var car=new Car();
var car1=new Car();

/*
模拟构造函数
*/
function Person(name,height){
	var that={};
	that.name=name;
	that.height=height;
	return that;
}
console.info(new Person('xiaoJun',18).name)

/*
包装类
*/
var num = new Number(123);
var str = new String('123');
var bol = new Boolean(1);

/*
原始值不能有属性和方法的！但是它会隐式转换 (包装类)
*/
var num = 4;
/*
new Number(4).len=3;
*/
num.len = 3;
/*
new Number(4).len = undefined delete(销毁)
*/
console.info(num.len)

/*
	string
*/
var  str='abcd';
str.length = 2;
console.info(str);

/*
	array
*/
var arr=[1,2,3,4];
arr.length=2;
console.info(arr)

var str = 'abc';
str += 1;
var test = typeof str;
if(test.length == 6){
	test.sign = '666';
}
console.info(test.sign)


 function Person(name,age,sex){
 	var a = 0;
 	this.name = name;
 	this.age = age;
 	this.sex = sex;
 	function sss(){
 		a++;
 		console.info(a);
 	}
 	this.say = sss;
 }
 var oPerson = new Person();
 oPerson.say();//1
 oPerson.say();//2

 var oPerson1 = new Person();
 oPerson1.say();//1



/*
题目
*/
var x = 1, y = z = 0;
function add(n){
	return n += 1;
}
y = add(x);//4
console.info(add(x))
function add(n){
	return n += 3;
}
z = add(x);//4
console.info(add(x))
console.info(x)
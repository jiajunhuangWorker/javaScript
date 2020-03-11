/*
继承
1.传统形式 ->原型链
	过多的继承了没用的属性
2.借用构造函数
	不能继承借用构造函数的原型
	每次构造函数都要多走一个函数
3.共享原型
	不能随便改动自己的原型
4.圣杯模式
*/

/*
1.传统形式
*/
Person.prototype.name='lucas';
function Person(){

}
var person = new Person();
Person1.prototype=person;
function Person1(){

}
var persons = new Person1();
console.info(persons.name)

/*
2.借用构造函数
*/
function Place(name,year){
	this.name = name;
	this.year = year;
}

function PlaceStrong(name,year,buileName){
	Place.call(this,name,year);
	this.buileName = buileName;
}
var gz= new PlaceStrong('GZ',1000,'GZT')
console.info(gz)

/*
共享原型
*/
Father.prototype.name = 'l';
function Father(){

}
function Son(){

}
function inherits(Target,Origin){
	Target.prototype = Origin.prototype;
};
inherits(Son,Father);
var son = new Son();
console.info(son)
// /*问题*/
Son.prototype.name2 = 'HAHA';
var ft = new Father();
console.info(ft)

/*
圣杯模式
*/
function Father2(){

}
function Son2(){

}
function inherit2(Target,Origin){
	function F(){

	}
	F.prototype = Origin.prototype;
	Target.prototype =  new F();
	Target.prototype.constuctor = Target;
	Target.prototype.uber = Origin.prototype;
}
inherit2(Son2,Father2);
var son2 = new Son2();
console.info(son2)
// /*问题*/
Son2.prototype.name2 = 'H2321312';

var ft2 = new Father2();
console.info(ft2)

/*
YH
F私有化
*/
function Father3(){

}
function Son3(){

}
var inherit = (function (){
	var F = function(){};
	return function (Target,Origin){
		F.prototype = Origin.prototype;
		Target.prototype =  new F();
		Target.prototype.constuctor = Target;
		Target.prototype.uber = Origin.prototype;
	}
}())

inherit(Son3,Father3);
var son3 = new Son3();
console.info(son3)
/*问题*/
Son3.prototype.name = 'HAdasda dasdasdasHA';
var ft3 = new Father3();
console.info(ft3)
/*
	闭包私有化
*/
function home(name,newHome){
	var home = '广州新房';//变量私有化,外部无法访问
	this.name = name;
	this.newHome = newHome;
	this.sellHome = function(){
		this.newHome = home;
	}
	this.changeHome = function(tag){
		home = tag;
	}
	this.sayHomeName = function(){
		console.info(newHome)
	}
}
var home = new home('贵州','贵州老房')



/*
命名空间
管理变量,防止污染全局,适用于模块开发
*/
var name = 'bcd';
var init = (function(){
	var name = 'abc';//变量私有化
	function callName(){
		console.info(name);
	}
	return function(){
		callName();
	}

}())

init();
/*
	模块化开发
*/
var home = {
	smoke : function(){
		console.info('smoke')
		return this;
	},
	drink : function(){
		console.info('drink')
		return this;
	}
}
home.smoke().drink();

/*
属性的标识方法

*/
var obj = {
	name1:'王'
	,name2:'王2'
	,name3:'王3'
	,say:function(num){
		return this['name'+num];
	}
}

/*
	对象的枚举
	obj.prop -> obj[prop]
*/
var obj = {
	name:'lu',
	age:123,
	sex:'male',
	height:180,
	width:75,
	names:{
		haha:111
	},
	__proto__:{
		lastName :'deng'
	}
}
for(var prop in obj){
/*
	hasOwnProperty排除原型:(__proto__)
	in 是否存在某个属性 包括继承的都能访问到
	instanceof  A instanceof B
	看A对象的原型链上 有没有 B的原型
*/

	if(obj.hasOwnProperty(prop)){
		console.info(prop,' ',obj[prop],' ',typeof prop)
		console.info(prop in obj)
	}
}

var arr = [] || {};
var obj = {};
 console.info(obj instanceof Array)
 console.info(arr instanceof Object)

console.info(Object.prototype.toString.call([]))
console.info(Object.prototype.toString.call(123))

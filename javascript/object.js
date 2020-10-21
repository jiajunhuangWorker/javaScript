/*
构造函数
对象中的属性,如果是一个函数也称该属性为对象的方法
1.用于创建对象的函数
2.构造函数

new 函数(参数)
构造函数 专门用于创建对象
1)函数名使用大驼峰命名法
2)构造函数内部,会自动创建一个新的对象,this 指向心创建的对象,并且自动返回新对象
3)构造函数中如果出现返回值,如果返回的原始类型,直接忽略,如果返回引用类型则直接返回引用结果
4)所有的对象,最终是通过构造函数创建的



*/
console.info(typeof Array)
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
var ps=new Person(1,2)
console.info(ps)
/*
包装类
JS为了增强原始类型功能为boolean,string,number 分别创建了构造函数
 如果语法上,将原始类型当作对象使用时,JS会自动在该位置利用对应的构造函数(使用一般的属性),创建对象来访问原始类型的属性

类：在JS中,可以认为,类就是构造函数

成年方法,实例方法 :通过new 创建出来的方法


静态属性,类属性 表示该属性是通过构造函数本身调用
Number.isNaN(静态方法)
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

// new.target
/*
通常用于判断某个函数是不是 new 创建出来的
*/
function User(){
	console.info(new.target)
	if(new.target == User){
		this.x = 11;
	}else{
		return {
			x:'11'
		}
	}
}

/*
函数的本质是对象
某些教程中,将构造函数称为构造器
所有的都西昂都是能通过关键字new 出现的 new 构造函数()

所有的函数都是通过new Function 创建

Function -> 产生函数对象 -> 产生普通对象Object Array String

由于函数本身就是对象,因此函数中能拥有各种属性
*/

var sum  = new Function("a","b","return a+b");
console.info(typeof sum);
console.info(sum(3,5));

function User(firstChild,lastChild){
	this.firstChild = firstChild;
	this.lastChild = lastChild;
	thif.name = this.firstChild +' '+this.lastChild;
}


/*
标准库(标准API)
库:liberary
API:应用程序标准接口 Application Programing Interface
标准:ECMAScript标准
*/
/*
Object
*/
console.info('new Object(null):',new Object(null),'new Object(undefined):',new Object(undefined),'new Object(1):',new Object(1),'new Object("22dasd"):',new Object("22dasd"))

var obj ={a:123,b:234,c:312312};

console.info('Object.keys:',Object.keys(obj))
console.info('Object.values:',Object.values(obj))
console.info('Object.entries:',Object.entries(obj))

/*实例和原型*/
console.info(obj.toString());
console.info(obj.valueOf() == obj)

/*arguments*/
function test2(a,b){
	arguments[0]=123;
	b = 666;
	console.info('a',a,'b',b)
	console.info(arguments)
}
test2(undefined,undefined,3,3,4)


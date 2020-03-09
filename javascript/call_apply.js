/*
homework
当前字符位的unicode >255 name字符长度为2
2.<=255 为1
*/
var str = '你好啊112233'
retuanByteL(str);
function retuanByteL(str){
	var count = str.length;
	for(var i = 0;i<str.length;i++){
		if(str.charCodeAt(i) > 255){
			count++;
		}
	}
	console.info(count);
}


/*
原型
	1.定义:原型是function对象的一个属性,它定义了构造函数制造出的对象的公告祖先.通过该构造函数产生的对象,可以继承该原型的属性和方法.
	原型也是对象
	2.利用原型特定点和概念,可以提取共有属性
	3.对象如何查看原型 -> 隐式属性__proto__
	4.对象如何查看对象的构造函数 -> constructor

原型
在创建的时候就有:Person.prototype = {} 祖先

*/
Person.prototype.name='hehe';
Person.prototype.say=function(){
	console.info('haha');
};
function Person(){
	this.say=function(){
		console.info('JSS');
	}
}
var person =new Person();
console.info(person.name)
var person1 =new Person();
console.info(person1.name)
person1.say();

/*
原型的应用
*/
Car.prototype.width = '100';
Car.prototype.height = '200';
function Car(name,color){
	this.name = name;
	this.color = color;
}
var car = new Car();
car.name = 'acb';
car.color = 'red';
console.info(car,car.width)
/*
原型的
增删改查
*/
/*
改
*/
Car.prototype.width=123;
console.info('car.width',car.width);
/*
增
*/
Car.prototype.add=12345;
/*
删
*/
delete Car.prototype.width;
console.info('car.width',car.width);

/*
第二种写法
*/
Car.prototype = {
	lunzi:5,
	old:5
}
var newCar=new Car();
console.info('car.old',car.old);
console.info('newCar.old',newCar.old);

console.info('Car.prototype:',Car.prototype)
console.info('car.constructor:',car.constructor)
console.info('Car.constructor:',Car.constructor)

Company.prototype.name='666公司';
function Company(){
	/*
	隐式创建
	var this = {
		__proto__ : Company.prototype
	}
	*/
}
var com=new Company();
var obj = {
	name:'222'
}
/*
修改了对象
*/
// com.__proto__ = obj;

/*
控制台打印
*/
console.info(com.name);//控制台 返回666公司
Company.prototype.name = '888';
/*
	原型改了
	原理:
	Company.prototype = {}
	__proto__ = Component.prototype
	Company.prototype = {}

*/
console.info(com.name)//888
Company.prototype = {
	name:'cherry'
}


/*
原型链继承
增删查改都是要本对象才能够操作
*/
Grand.prototype.name = 'deng';
function Grand(){

}
var grand = new Grand();

Father.prototype = grand;

function Father(){
	this.fortune={
		card:'card1'
	}
	this.num=100;
}
var father = new Father();

Son.prototype = father;
function Son(){
	this.hobbit = 'smoke'
	/*方法重写*/
	this.toString = function(){
		return 'aa';
	}
}
var son = new Son();
console.info(son)
son.fortune.card2='666';
console.info(father.fortune)
console.info('重写:',son.toString())
/*
增加
*/
son.num++;
console.info('son.num',son.num)
console.info('father.num',father.num)


/*
对象创建
*/
var obj = {};
var obj = new Object();
//var obj = Object.create(原型)
Animal.prototype.name = 'dog';
function Animal(){

}
var o = Object.create(Animal);
console.info(o)
console.info(Object.create(null))
/*
null和undeifned 没有原型

*/

/*
包装
*/
var num = 123;
num.toString();
//num.toString(); -> new Number(num).toString()
Number.prototype.toString = function(){}
/*
Number.prototype.__proto__ = Object.prototype
Object.prototype.toString = function(){}
*/


var obj = Object.create(null);
obj.toString = function(){
	return 'hellow!world';
}
document.write(obj);


/*
toFixed()
*/
for(var i = 0; i < 10; i ++){
	var num = Math.floor(Math.random()*100);
	console.info(num)
}

/*
可正常计算的范围  前16bit 和 后16bit
*/

/*
call 和apply
改变this指向
apply:传的参数形式不同
*/
function PlaceHome(name,year){
	/*
		使用call 后  this == obj
		obj.name = name
		obj.year = year
	*/
	this.name = name;
	this.year = year;
}
var createPlace = new Person('GZ',1000);
var oj = {}
PlaceHome.call(oj,'FS',200);
console.info('oj:',oj)

/*
call
*/
function People(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.say = function(){
		console.info(222)
	}
}
function Student(name,age,sex,tel,grade){
	// var this = {name,age,sex}
	People.call(this,name,age,sex);
	this.tel = tel;
	this.grade = grade;
}
var student = new Student('sunny','22','male',139,2017)
console.info(student)
// console.info(student.say())
/*
apply 传数组
*/
function People2(name,age,sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.say = function(){
		console.info(222)
	}
}
function Student2(name,age,sex,tel,grade){
	// var this = {name,age,sex}
	People.call(this,[name,age,sex]);
	this.tel = tel;
	this.grade = grade;
}
var student2 = new Student2('sunny','22','male',139,2017)
console.info(student2)
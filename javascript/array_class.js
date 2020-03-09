/*
类数组
1.可以利用属性名模拟数组的特性
2.可以动态的增长length属性
3.如果强行让类数组调用push方法,则会根据length属性值得位置进行属性的扩充
*/
function test(){
	console.info(arguments);
	// arguments.push(222) 不存在方法！这个叫类数组
}
test(1,2,3,4,5,6);

/*
总结
属性要为索引(数字)属性,必须有length属性,最好加上push
好处:
Array.prototype.push = function(tag){
	this[this.length] =tag;
	this.length++;
}
*/
var arr = {
	0:'a'
	,1:'b'
	,2:'c'
	,'length':3
	,'push':Array.prototype.push
	,"splice":Array.prototype.splice
}
console.info(arr);

var obj ={
	"2":"a"
	,"3":"b"
	,"length":2
	,"push":Array.prototype.push
}
obj.push('c');
obj.push('d');
console.info(obj)
/*
Array.prototype.push = function(tag){
	obj[obj.length] =tag;
	obj.length++;
}
*/


/*
封装
type typeof([]) --array
type typeof({}) --object
type typeof(function) --object
type typeof(new Number()) --number Object
type typeof(123) --number

入参一个参数
*/
window.type =function(){
	var str =typeof arguments[0];
	if(str == 'object'){
		str = Object.prototype.toString.call(arguments[0]);
		return str;
	}
	return str;
}
/*
数组去重
要求在原型链上编译
*/
Array.prototype.unique = function(){
	var arr=[];
	for(var i = 0;i<this.length;i++){
		if(arr.length!=0){
			wai:for(var j=0;j<arr.length;j++){
				if(arr.indexOf(this[i]) == -1){
					arr.push(this[i]);
				}else{
					break wai;
				}
			}
		}else{
			arr.push(this[0]);
		}
	}
	return arr;
}
console.info([2,3,4,5,4,3,2,1,6,98765432,2,2,'a','av','va','av','aaaa','va',0,0].unique());


/*
去重2
对象的键值对去重方法 哈希的写法
*/
Array.prototype.unique2 = function(){
	var temp = {},
	arr = [],
	len = this.length;
	for(var i = 0;i<len;i++){
		if(!temp[this[i]]){
			temp[this[i]] = 'abc';
			arr.push(this[i])
		}
	}
	return arr;
}
console.info([2,3,4,5,4,3,2,1,6,98765432,2,2,'a','av','va','av','aaaa','va',0,0].unique2());
/*
type
1.分两类 原始值
2.区分引用值
*/

/*
1.原始值
string,number,undefined,boolean,Null
2.引用值
	object,array,new Number(),function
区别:
	堆内存(存储在变量处的值是一个指针（point），指向存储对象的内存处)
		引用值
	栈内存(值直接存储在变量访问的位置)
		原始值
		不能有属性和方法
包装类
	原始值 -> 隐式转换为引用值 -> 调用方法 -> 销毁 -> 原始值
*/


/*
	对象
*/
var obj = {
	name:'lucas'
	,old:27
}
/*
Object.create(对象,属性)
*/
var obj2 = Object.create(obj);

/*
this
1.预编译 this -> window
2.谁调用谁就是 this
3.call 和apply 改变this 的指向
4.全局 this -> window
*/


/*
闭包
*/
var obj = {};
function a(){
	var aa = 111;
	function b(){
		console.info(aa)
	}
	obj.b = b();
}

/*
题目
*/
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

*/
(function(x){
	delete x;
	return x;
}(1))//1


var h = function a(){

}
console.info(typeof a());

/*
1.一个字符串只出现过的一次
2.
*/
String.prototype.onlyUnit =function(){
	var arr = this.split(''),obj = {},str='';
	for(var i = 0; i < arr.length; i++){
		if(!obj[arr[i]]){
			obj[arr[i]]=1;
		}else{
			++obj[arr[i]];
		}

	}
	for(val in obj){
		if(obj[val] == 1){
			str=val;
			break;
		}
	}
	return str;
}
var str= 'aeqweqiuyrsfjkdshfnmxnczewyrtydhf'.onlyUnit();
console.info(str)
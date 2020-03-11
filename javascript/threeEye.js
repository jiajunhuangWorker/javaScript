/*
三元运算符
	boolwan?'':''
*/

/*
array
对象定义方式
字面量,构造函数,自定义构造函数
数组
数组字面量
arr = [];
arr =new Array();
*/

//封装type 方法
var arr =[,,];
console.info(arr)
var arr = new Array(10);//length 为10
console.info(arr.length);


/*
es3.0(最基础) se5.0(加强) es6.0(提高新方法)
	ECMAScript DOM BOM 兼容都出在BOM
*/
/*
es3.0数组方法
改变原数组
push,pop,shift,unshift,sort,reverse
splice
不改变原数组
concat,join -> solit,toString,slice
*/

// push 在数组的最后一位添加
var arrs=[];
arrs.push(10);
arrs.push(11);
arrs.push(11,22,33,44,55,10);
// push
Array.prototype.push = function(){
	for (var i = 0; i <arguments.length; i++) {
		this[this.length] = arguments[i];
		return this.length;
	}
}
console.info(arrs);

// pop 在数组的最后一位剪切
Array.prototype.pop = function(){
	delete this[this.length-1];
}

//arrs.unshift() 在数组头添加
arrs.unshift(666);

// unshift
Array.prototype.unshift = function(){
	for (var i = 0; i < arguments.length; i++) {
		this[0] = arguments[i];
		return this.length;
	}
}

//shift 顶部去掉

//reverse 数组逆转

//splice 切割
// arr.splice(从第几位开始,截取多少长度,添加新数据)
arrs.splice(arrs.length,0,66)
console.info(arrs)


//sort() 排序
/*
1.必须写两个形参
2.必须存在返回值
1）当返回值为负数时,那么前面的数放在前面 降序 b-a
 2）当为正数时,那么后面的数在前面 升序 a-b
3）当为0时 不动
*/
// arrs.sort(function(a,b){
// 	if(a>b){
// 		return 1
// 	}else{
// 		return -1;
// 	}
// });
arrs.sort(function(a,b){
	return a - b
});
console.info(arrs)

/*
给一个有序的数组乱序
*/
var arr2 = [1,2,3,4,5,6,7];
Math.random()*10
arr2.sort(function(a,b){
	return Math.random()-0.5;
});
console.info(arr2)


var a = {
	name:'a'
	,old:10
}
var b = {
	name:'b'
	,old:40
}
var c = {
	name:'c'
	,old:5
}
var d = {
	name:'d'
	,old:62
}
var arr3 =[a,b,c,d];
arr3.sort(function(a,b){
	return a.old - b.old;
})
console.info(arr3)

var arr4 = ['da中中s','da中sd','d中','d中中中中sa','s中adasd','d中sad'];
arr4.sort(function(a,b){
	return a.length - b.length;
})
console.info(arr4)

function retByter(str){
	var num = str.length;
	for(var i = 0;i < str.length; i++){
		if(str.charCodeAt(i)>255){
			num++;
		}
	}
	return num;
}
arr4.sort(function(a,b){
	return retByter(a) - retByter(b);
})
console.info(arr4)


/*
不改变原型数组(不改变原来的数组)
concat,join -> split,toString,slice
*/
/*
concat 链接两个数组
*/
arrC=[123,222,333];
arrC2=[123,324,123];
console.info(arrC.concat(arrC2))

/*
slice 从该位开始截取,截取到该位
*/
console.info(arrC.slice(1));
console.info(arrC.slice(1,2));

/*
join 只能传字符串
*/
console.info(arrC.join('!'))

/*
split(从该位开始截取,截取到该位)
将字符转回数组
*/
var arrZ= arrC.join('-')
console.info(arrZ.split('-'))

// 字符串在栈内存存在
// 数组是以散列的结构
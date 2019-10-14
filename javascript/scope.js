// 1.匿名函数表达式
// 2.函数声明

function test(){

}
console.info(test.name)

function test2(){
	// arguments 实参列表
	console.info(arguments)
	if(test2.length>arguments.length){
		console.info('形参多')
	}else if(test2.length<arguments.length){
		console.info('实参多')
	}else{
		console.info('一样多')
	}
}
test2(23,323,44,23,23)

function sum(a,b){
	var result=0;
	for (val in arguments){
		result+=arguments[val]
	}
	console.info(result)
	console.info('a',a);
	console.info('arguments[0]=666',arguments[0]=666);
	console.info('a',a)

	b=2;
	console.info('arguments[1]',arguments[1]);

	/*return
		終止和返回值
	*/
}
sum(2)


/*
1.定义一组函数输入数字逆转并输出汉字形式
*/
function turnFont(num){
	return new String(num).split('').reverse().join('');
}
console.info(turnFont(123123));


/*2.*/
// var num=parseInt(window.prompt('input'));
function mul(n){
	/*n的阶乘
		递归符合思维模式
		递归效率慢
		2.找规律
		1.递归必须要有出口
		规律:n=n*(n-1)
	*/
	if(n==1 || n == 0){
		return 1;
	}

	return n*mul(n-1)
}

// console.info(mul(num))

/*
规律
fb(n) == fb(n-1)+fb(n-2)
*/

function fb(n){
	if(n == 1|| n==2){
		return 1;
	}
	return fb(n-1)+fb(n-2);
}
// var n=parseInt(window.prompt('input'));
// console.info(fb(n))

/*例子*/
function a(){
	function b(){
		var b=234;
		// var aa=444;
		// ao的引用
		aa=666;
	}
	var aa=123;
	b();
	console.info(aa);
}
var glob= 100;
a();
/*
a defined a.[[scope]] -->0:GO
a doing   a.[[scope]] -->0:aAO
						 1:GO

b defined b.[[scope]] -->0:aGO
						 1:GO

a doing   a.[[scope]] -->0:bAO
						 1:aAO
						 2:GO

*/

/*
1.闭包
*/
function a1(){
	function b(){
		var bbb=234;
		console.info(aaa);
	}
	var aaa=123;
	return b;
}
var glob=100;
var demo=a1();
demo();

/*
2.闭包
*/
function scope(){
	var num=100;
	function b(){
		num++;
		console.info(num)
	}
	return b;
}
var scopeDemo=scope();
scopeDemo()//101;
scopeDemo()//102;

/*
3.闭包
*/
function food(){
	var food='apple';
	var obj={
		eatFood:function(){
			if(food!=''){
				console.info('i am eating '+food)
				food='';
			}else{
				console.info('this is no food');
			}
		},setFood:function(foods){
			food=foods;
		}
	}
	return obj;
}

var food= food();
food.eatFood();
food.eatFood();
food.setFood('banner');
food.eatFood();

/*
1.立即执行函数
*/
function runJvascript(){
	var arr=[];

	for(var i= 0;i<10;i++){
		// 立即执行函数  立即执行函数也有自己的作用域
		(function(j){
			arr[j]=function(){
				console.info(j);
			}
		}(i))

	}
	return arr;
}

var myArr=runJvascript();
for(var j=0;j<10;j++){
	myArr[j]();
}
// function a(){
// 	console.info('函数声明')
// }() 会报错误
//只有表达式才能被执行,但是使用后会失去函数索引
var demo=function(){
	console.info('立马执行函数,执行完后会失去索引值')
}()
//函数声明
// function a(){
// 	console.info('函数声明')
// }() 会报错误

+function a(){
	console.info('运行符添加函数声明')
}()

/**/
function test(){
	var liCollection=document.getElementsByTagName('li');
	for(var i=0;i<liCollection.length;i++){
		// liCollection[i].addEventListener('click',function(event){
		// 	console.info(this)
		// })
		(function(j){
			liCollection[j].onclick=function(){
					console.info(j)

			}
		}(i))
	}
}
test()

function returnBytes(tag){
	var count,len;
	count=len=tag.length;
	for(var i=0;i<len;i++){
		if(tag.charCodeAt(i)>255){
			count+=2;
		}
	}
		console.info(count)
}

var f=(
	function f(){
		return '1';
	},
	function g(){
		return 2;
	}
	)();
	console.info(typeof f)

	var x=1;
	if(function f(){}){
		x+=typeof f;

	}
	console.info(x)
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
var num=parseInt(window.prompt('input'));
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

console.info(mul(num))

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
var n=parseInt(window.prompt('input'));
console.info(fb(n))


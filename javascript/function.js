/*
概念
偶合(重复代码)
高内聚(把所有重复代码都放到一个方法里面),弱偶合
*/

/*
函数声明
*/
function theFirstName(){
} 
console.info(theFirstName)//打印出方法体,java和c会打印出指针地址

/*命名函数表达式*/
var tt=function test(){
	console.info('test')
}
/*匿名函数表达式  --函数表达式*/
var tt2=function(){
	console.info('noNameTest')
}
/*
表达式和匿名表达式的区别
每个表达式都有一个name
*/
console.info('tt.name:',tt.name,'//将方法名打印出来');
console.info('tt2.name:',tt2.name,'//将声明函数打印出来');

/*
形参和实参
*/
/*形参*/
function sum(a,b){
	/*arguments -- []存放着实参列表*/
	console.info(arguments);
	/*判断形参个数*/
	console.info(sum.length);
	/*argunents的映射规则*/
	console.info('a',a)
	arguments[0]=666
	console.info('a',a)
	a=123;
	console.info('arguments[0]:',arguments[0])

	/*实参列表入参多少个就映射多少个*/
	b=888;
	console.info('arguments[1]:',arguments[1])
	/*函数的尾部隐式添加return 终止尾部*/
	console.info('return 之前');
	return 'return 返回值';
	console.info('return 之后');
}
/*实参*/
console.info(sum(1))

/*
写一个函数动物叫声
*/
function scream(animal){
	switch(animal){
		case 'dog':
		document.write('wang!');
		break;
		case 'cat':
		document.write('miao!');
		break;
		case 'dog':
		document.write('wang!');
		break;
	}
}
/*
输入数字逆转并输出汉子形式
*/
var str='';
function reverse(){
	var num=window.prompt('input');
	str='';
	for(var i=num.length-1;0<=i;i--){
		console.info(num[i])
		str+=getFont(num[i]);
	}
	console.info(str)
}

function getFont(num){
	switch(parseInt(num)){
		case 0:
		return '零';
		case 1:
		return '一';
		case 2:
		return '二';
		case 3:
		return '三';
	}
}
reverse();


/*
全局变量
*/
var a=123;
/*
局部变量
*/
function test(){
	var a=123;
}
function test2(){
	var a=234;
}

/*
输入一串数低于10位数的数字,输出这串数字的中文大写

3个为一组去读取

*/
var number = parseInt(window.prompt('请输入数字'));
var moneyUnit=['零','壹','贰','叁','肆','陆','柒','捌','玖','拾','百','千','万','亿'];
changeNum(number)
function changeNum(num){
	var resultVal = ''
	var set='';
	for(var i=0;i<String(num).length;i++){
		set=String(String(num).length-i-1);
		resultVal += unit(changeNumBigWrite(String(num)[i]),set,resultVal,String(num).length);
	}
	console.info(resultVal)
}
function changeNumBigWrite(num){
	switch(num){
		case '0':
		return moneyUnit[0];
		case '1':
		return moneyUnit[1];
		case '2':
		return moneyUnit[2];
		case '3':
		return moneyUnit[3];
		case '4':
		return moneyUnit[4];
		case '5':
		return moneyUnit[5];
		case '6':
		return moneyUnit[6];
		case '7':
		return moneyUnit[7];
		case '8':
		return moneyUnit[8];
		case '9':
		return moneyUnit[9];
		case '10':
		return moneyUnit[10];
	}
}
function unit(val,i,resultVal,lt){
	switch(i){
		case '0':
		return val+'元整';
		case '1':
		return val+'十';
		case '2':
		return val+'百';
		case '3':
		return val+'千';
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		if(lt>=8){
			if(i==7){
				return val+'千';
			}
			if(i==6){
				return val+'百';
			}else if(i == 5){
				return val+'十';
			}else if(i == 4){
				return val+'万';
			}
		}else if(lt>=7){
			if(i==6){
				return val+'百';
			}else if(i == 5){
				return val+'十';
			}else if(i == 4){
				return val+'万';
			}
		}else if(lt>=6){
			if(i == 5){
				return val+'十';
			}else if(i == 4){
				return val+'万';
			}
		}else if(lt==5){
			return val+'万';
		}
		case '9':
		case '10':
		case '11':
		case '12':
		if(lt>=12){
			if(i==11){
				return val+'千';
			}else
			if(i==10){
				return val+'百';
			}else if(i == 9){
				return val+'十';
			}else if(i == 8){
				return val+'亿';
			}
		}else if(lt>=11){
			if(i==10){
				return val+'百';
			}else if(i == 9){
				return val+'十';
			}else if(i == 8){
				return val+'亿';
			}
		}else if(lt>=10){
			if(i == 9){
				return val+'十';
			}else if(i == 8){
				return val+'亿';
			}
		}else if(lt==9){
			return val+'亿';
		}
	}
}
// function glq(num){
// 	switch(num){
// 		case '零百零十零':
// 		return num.replace('零百零十零','零');
// 		case '零百零十':
// 		return num.replace('零百零十','零');
// 		case '零百零':
// 		return num.replace('零百零','零');
// 		case '零十零':
// 		return num.replace('零十零','零');
// 	}
// }


var n=parseInt(window.prompt('阶乘'))
/*
递归找规律
递归找出口
先执行的最后执行完
*/
function mul(n){
	n=n||1;
	if(n == 1 || n == 0){
		return 1;
	}
	return n*mul(n-1);
}
var num=mul(n);
console.info(num)

/*
斐波拉数列
fb(n) == fb(n-1)+fb(n-2)
*/
var m=parseInt(window.prompt('斐波拉数列'))
function fb(n){
	n=n||1;
	if(n == 1 || n == 2){
		return 1;
	}
	return fb(n-1)+fb(n-2);
}
fb(m);

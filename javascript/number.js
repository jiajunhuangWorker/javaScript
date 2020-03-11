/*
'类型:',typeof number,string,boolean,object,undefined, function
*/
console.info('typeof null:',typeof null);
console.info('typeof 1:',typeof 1);
console.info('typeof 你好:',typeof '你好');
console.info('typeof false:',typeof false);
console.info('typeof []:',typeof []);
console.info('typeof {}:',typeof {});
console.info('typeof undefined:',typeof undefined);
console.info('typeof function (){}:',typeof function (){});

/*
	显式转换
*/
var num = Number('123')
console.info("Number('123')", '类型:',typeof num,' : ',num);
var num = Number(undefined)
console.info("Number(undefined)", '类型:',typeof num,' : ',num);
var num = Number(true)
console.info("Number(true)", '类型:',typeof num,' : ',num);
var num = Number(false)
console.info("Number(falae)", '类型:',typeof num,' : ',num);
var num = Number('a')
console.info("Number('a')", '类型:',typeof num,' : ',num);
var num = Number('NaN')
console.info("Number('NaN')", '类型:',typeof num,' : ',num);
var num = Number(null)
console.info("Number(null)", '类型:',typeof num,' : ',num);
	console.info('--------parseInt---------')
var num = parseInt('a');
console.info("parseInt('a')", '类型:',typeof num,' : ',num);
var num = parseInt('a123');
console.info("parseInt('a123')",'类型:',typeof num,' : ',num);
var num = parseInt('123a');
console.info("parseInt('123a')",'类型:',typeof num,' : ',num);
var num = parseInt('123.9');
console.info("parseInt('123.9')",'类型:',typeof num,' : ',num);
var num = parseInt(true);
console.info("parseInt(true)",'类型:',typeof num,' : ',num);
var num = parseInt(false);
console.info("parseInt(false)",'类型:',typeof num,' : ',num);
var num = parseInt(undefined);
console.info("parseInt(undefined)",'类型:',typeof num,' : ',num);
var num =  parseInt(101010,2)
console.info('parseInt(101010,2),类型:',typeof num,' : ',num)
var num =  parseInt(20,8)
console.info('parseInt(20,8),类型:',typeof num,' : ',num)
var num =  parseInt(20,16)
console.info('parseInt(20,16),类型:',typeof num,' : ',num)
	console.info('--------parseFloat---------')
var num =  parseFloat('20.3232.23dsda')
console.info('parseFloat(20.3232.23dsda),类型:',typeof num,' : ',num)
	console.info('--------String---------')
var num =  String('undefined')
console.info('String(undefined),类型:',typeof num,' : ',num)
	console.info('--------Boolean---------')
var num =  Boolean(123)
console.info('Boolean(123),类型:',typeof num,' : ',num)
var num =  Boolean(0123)
console.info('Boolean(0123),类型:',typeof num,' : ',num)
var num =  Boolean(-1)
console.info('Boolean(-1),类型:',typeof num,' : ',num)
var num =  Boolean(undefined)
console.info('Boolean(undefined),类型:',typeof num,' : ',num)
var num =  Boolean(NaN)
console.info('Boolean(NaN),类型:',typeof num,' : ',num)
var num =  Boolean(null)
console.info('Boolean(null),类型:',typeof num,' : ',num)
var num =  Boolean({})
console.info('Boolean({}),类型:',typeof num,' : ',num)
	console.info('--------toString---------')
var num = '123'.toString();
console.info('123.toString(),类型:',typeof num,' : ',num)
var num = '10'.toString(8);//转为8进制
console.info('10.toString(8),类型:',typeof num,' : ',num)
var num = parseInt("17",2);
console.info('parseInt("17",2),类型:',typeof num,' : ',num)
	num = num+''.toString(16);//转为16进制
console.info('num+"".toString(16),类型:',typeof num,' : ',num)
/*
isNaN
*/
num = isNaN(1)
console.info('isNaN(1),类型:',typeof num,' : ',num)
num = isNaN("1")
console.info('isNaN("1"),类型:',typeof num,' : ',num)
num = isNaN("abc")//Number(abc) ->NaN
console.info('isNaN("abc"),类型:',typeof num,' : ',num)
num = isNaN(null) //Number(null) ->0
console.info('isNaN(null),类型:',typeof num,' : ',num)
num = isNaN(undefined) //Number(undefined) ->NaN
console.info('isNaN(undefined),类型:',typeof num,' : ',num)
num = isNaN(+"ab") //Number(undefined) ->NaN
console.info('isNaN(+"ab"),类型:',typeof num,' : ',num)
num = isNaN(+"ab") //Number(undefined) ->NaN
console.info('isNaN(+"ab"),类型:',typeof num,' : ',num)
num = isNaN(-"ab") //Number(undefined) ->NaN
console.info('isNaN(-"ab"),类型:',typeof num,' : ',num)

/*
	隐式类型转换
	会先自动的使用Number方法去进行隐式的转换
	数字大于ascll码
*/
num = "1"+1
console.info('"1"+1,类型:',typeof num,' : ',num)
num = "1"-1
console.info('"1"-1,类型:',typeof num,' : ',num)
num = "1"*1
console.info('"1"*1,类型:',typeof num,' : ',num)
num = "1"/1
console.info('"1"/1,类型:',typeof num,' : ',num)
num = "1"%1
console.info('"1"%1,类型:',typeof num,' : ',num)
/*比较运算符*/
num = undefined>0
console.info('undefined>0,类型:',typeof num,' : ',num)
num = undefined<0
console.info('undefined<0,类型:',typeof num,' : ',num)
num = undefined==0
console.info('undefined==0,类型:',typeof num,' : ',num)
num = null>0
console.info('null>0,类型:',typeof num,' : ',num)
num = null<0
console.info('undefined<0,类型:',typeof num,' : ',num)
num = null==0
console.info('null==0,类型:',typeof num,' : ',num)
num = null==undefined
console.info('null==undefined,类型:',typeof num,' : ',num)
num = 1==="1"
console.info('1==="1",类型:',typeof num,' : ',num)
num = 1!=="1"
console.info('1!=="1",类型:',typeof num,' : ',num)


console.info('typeof (typeof (a)):',typeof (typeof (a)));



/*
作业
*/
console.log('---作业---');
console.log("typeof(a)",typeof(a));//undefined
console.log("typeof(undefined)",typeof(undefined));//undefined
console.log("typeof(NaN)",typeof(NaN));//number -> 0
console.log("typeof(null)",typeof(null));//object
var a='123abc';
console.log("typeof(typeof(a))",typeof(typeof(a)));//string
console.log("typeof(+a)",typeof(+a));//number
console.log("typeof(!!a)",typeof(!!a));//boolean
console.log("typeof(a+'')",typeof(a+''));//string
console.log("1=='1'",1=="1");//true
console.log("NaN==NaN",NaN==NaN);//false
console.log("NaN==undefined",NaN==undefined);//false
console.log("'11'+11",'11'+11);//1111
console.log("'1'===1",'1'===1);//false
console.log("parseInt('123abc')",parseInt('123abc'));//123
var num=123123.345789;
console.log(num+"toFixed(3)",num.toFixed(3));//123123.345
console.log(typeof typeof z)

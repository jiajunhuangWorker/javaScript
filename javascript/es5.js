// "use strict";
// try{

// }catch(e){

// }
/*
请求接口的时候数据没到的时候就用到try catch
	1.在try里面发生错误不会执行错误后的try里面的代码
	error.name的六种值对应的信息
	1.EvalError:eval()的使用与定义不一致
	2.RangeError 数值越界
	3.ReferenceError 非法或不能识别的引用数值(未定义变量,方法未定义)
	4.SyntaxError 发生语法解析错误(预编译的时候出现错误)
	5.TypeError 操作数类型错误
	6.URIError URI处理函数使用不当
*/
try{
	console.info('a');
	console.info('b');
	console.info(c);
}catch(e){// error error.message error.name ->error
	console.info('d');
	console.info(e.name+':'+e.message);
}

/*
ES5严格模式
es3.0

es5.0

基于es3.0的+es5.0的新增方法使用es3.0
es5.0严格模式 namees3.0和es5.0产生冲突的部分就是用es5.0

不在兼容es3的一些不规则语法,使用全新的es5规范

es5.0严格模式启动
1."use strict"可以写在最顶端或者写到方法体内
2.with(不断修改作用域链导致程序会很慢)不支持
3.arguments.callee，func.caller不支持
3.要使用var声明
4.局部的this 必须要赋值
5.拒绝重复属性和参数
6.eval('')不能使用 es3.0不能使用
*/

function test(){
	console.info(arguments.callee);
}
test();

/*
with
*/
var obj = {
	name:'obj666'
	,old:18
	,name:'222'
}
var name = 'window'
function test2(name){
	var name = 'scope';
	console.log(this)
	with(obj){
		console.info(name)//将当前的作用域指向最顶端obj
		console.info(old)
	}
}
test2();

/*
eval
独立的作用域
*/
var global =100;
function test3(){
	var global2 = 300;
	console.info(eval(global+global));
	console.info(eval('global+global2'));
}
test3();
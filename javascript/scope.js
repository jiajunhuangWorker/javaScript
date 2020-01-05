function test(){
	var a = 123;
	function demo(){
		var b=234;
		document.write(a);
	}
	demo();
	// document.write(b);
}
test();


/*
js运行三部曲:
	语法分析-->预编译-->解析性语言
javascript特点:
	单线程,解析性语言

预编译
	函数声明整体提升(函数创建的时候就在window中注册了)
	变量 声明提升

暗示全局变量(imply global)
	任何变量,如果未经声明就赋值,此变量就为全局对象所有
全局对象:window(window就是全局的域)

*/
window.a = 10;
console.info('a' , a);
var b = 234;
console.info('window.b' , window.b);


function a(){
	/*
		c未声明在window所有
	*/
	var d = c =123;

}
a();
console.info('window.c',window.c);
console.info('window.d',window.d);
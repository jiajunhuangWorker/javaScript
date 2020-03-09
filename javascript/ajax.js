/*
json是一种传输数据的格式以对象为样板,本质上就是对象,但是用途区别对象就是本地用的
JSON.parse() string -> json
JSON.stringify() json - >string

深度优先原则
按顺序去形成domTree

页面渲染
reflow  重排
	dom的增,删,改,查都会触发dom 树,位置变化,宽高变化,display:none ->block
offsetWidth，offsetLeft

repaint 重绘
	部分进行重新绘制 比如颜色
*/

/*
异步加载js(单线程 因为 它是等css和html 先加载完毕之后在渲染界面)
	同步加载

	异步加载
	defer(异步加载javascript)
	1.IE9浏览器以下才能够用,可以将代码写到内部 dom文档全部解析完才会被执行

	IE9以上
	2.async 异步加载,加载完就执行,async 职能加载外部脚本,不能把js写在script  标签里
    ajax -> asychronous javascript and xml

	3.按需加载 用户点之后才进行加载
*/

/*
3.ajax加载过程
*/
var script = document.createElement('script');
script.type = "text/javascript";
// script.src = '../javascript/index.js';
document.body.appendChild(script);


/*
load方法去判断事件触发
*/

script.onload=function(){
	console.info('加载完毕了包');
}
/*
ie 的兼容
readyState
*/
script.onreadystatechange=function(){
	if(script.readyState == "complete" || script.readyState == "loaded"){
		console.info('加载完毕了包');
	}
}

function loadScript(url,callback){
	var script = document.createElement('script');
	script.type = "text/javascript";

	if(script.readyState){
		script.onreadystatechange = function(){
			//ie
			if(script.readyState == "complete" || script.readyState == "loaded"){
				callback();
			}
		}
	}else{
		script.onload = function(){
			callback();
		}
	}
	script.src = url;
	document.head.appendChild(script);
}

loadScript('../javascript/demo.js',function(){
	test();
})


/*
js加载时间线
依据js生成开始js 开始做的事
1.创建document对象,开始解析web页面.开始解析web页面.解析html元素和他们的文本内容后添加ellement对象和text节点到文档中.阶段document.readyState = 'loading'
2.遇到link外部css,创建线程加载,并继续解析文档.
3.遇到script外部js,并且没有设置async,defer浏览器加载,并阻塞,等待js加载完成并执行该脚本,然后继续解析文档
4.遇到script外部js,并且设置有async,defer,浏览器创建线程加载,并继续解析文档.对于async属性的脚本,脚本加载完成后立即执行(异步禁止使用document.write())
5.遇到img等,先正常解析dom结构,然后浏览器异步加载src,并继续解析文档
6.当文档解析完成,document.readyState = 'interactive'
7.文档解析完成后,所有设置有defer的脚本会按照顺序执行.(注意与async的不同,但同样禁止使用document.write())
8.document对象触发DomContentLoaded事件,这也标志着程序执行从同步脚本执行阶段,转化为事件驱动阶段
9.当所有async的脚本加载完成并执行后,img等加载完成后,document.readyState='complete'，window对象触发事件
10.从此,以异步响应方式处理用户输入,网络事件等


*/
document.onreadystatechange = function(){
	console.info(document.readyState)
}
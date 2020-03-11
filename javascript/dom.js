/*
1.dom -> document object model
2.dom 定义了表示和修改文档所需要的方法.dom对象即宿主对象,
由浏览器厂商定义,用来操作html和xml功能的一类对象的集合.
也有人称dom是对html一级xml的标准编程接口
*/
/*题目1*/
// var div = document.getElementsByTagName('div')[0];
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.backgroundColor = 'red';
// var count = 0;
// div.onclick = function(){
// 	this.style.backgroundColor = (count++ % 2 == 1) ? 'green' : 'red';
// }
/*题目2*/
// var btn = document.getElementsByTagName('button');
// var div = document.getElementsByTagName('div');
// for(var i = 0; i < btn.length; i++){
// 	(function(num){
// 		btn[num].onclick=function(e){
// 			for(var i = 0; i < btn.length; i++){
// 				div[i].style.display ='none';
// 			}
// 			div[num].style.display ='block';
// 			this.className = 'active';
// 		}
// 	}(i))
// }
/*题目3*/
var div = document.createElement('div');
	document.body.appendChild(div)
	div.style.width = '100px';
	div.style.height = '100px';
	div.style.backgroundColor = '#fff';
	div.style.position = 'absolute';
	div.style.left = '0px';
	div.style.top = '0px';
	var speed = 1;
	// var timer = setInterval(function(){
	// 	speed += speed/20;
	// 	div.style.left = parseInt(div.style.left)+speed+'px';
	// 	if(parseInt(div.style.left)>200){
	// 		clearInterval(timer);
	// 	}
	// },20)

/*题目4*/
// var time = new Date().getTime();
document.onkeydown = function(e){
	switch(e.which){
		case 38:
		div.style.top =parseInt(div.style.top)-5+'px';
		break;
		case 40:
		div.style.top =parseInt(div.style.top)+5+'px';
		break;
		case 37:
		div.style.left =parseInt(div.style.left)-5+'px';
		break;
		case 39:
		div.style.left =parseInt(div.style.left)+5+'px';
		break;
	}
}
/*题目5*/
var ul = document.getElementsByTagName('ul')[0];
ul.onmouseover = function(e){
	var event = e || window.event;
	var tag = event.target || event.srcElement;
	tag.style.backgroundColor = "rgb(255,255,"+tag.getAttribute('img-data')+")";
	tag.setAttribute('img-data',parseInt(tag.getAttribute('img-data'))+6);
}


/*
1.对节点的增删查改
查看
document代表文档
document.getElementById()
元素id在ie8以下的浏览器,不区分id大小写,而且也返回匹配name属性的元素
定义在Document.prototype上,即Element节点上不能使用

document.getElementsByTagName()
//标签名
定义在HTMLDocument.prototype上,即非html中的document不能使用(xml document Element)

document.getElementsByName()
//需注意,只有部分标签name可生效(表单,表单元素,img,iframe)
方法定义在Document.prototype和Element.prototype上

document.getElementsByClassName()
类名->ie9以下的ie版本没有可以多个class一起

document.querySelector()
css选择器 在ie8以下的版本中没有,实时性问题(照片原理)

document.querySelectorAll()
css选择器 在ie8以下的版本中没有,实时性问题(照片原理)

getElementByClassName,querySelectorAll,querySelector 在Document.prototype,Element.prototype类中均有定义

Document.prototype上定义了documentElement属性,指代文档的根元素,在HTML文档中,他总是指代html元素
*/
console.info(document)
//query
var div = document.querySelector('div>span>strong');
console.info(div)
/*
dom生成的显示数组形式都是类数组的形式
*/


/*
遍历节点树
	1.parentNode 父节点(最顶端的parentNode为document)
	2.childNodes 子节点们
	3.firstChild 第一个子节点
	4.lastChild 最后一个子节点
	5.nextSibling 后一个兄弟节点previousSibling 前一个兄弟节点

基于元素节点树的遍历
	1.parentElement 返回当前元素的父元素节点(IE不兼容)
	2.children 只返回当前元素的元素子节点
	3.node.childElementCount ===node.children.length 当前元素节点的子元素节点个数(IE不兼容)
	4.firstElementChild 返回的是第一个元素节点(IE不兼容)
	5.lastElementChild  返回的是最后一个元素节点(IE不兼容)
	6.nextElementSibling/previousElementSibling 返回后一个/前一个兄弟元素
	IE10以上都基本支持
*/
var strong= document.getElementsByTagName('strong')[0];
console.info(strong.parentNode.parentNode.parentNode.parentNode);
var div= document.getElementsByTagName('div')[0];
console.info(div.childNodes)
console.info(div.firstChild)
console.info(div.lastChild)
console.info(div.nextSibling)
console.info(div.parentElement)
console.info(div.children)
console.info(div.firstElementChild)
console.info(div.lastElementChild)
console.info(div.nextElementSibling)
console.info(div.previousElementSiling)


/*
节点的四个属性
	nodeName(可读写)
	元素的标签名,以答谢形式表示,只读
	nodeValue(可读写)
	Text节点或Comment节点的文本内容,可读写 注释是Comment
	nodeType
	该节点的类型,只读
节点的类型
	元素节点             1
	属性节点             2
	文本节点             3
	注释节点             8
	document            9
	DocumentFragment    11

	attributes
	Element节点的属性集合
节点的一个方法
	Node.hasChildNodes() //判断存不存在孩子节点 文字分隔符都属于孩子节点
*/
console.info(div.childNodes[1].nodeName)
console.info(div.childNodes[1].nodeValue)
console.info(div.childNodes[1].nodeType)


function retElementChild(node){
	var arr={length:0,push:Array.prototype.push,splice:Array.prototype.splice},
	child = node.childNodes,
	len = child.length;
	for(var i = 0; i < length; i++){
		if(child[i].nodeType === 1){
			arr.push(child[i])
		}
	}
	return arr;
}


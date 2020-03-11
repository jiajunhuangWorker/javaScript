/*
读写元素css属性
	可读写行间样式,没有兼容性问题,碰到float这样的保留字属性,前面应加css
	float - cssFloat
	复合属性必须拆解,组合单词变成小驼峰式写法
	写入的值必须是字符串格式

查询计算样式(计算的样式只读,返回的计算样式的绝对值,没有相对单位,ie8和ie8以下不兼容)
	window.getComputedStyle(ele)获取当前的css 的所有样式默认值

ie9以下支持
	ele.currentStyle

*/
var div = document.getElementsByTagName('div')[0];
console.info(div.style)

/*
window.getComputedStyle第二个 参数选择伪造元素
*/
console.info(window.getComputedStyle(div,'before').width)
console.info(window.getComputedStyle(div,null));
console.info(window.getComputedStyle(div,null).width);
console.info(div.currentStyle);

function getStyle(elem,prop){
	if(window.getComputedStyle){
		return window.getComputedStyle(elem,null)[prop]
	}else{
		return elem.currentStyle[prop]
	}
}
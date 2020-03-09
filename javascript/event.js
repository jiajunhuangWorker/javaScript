/*
事件
	兼容性很好,但是一个元素的同一个事件上只能绑定一个事件
	基本等同于写在html行间上

2.obj.addEventListener(type,fn,false)
	IE9以下不兼容,可以为一个时间绑定多个处理
	div.addEventListener('事件类型','事件处理函数',boolean)

3.obj.attachEvent(type,fn)
		程序this 指向window
*/
var div = document.getElementsByTagName('div')[0];
console.info(div);
div.onclick = function(){
	console.info('我和57行打配合')
}
div.addEventListener('click',function(){
	console.info(222)
},false)
div.addEventListener('click',function(){
	console.info(111)
},false)


var liList = document.getElementsByTagName('li');
for(var i = 0; i < liList.length; i++){
	(function(num){
		liList[num].onclick=function(){
			console.info(i)
			console.info(num)
		}
	}(i))
}
/*
处理函数
*/
function addEvent(elm,event,handle){
	if (elm.addEventListener) {
		elm.addEventListener(event,handle,false)
	}else if(elm.attachEvent){
		elm.attachEvent('on'+event,function(){
			handle.call(elm)
		})
	}else{
		elm['on'+event] = handle;
	}
}

/*
解除事件处理程序
	ele.onclick = false/''/null
	ele.removeEventListener(type,fn,false)
	ele.detachEvent('on'+type,fn);
	若绑定匿名函数,则无法解除
*/
// div.onclick = false;
div.removeEventListener('click',function(){},false);


/*
sublime ctrl+d 选中相同标签

事件处理模型
事件冒泡
事件捕获

触发顺序,先捕获后冒泡
*/

/*
事件冒泡
结构上嵌套关系的元素冒泡
自子元素捕获取至父元素
*/
var fq = document.getElementsByClassName('fq')[0];
var son = document.getElementsByClassName('son')[0];
var son2 = document.getElementsByClassName('son2')[0];

fq.addEventListener('click',function(){
	console.info('fqBubbling')
},false);
son.addEventListener('click',function(){
	console.info('sonBubbling')
},false);
son2.addEventListener('click',function(){
	console.info('son2Bubbling')
},false);

/*
事件捕获
传递的顺序和冒泡的相反
自父元素捕获取至子元素
ie没有事件捕获
*/

fq.addEventListener('click',function(){
	console.info('fqCapture')
},true);
son.addEventListener('click',function(){
	console.info('sonCapture')
},true);
son2.addEventListener('click',function(){
	console.info('son2Capture')
},true);

/*
取消冒泡
	IE9以下不能用
IE浏览器
	e.cancelBubble=true
*/
fq.addEventListener('click',function(e){
	e.stopPropagation();
	console.info(22)
})

function stopBubble(event){
	if(event.stopPropagation){
		return event.stopPropagation();
	}else{
		return event.cancelBubble=true;
	}
}

/*
阻止默认事件
	e.preventDefault();
	IE浏览器
	e.returnValue=false
*/
document.oncontextmenu = function(e){
	console.info(11)
	e.preventDefault();
	return false;
}
function cancelHandler(event){
	if(event.preventDefault){
		return event.preventDefault();
	}else{
		return event.returnValue=false;
	}
}


/*
事件对象
	event
ie浏览器
	window.event

事件源
	event.target
	event.srcElement

*/
/*
事件委托写法
*/
var  ul = document.getElementsByTagName('ul')[0];
ul.onclick = function(event){
	var e = event || window.event;
	var tag = e.target || e.srcElement;
	console.info(tag.innerText);
}

var drop = document.getElementsByClassName('drop')[0];
var disX,disY;
/*
	仅在IE支持
	用来监听浏览器当前元素的事件
	drop.setCapture();
	释放浏览器的当前元素的事件
	drop.releaseCapture();
*/
drop.onmousedown = function(e){
	var e = e || window.event;
	disX = e.pageX - parseInt(drop.style.left);
	disY = e.pageY - parseInt(drop.style.top);
	drop.onmousemove = function (e){
		var e = e || window.event;
		drop.style.left = (e.pageX-disX)+'px';
		drop.style.top = (e.pageY-disY)+'px';
	}
	drop.onmouseup = function(){
		drop.onmousemove = null;
	}
}

/*
onmousedown,onmouseup,contextmenu(鼠标右键),

用button区分区分鼠标的按键 0/1/2
mousedown,mouseup
*/
var div = document.getElementsByTagName('div')[0];

div.addEventListener('mousedown',function(e){
	console.info(e.button)
},false)
div.addEventListener('mouseup',function(e){
	console.info(e.button)
},false)
/*
dom3 标准规定click 只能触发左键不能触发右键
onclick = onmousedown+onmouseup
*/

var firstTime = 0,lastTime = 0,key = false;
document.onmousedown = function(){
	firstTime = new Date().getTime();
}
document.onmouseup = function(){
	lastTime = new Date().getTime();
	if(lastTime - firstTime < 300){
		key = true;
	}
}
document.onclick = function(){
	if(key){
		console.info('click')
		key = false;
	}
}


/*
键盘类事件
keydown,keyup，keypress
执行顺序
keydown>keypress>keyup

*/
/*
移动端
	touchstart
	touchmove
	touchend
*/
document.onkeypress = function(e){
	console.info('keypress');
	console.info(String.fromCharCode(e.charCode))
}
document.onkeydown = function(e){
	console.info('keydown');
	console.info(e.charCode)
}
document.onkeyup = function(){
	console.info('keyup');
}
/*
keydown 和keypress 区别
keydown(which)
	所有的键盘类事件
	charCode 是默认0
keypress
	所有的字符串都能监听(区分大小写)
	charCode 是有值

假设双键 例如shift+a
	keydown
*/



/*
文本类
	oninput
*/
var input = document.getElementsByTagName('input')[0];
input.oninput = function(){
	console.info('oninput',this.value);
}
input.onchange =function(){
	console.info('onchange',this.value);
}
input.onfocus =function(){
	console.info('onfocus',this.value);
}
input.onblur =function(){
	console.info('onblur',this.value);
}

/*
scroll

*/
window.onscroll =function(){
	console.info(window.pageXOffset,'',window.pageYOffset);
}
/*
fiexd
IE6没有这个定位
fiexd:原来的top+可视的位置
*/

/*
load
效率慢
renderTree=domTree+cssTree
domTree(解析)

*/
window.onload = function(){
	//全部页面加载完毕之后才进行执行
}
/*
滚动条滚动距离
IE9以下不兼容
window.pageXOffset/pageYOffset
IE9以下兼容
document.body.scrollLeft
document.body.scrollTop
document.documentElement.scrollLeft
document.documentElement.scrollTop
*/
console.info('IE9以下不兼容X',window.pageXOffset,'IE8以下支持X:',document.body.scrollLeft,'IE8以下ElementX',document.documentElement.scrollLeft);
console.info('IE9以下不兼容Y',window.pageYOffset,'IE8以下支持Y:',document.body.scrollTop,'IE8以下ElementY',document.documentElement.scrollTop);

/*
兼容ie8 获取滚动条的位置
*/
function getScrollOffset(){
	if(window.pageXOffset){
		return {
			X:window.pageXOffset
			,Y:window.pageYOffset
		}
	}else{
		return {
			X:document.documentElement.scrollLeft+document.body.scrollLeft
			,Y:document.documentElement.scrollTop+document.body.scrollTop
		}
	}
}
console.info(getScrollOffset())

/*
可视性窗口尺寸
IE9一下不兼容
window.innerWidth/innerHeight

IE9以下兼容
标准模式下
document.documentElement.clientWidth/clientHeight
怪异模式下
document.body.clientWidth/clientHeight
*/
console.info('width',window.innerWidth,'height',window.innerHeight)
console.info('document.documentElement.clientWidth',document.documentElement.clientWidth,'document.documentElement.clientHeight',document.documentElement.clientHeight)
console.info('document.body.clientWidth',document.body.clientWidth,'document.body.clientHeight',document.body.clientHeight)
/*判断标准模式
CSS1Compat(标准模式)
BackCompat(怪异模式)
*/
console.info(document.compatMode)

function getViewportOffset(){
	if(window.innerWidth ){
		return {
			W:window.innerWidth
			,H:window.innerHeight
		}
	}else{
		 if(document.compatMode == 'CSS1Compat'){
			return {
				W:document.documentElement.clientWidth
				,H:document.documentElement.clientHeight
			}
		}else{
			return {
				W:document.body.clientWidth
				,H:document.body.clientHeight
			}
		}
	}
}
console.info(getViewportOffset())

/*
查看元素的几何尺寸
IE
	width和height 是不存在
返回的结果不是实时的 静态的
*/
var div = document.getElementsByTagName('div')[0];
var div2 = document.getElementsByTagName('div')[1];
var info = div.getBoundingClientRect();
console.info('获取当前的方块的四个角的信息:',info);
console.info('div.offsetWidth padding 计算进去',div.offsetWidth)
console.info('div.offsetHeight padding 计算进去',div.offsetHeight)

/*
查看元素位置
对于无定位父级的元素,返回相对文档的坐标.
对于有定位父级返回相对于最近的有定位的父级的坐标
不管是margin/position 生成的都会按照父级去进行定位 横向和纵向的距离
*/
console.info('div.offsetLeft',div.offsetLeft)
console.info('div.offsetTop',div.offsetTop)

console.info('div2.offsetLeft',div2.offsetLeft)
console.info('div2.offsetTop',div2.offsetTop)

/*
返回最近的有定位父级
*/
console.info(div2.offsetParent)


/*
window

scroll(x,y)、scrollTo(x,y)//会跳到某个当前位置

scrollBy(x,y)//会进行累加
*/
window.onload=function(){
	window.scrollTo(0,200);
}
// setInterval(function(){
// 		window.scrollBy(0,10);
// },100)
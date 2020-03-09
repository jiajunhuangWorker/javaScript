/*
构造函数
         (Document.prototype)
document.HTMLDocument.prototype
HTMLDocument.prototype={
	__proto__:Document.prototype
}
*/
HTMLBodyElement.prototype.abc

console.info(Document)
/*
选择所有的标签
*/
console.info(document.getElementsByTagName('*'))
// 获取整个dom
console.info(document.documentElement)


/*
1.封装函数,返回元素e的第n层祖先元素节点
*/
function retParent(elem,n){
	while(elem && n){
		elem = elem.parentElement;
		n --;
	}
	return elem;
}
var i = document.getElementsByTagName('i')[0];

/*
2.封装函数,返回元素e的第n个兄弟元素节点,n为正,返回后面的兄弟元素节点,n为负返回前面的n为0 返回自己
*/

/*
3.
*/
Element.prototype.myChildren = function(){
	var child = this.childNodes;
	var len = child.length;
	var arr = [];
	for(var i = 0;i < len; i++){
		if(child[i].nodeType == 1){
			arr.push(child[i])
		}
	}
	return arr;
}
var div =document.getElementsByTagName('div')[0]



/*
增
	document.createElement()
	document.createTextNode()
	document.createComment()
	document.createDocumentFragment();
插
	PARENTNODE.appendChild()
	PARENTNODE.insertBefore(a,b)
删
	parent.removeChild()
	child.remove()
替换
	parent.replaceChild(new,origin)
*/

/*
增
	document.createElement()
	document.createTextNode()
	document.createComment()
	document.createDocumentFragment();
*/
var str = document.createElement('div');
str.innerHTML = 123;
document.body.appendChild(str);

var dom= document.createElement('div')//创建元素节点
console.info(dom);

var txt = document.createTextNode('文本节点');//创建文本节点
console.info(txt);

var zhushi = document.createComment('我是注释');
console.info(zhushi)

/*
插
	PARENTNODE.appendChild()//剪切操作
	PARENTNODE.insertBefore(a,b)
*/

document.body.appendChild(txt)
document.body.appendChild(dom)
document.body.appendChild(zhushi)

var strong = document.createElement('strong');
var div  = document.getElementsByTagName('div')[0];
var span  = document.getElementsByTagName('span')[0];
div.insertBefore(strong,span);


/*
删
	parent.removeChild()//剪切出来
	child.remove()//真正销毁
*/
var strongs= document.getElementsByTagName('strong')[0];
div.removeChild(strong);
// div.remove();

/*
替换
	parent.replaceChild(new,origin)
*/
div.replaceChild(strong,span)

/*
ELement节点的一些属性
 innerHTML
 innerText(火狐不兼容)/textContent(l老版本的IE不好使)
*/
div.innerHTML = 'innerHTML整个函数都会被覆盖 整个都是html结构';
console.info(div.innerText)

/*
Element 节点的一些方法
	ele.setAttribute
	ele.getAttribute
*/
div.setAttribute('class','hellow')
console.info(div.getAttribute('class'))
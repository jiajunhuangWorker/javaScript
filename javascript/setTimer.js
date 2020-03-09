/*
1.封装函数 insertAfter(),功能类似于inserBefore();
	先判断兄弟节点如果有兄弟就在兄弟前面添加如果兄弟不存在就用appendChild
*/
Element.prototype.inserAfter = function(targetNode,afterNode){
	var beforeNode = afterNode.nextElementSibling;
	if(beforeNode == null){
		this.appendChild(targetNode);
	}else{
		this.insertBefore(targetNode,beforeNode);
	}
}
var div = document.getElementsByTagName('div')[0];
var b = document.getElementsByTagName('b')[0];
var span = document.getElementsByTagName('span')[0];
var p = document.createElement('p');
div.inserAfter(p,b);
div.inserAfter(p,span);


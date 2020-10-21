/*
变量声明
*/
var a;
a=100;

// console.info(a);
/*
单一声明模式
*/
var a,b,c,d,e;
/*
命名规则:
	1.开头是英文字母,_,$开头
	2.变量名可以包括英文字母,_,$,数字
	3.不可以用系统的关键字,保留字作为变量名
*/

/*
基本语法
由值来判断原始值或者引用值
值类型-数据类型
不可改变的原始值(stack栈数据)
number,boolean,string,undefined,null(覆盖使用)
原始值存放的地方是stack(栈)
先进后出
栈内存之间的关系是拷贝的关系
*/
var a=10;
var b=a;
a=20;
console.info('	原始值: ',b)


/*
基本语法
js语句基本规则
语句后面要用分号结束;
js语法错误会引发后续代码终止，但不会影响其他js代码块
书写格式要规范'=+/-'两边都应该有空格
*/

/*
引用值(heap堆数据)
array,object,function
栈内存是存放堆内存地址(引用),堆 内存是存放数据
*/
var arr=[1];
var arr1=arr;
arr.push(2);
console.info('	引用值: ',arr);

var  arr=[1,2];
var arr1=arr;
arr=[1,3];
console.info('	arr1:',arr1);

/*
js错误分为两种
1.低级错误(语法解析错误)
先通篇去进行的扫描html然后在进行解析
2.逻辑错误(标准错误,情有可原)
*/
var a=10;
console.info(a);
var b=20;
console.info(b);

/*
js运算操作符
'+'
1.数学运算,字符串连接
2.任何数据类型加字符串都等于字符串

'-','*','/','%',"=","()"
NaN(not a number)
infinity(正无穷)
-infinity(负无穷)

优先级'='最弱,"()"优先级较高
"++","--","+=","-=","/=","*=","%="
*/
var dobulePlusElementA=10;
var dobulePlusElementB=20;
dobulePlusElementA=++dobulePlusElementA;
console.info(dobulePlusElementA);

var dobulePlusElementZ=10;
var dobulePlusElementC=++dobulePlusElementZ - 1 + dobulePlusElementZ++;
console.info('	---'+dobulePlusElementC + '	' + dobulePlusElementZ)

var javascriptA = 10;
javascriptA+=10+1;
console.info('&nbsp;&nbsp;javascriptA: ',javascriptA);

var a = (10 * 3 - 4 / 2 + 1) % 2;//1
	console.info('<br/>');
	console.info('a++:',a);// 2
	b=3;
	b %= a + 3;	//3
	console.info('<br/>');
	console.info('++a',++a);
	console.info('<br/>');
	console.info('a++:',a++);// 2
	console.info('<br/>');
	console.info('--b:',--b);//2
	var a= 123,b=234,c=null;
	c=a;
	a=b;
	b=c;
	console.info(a,b);

	var a = 123, b = 234;
	a = b+a;
	b = a-b;
	a = a-b;
	console.info(a,b)

// 原始类型当对象使用
console.info(parseInt(103,2))

//得到最小值到最大值区间随机数
function getRandom(min,max){
	return Math.floor(Math.random()*(max+1 - min ) + min)
}

var a = 1.323231312
console.info(a.toPrecision())

//Strig
var str1 ='abc\
bcd'
var str2 =`abc\
	bcd
	你好啊大苏打阿萨`;

console.info(str1)
console.info(str2)

// 静态成员
var str ='';
for(var i = 65;i<65+26;i++){
	str += String.fromCharCode(i);
}
console.info(str);

console.info(String.fromCharCode(Infinity));

//实例成员
var n="abcdef";
console.info(n)
console.info('n.charAt:',n.charAt(0))
console.info('n.charCodeAt:',n.charCodeAt(0))
console.info('n.includes',n.includes('ac'))
console.log('n.endsWith',n.endsWith('c'))

var hour=2,minute = 8,second = 20;
// 时分秒
console.info(`${hour.toString().padStart(2,"0")}\:${minute.toString().padStart(2,"0")}\:${second.toString().padStart(2,"0")}`);

console.info(n.repeat(3))
console.info('n=',n);
console.info('n.slice(1,3)',n.slice(1,3))
console.info('n.slice(3,1)',n.slice(3,1))
console.info('n.slice(-3,-1)',n.slice(-3,-1))
console.info('n.substring(1,3)',n.substring(1,3))
console.info('n.substring(3,1)',n.substring(3,1))
console.info('n.substring(-3,-1)',n.substring(-3,-1))
console.info('n.substr(1,3)',n.substr(1,3))
console.info('n.substr(3,1)',n.substr(3,1))
console.info('n.substr(-3,-1)',n.substr(-3,-1))

console.info('n.split("")',n.split(""))
console.info('n.split("")',n.split("").join("!"))


// homeWork
/*
1.找到某个字符串中出现最多的字符,打印出字符和它的出现次数
2.hello world -> HelloWorld
3.指定长度 随机数字
4.字符串顺序重新升序
5.身份证用户年月日和性别保存到对象
*/
var str ={
	str:'',
	component(){
		var strL=this.str.split(''),obj={},result={name:'',num:''};
		strL.filter(function(val){
			if(typeof obj[val] == 'undefined' && val != " "){
				obj[val] = 1;
			}else{
				obj[val]+=1;
			}
		})
		Object.keys(obj).forEach(function(key){
			if(result.num == ''){
				result={
					name:key,
					num:obj[key]
				};
			}else{
				if(obj[key]>result.num){
					result={
						name:key,
						num:obj[key]
					};
				}
			}
		})
		console.info(result)
		return result;
	},
	getTranStr(){
		var keep='',result='';
		this.str.split('').filter(function(a,b){
			if(b == 0){
				keep=a;
				result+=keep.toUpperCase();
				console.info(result)
			}else if(a !=" "){
				if(this.str.str.charAt(b-1)!=" "){
					result += a;
				}else{
					keep=a;
					result+=keep.toUpperCase();
				}
			}
		})
		console.info(result);
		return result;
	},
	getRandomStr(len){
		var str=[],result="";
		for(var i= 48;i<=122;i++){
			if (i!=58&&i!=59&&i!=60&&i!=61&&i!=62&&i!=63&&i!=64&&i!=91&&i!=92&&i!=93&&i!=94&&i!=95&&i!=96) {
				str.push(String.fromCharCode(i))
			}
		}
		console.info(str)
		for(var i=0;i<len;i++){
			var getVal =str[parseInt(Math.round(Math.random()*str.length))];
			if(getVal){
				result+=getVal;
			}else{
				result+='a';
			}
		}
		return result;
	},
	getValSort(){
		var val =[];
		this.str.split("").filter(function(value) {
			if(value!=" "){
				val.push(value);
			}
		});
		val.sort(function(a,b){
			return a.charCodeAt() - b.charCodeAt()
		})
		console.info(val)
		return val
	},
	sfz(){
		var oj = {
			birthYear:null,
			birthMonth:null,
			birthDay:null,
			gender:null
		}
		oj['birthYear']=this.str.substring(6,10);
		oj['birthMonth']=this.str.substring(10,12).indexOf('0')? this.str.substring(10,12):this.str.substring(11,12);
		oj['birthDay']=this.str.substring(12,14).indexOf('0')? this.str.substring(12,14):this.str.substring(13,14);
		oj['gender']=this.str.slice(this.str.length-2,this.str.length-1) % 2 ===0? "女":"男";
		console.info(oj)
	}
}

str.str = 'ab c a a c  zscc  cass wew z';
str.component();
str.getTranStr();
str.getRandomStr(5);
str.getValSort()
str.str ="524713199712220054";
str.sfz();

/*
1.找到某个字符串中出现最多的字符,打印出字符和它的出现次数
2.hello world -> HelloWorld
3.指定长度 随机数字
4.字符串顺序重新升序
5.身份证用户年月日和性别保存到对象
*/
var MyFun={
	getTopFreqInArray:function(arr){
		var valArr =Array.from(arr),records={},result;
		for(var i=0; i<valArr.length;i++){
			var n = valArr[i];
			if(records[n]){
				records[n]++;
			}else{
				records[n]=1;
			}
		}
		for(var prop in records){
			if(!result || records[prop] > result.num){
				result = {
					val:prop,
					num:records[prop]
				}
			}
		}
		console.info(result)
		return result;
	},
	strTurn(str){
		var result="",empties=" \t\r\n";
		for(var i=0;i<str.length;i++){
			if(!empties.includes(str[i])){
				if(empties.includes(str[i - 1])||i === 0){
					result +=str[i].toUpperCase();
				}else{
					result +=str[i];
				}
			}
		}
		console.info(result)
		return result;
	},strTurn2(str){
		var result="",empties=" \t\r\n";
		result =str.split(" ").filter(function(item){
			return item.length>0;
		}).map(function(item){
			return item[0].toUpperCase()+item.substring(1).toLowerCase();
		}).join('');
		console.info(result);
		return result;
	},
	strRedom(len){
		var tpl = "",result = "";
		for(var i=65;i<65+26;i++){
			tpl +=String.fromCharCode(i)
		}
		for(var i=97;i< 97+26;i++){
			tpl +=String.fromCharCode(i)
		}
		for(var i=48;i<48+10;i++){
			tpl+=String.fromCharCode(i)
		}
		for(var i=0;i<len;i++){
			result+=tpl[this.getRandom(0,tpl.length-1)];
		}
		console.info(result);
		return result;
	},
	getRandom(min,max){
		return Math.floor(Math.random()*(max+1-min)+min);
	},
	getSort(str){
		return Array.from(str).sort().join('');
	},sfz(str){
		return {
			birthYear:str.s
		}
	}
}
MyFun.getTopFreqInArray('ab c a a c  zscc  cass wew z');
MyFun.strTurn('ab c a a c  zscc  cass wew z');
MyFun.strTurn2('ab c a a c  zscc  cass wew z');
MyFun.strRedom(6);
MyFun.sfz(524713199712220054)
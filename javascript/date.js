var dd=new Date();
console.info(dd);
console.info('今天几号:',dd.getDate());
console.info('今天周几:',dd.getDay()+1);
console.info('今年几月份:',dd.getMonth()+1);
console.info('今年:',dd.getFullYear());
console.info('分钟:',dd.getMinutes());
console.info('秒钟(记录当前创建对象那一刻的时间):',dd.getSeconds());
console.info('1970年~现毫秒数(计算机的纪元时间  当前时刻到纪元时间的毫秒数  计算机通过距离纪元时间去转换为现在的时间):',dd.getTime());


console.info('时间的set方法和判断现在时间点去进行比较');

/*
	定时器
*/
var firstTime = new Date().getTime();
var times = setInterval(function(){
	var lastTime = new Date().getTime();
	// console.info('setInterval误差:',lastTime - firstTime);
	firstTime = lastTime;
	clearInterval(times)
},1000);

var time1 = setInterval(function(){
	var lastTime = new Date().getTime();
	// console.info('setInterval误差:',lastTime - firstTime);
	firstTime = lastTime;
	clearInterval(time1)
},1000);
// console.info('time1:',time1,'time:',time);

var t = setTimeout(function(){
	console.info('a')

},1000);
clearTimeout(t)
console.info('t:',t);


/*
时间
*/
var m=0,s=0;
var min = document.getElementsByTagName('input')[0];
var ser = document.getElementsByTagName('input')[1];
var time=setInterval(function(){
	s++;
	if(s == 60 && m < 4){
		s = 0;
		m++;
		min.value = m;
		if(m == 3){
			clearInterval(time);
		}
	}
	s< 10 ? ser.value = '0'+s : ser.value = s;

},1000)

/*
date
*/
console.info(Date());
console.info(new Date(1000));

/*
实例成员
*/
console.info('new Date().getDate()',new Date().getDate());
console.info('new Date().getUTCDate()',new Date().getUTCDate());
console.info('new Date().getDay()',new Date().getDay());
console.info('new Date().getFullYear()',new Date().getFullYear());
console.info('new Date().getHours()',new Date().getHours());
console.info('new Date().getMinutes()',new Date().getMinutes());
console.info('new Date().getSeconds()',new Date().getSeconds());
console.info('new Date().getMilliseconds()',new Date().getMilliseconds());
console.info('new Date().getUTCDate()',new Date().getUTCDate());
console.info('new Date().getUTCDate()',new Date().getUTCDate());


/*
turn date Object
*/
function getDateString(date){
	var year = date.getFullYear().toString().padStart(4,"0"),
		month = (date.getMonth()+1).toString().padStart(2,"0"),
		day = date.getDate().toString().padStart(2,"0"),
		hour = date.getHours().toString().padStart(2,"0"),
		min = date.getMinutes().toString().padStart(2,"0"),
		second = date.getSeconds().toString().padStart(2,"0");
		return `${year}-${month}-${day} ${hour}:${min}:${second}`;
}
console.info(getDateString(new Date()))

/*
homework
1.编写一个函数 返回一个友好的日期字符串格式
2.给定用户的生日 计算该用户的年龄
3.根据系统当前的月份 输出这一个月每一天的星期六
*/
var times ={
	getFulTime(date){
		var year = date.getFullYear().toString().padStart(4,"0");
		 month = (date.getMonth()+1).toString().padStart(2,'0'),
		 day = date.getDate().toString().padStart(2,'0'),
		 hour = date.getHours().toString().padStart(2,'0'),
		 min = date.getMinutes().toString().padStart(2,'0'),
		 second = date.getSeconds().toString().padStart(2,'0');
		 return `${year}-${month}-${day} ${hour}:${min}:${second}`;
	},
	getOld(time){
		var tt = time+'',result = null;
		var nowTime = new Date().valueOf(),brithday = new Date(document.getElementById('brithdayTime').value).valueOf();
		result = nowTime - brithday;
		if (result > 0) {
			console.info(new Date(result).getFullYear() - 1970)
			return new Date(result).getFullYear() - 1970
		}
	},
	getSturday(){
		var date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth(),
		getdateL = new Date(year,month+1,0).getDate(),
		arr = [];
		for (var i = 1; i <= getdateL; i++) {
			if(new Date(date.setFullYear(year,month,i)).getDay() == 6){
				arr.push(i)
			}
		}
		console.info(arr)
	}
	
}
times.getFulTime(new Date())
times.getSturday()

/*
2.给定用户的生日 计算该用户的年龄
*/
console.info(myFun.getAge(1992,2,29));
console.info(myFun.getDaysToBirthday(10,21))
console.info(myFun.getDay('',2020,2))
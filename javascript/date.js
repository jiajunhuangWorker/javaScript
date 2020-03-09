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
	console.info('setInterval误差:',lastTime - firstTime);
	firstTime = lastTime;
	clearInterval(times)
},1000);

var time1 = setInterval(function(){
	var lastTime = new Date().getTime();
	console.info('setInterval误差:',lastTime - firstTime);
	firstTime = lastTime;
	clearInterval(time1)
},1000);
console.info('time1:',time1,'time:',time);

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
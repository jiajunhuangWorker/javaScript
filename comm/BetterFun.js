var myFun = {
	isLeap(year){
		 return year % 4 == 0 ? true : false
	}
	,getAge(year,month,day){
		/*
			计算年龄
		*/
		var cur = new Date();
		var dec= cur.getFullYear() - year;
		//处理闰年
		if(month == 2 && day === 29 && !this.isLeap(cur.getFullYear())){
			day =28;
		}

		var birthday =  new Date(cur.getFullYear(),month-1,day);

		console.info(birthday)
		if (birthday > cur) {
			dec--;
		}
		return dec;
	}
	,getDaysToBirthday(month,day){
		/*
		再过多少天就生日
		*/
		var now = new Date(),thisYear = now.getFullYear();
		var birthday  =new Date(thisYear,month-1,day);
		if(birthday < now){
			birthday.setFullYear(now.getFullYear()+1);
		}
		var timeDec = birthday - now;
		var days = timeDec / (24*60*60*1000);
		return Math.ceil(days)
	}
	,getFulTime(date){
		/*
		打印年月日
		*/
		var year = date.getFullYear().toString().padStart(4,"0");
		 month = (date.getMonth()+1).toString().padStart(2,'0'),
		 day = date.getDate().toString().padStart(2,'0'),
		 hour = date.getHours().toString().padStart(2,'0'),
		 min = date.getMinutes().toString().padStart(2,'0'),
		 second = date.getSeconds().toString().padStart(2,'0');
		 return `${year}-${month}-${day} ${hour}:${min}:${second}`;
	}
	,getDay(getDate,year,month){
		var curDate = null,now = new Date(),nowYear = now.getFullYear(),nowMon = now.getMonth()+1,day = null,dayL=new Date(nowYear,nowMon,0).getDate(),getDateArr=[];
		if(typeof year != 'undefined' && typeof month != 'undefined' &&  (typeof getDate == 'undefined'||getDate != '')){
			day = new Date(year,month-1,getDate).getDay();
			dayL = new Date(year,month,0).getDate();
			nowYear = year;
			nowMon =month;
		}else if(typeof year != 'undefined' && typeof month != 'undefined' && (typeof getDate == 'undefined'||getDate == '')){
			day = 1;
			dayL = new Date(year,month,0).getDate();
			nowYear = year;
			nowMon =month;
		}else if(typeof getDate != 'undefined'){
			day = getDate;
		}else{
			day = 1;
		}
		for (var i = 1; i <= dayL; i++) {
			console.info(day)
			console.info(`${nowYear}年${nowMon}月${i}日:星期${this.getWeekDay(nowYear,nowMon-1,i)}`);
		}
	}
	,getWeekDay(year,mon,day){
		var d =new Date(year,mon,day).getDay();
		switch(d){
			case 0:
			return "日";
			case 1:
			return "一";
			case 2:
			return "二";
			case 3:
			return "三";
			case 4:
			return "四";
			case 5:
			return "五";
			case 6:
			return "六";
		}

	}



}
  
/*
* @Author: 刘红霞
* @Date:   2018-01-19 11:18:07
* @Last Modified by:   刘红霞
* @Last Modified time: 2018-01-20 15:40:52
*/
// 设置变量
var weather;
var city;
// 请求太原天气情况
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	// 跨域
	dataType:"jsonp",
	type:"get",
	// 获取到obj的数据
	success:function(obj){
		weather=obj.data.weather;
		// 输出obj中的数据
		// console.log(weather);
	}
})
// 请求城市
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	// 跨域
	dataType:"jsonp",
	type:"get",
	// 获取到obj的数据
	success:function(obj){
		city=obj.data;
		// console.log(obj.data);
	}
})

    // 渲染数据
function updata(){
    var cityName=document.getElementsByClassName("header")[0];
    cityName.innerHTML=weather.city_name;
	// 获取温度
	var currentTemperature=document.getElementsByClassName("wendu")[0];
	currentTemperature.innerHTML=weather.current_temperature+"°";
	//获取天气状况
	var currentCondition=document.getElementsByClassName("tianqi")[0];
	 currentCondition.innerHTML=weather.current_condition;
	// 今天最高温和最低温
	 var dat_high_temperature=document.getElementById("dat_high_temperature")
	    dat_high_temperature.innerHTML=weather.dat_high_temperature;

	 var dat_low_temperature=document.getElementById("dat_low_temperature")
	    dat_low_temperature.innerHTML=weather.dat_low_temperature;
	var day_condition=document.getElementById("day_condition")
	day_condition.innerHTML=weather.day_condition;
	// 今天天气图片
	var dat_weather_icon_id=document.getElementById("dat_weather_icon_id");
	// console.log(dat_weather_icon_id)
	dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png);`;
	//明天最高温和最低温
	var tomorrow_high_temperature=document.getElementById("tomorrow_high_temperature")
	    tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
	var tomorrow_low_temperature=document.getElementById("tomorrow_low_temperature")
	    tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature;
	//明天天气条件
	var tomorrow_condition=document.getElementById("tomorrow_condition")
	tomorrow_condition.innerHTML=weather.tomorrow_condition;
	//明天天气图片
	var tomorrow_weather_icon_id=document.getElementById("tomorrow_weather_icon_id");
	tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png);`;
	// con2里面
	for(var i in weather.hourly_forecast){
		// 创建父元素div
		var now=document.createElement("div")
		// 给父元素div加样式
		now.className="now";
	 //获取now的父元素
		var nowp=document.getElementById("now");
	  //把now插入到父元素中
	    nowp.appendChild(now);

	    var now_time=document.createElement("h2");
	    now_time.className="now_time";
	    now_time.innerHTML=weather.hourly_forecast[i].hour+":00";
	    now.appendChild(now_time);
	    //插入图片
	    var now_icon=document.createElement("div");
	    now_icon.className="now_icon";
	    now_icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png);`;
	    now.appendChild(now_icon);
	   
	    var now_temperature=document.createElement("h3");
	    now_temperature.className="now_temperature";
	    now_temperature.innerHTML=weather.hourly_forecast[i].temperature+"°";
	    now.appendChild(now_temperature);    
		}

	// con3
	for(var j in weather.forecast_list){
		// 创建父元素div
		var recent=document.createElement("div")
		// 给父元素div加样式
		recent.className="recent";
	  //获取now的父元素
		var recentp=document.getElementById("recent");
	  //把now插入到父元素中
	    recentp.appendChild(recent);
      // 
     // for(var j in weather.forecast_list){
     //  	console.log(weather.forecast_list[j].date.substring(5,7));
     //  	console.log(weather.forecast_list[j].date.substring(8));
     //  }
        var recent_time=document.createElement("div");
	    recent_time.className="recent_time";
	    recent.appendChild(recent_time);

        var month=document.createElement("span");
	    month.className="month";
	    month.innerHTML=weather.forecast_list[j].date.substring(5,7)+"/";
	    recent_time.appendChild(month);
        
        var day=document.createElement("span");
	    day.className="day";
	    day.innerHTML=weather.forecast_list[j].date.substring(8);
	    recent_time.appendChild(day);
        


	    // recent_wea
	    var recent_wea=document.createElement("h2");
	    recent_wea.className="recent_wea";
	    recent_wea.innerHTML=weather.forecast_list[j].condition;
	    recent.appendChild(recent_wea);
	    //recent_pic
	   var recent_pic=document.createElement("div");
	    recent_pic.className="recent_pic";
	    recent_pic.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png);`;
	    recent.appendChild(recent_pic);
	    // recent_high
	    var recent_high=document.createElement("h3");
	    recent_high.className="recent_high";
	    recent_high.innerHTML=weather.forecast_list[j].high_temperature;
	    recent.appendChild(recent_high);  	    
	    var recent_low=document.createElement("h4");
	    recent_low.className="recent_low";
	    recent_low.innerHTML=weather.forecast_list[j].low_temperature+"°";
	    recent.appendChild(recent_low);  
	    var recent_wind=document.createElement("h5");
	    recent_wind.className="recent_wind";
	    recent_wind.innerHTML=weather.forecast_list[j].wind_direction+"°";
	    recent.appendChild(recent_wind);  
	    var recent_level=document.createElement("h5");
	    recent_level.className="recent_level";
	    recent_level.innerHTML=weather.forecast_list[j].wind_level+"级";
	    recent.appendChild(recent_level);  
	   }
	   var header=document.getElementsByClassName("header")[0];
	   var city_box=document.getElementsByClassName("city_box")[0];
	   header.onclick=function(){
	   	$(".text").val("");
	   	$(".button").html("取消");
	   	// 使隐藏页面显示 对应前面display:none
	   	city_box.style="display:block";
	   }


	   // 渲染城市
	   for (var k in city){
	   	// console.log(k);
	   	var cityp=document.getElementById("city");
	    var title=document.createElement("h1");
	    title.className="title";
	    title.innerHTML=k;
	    cityp.appendChild(title);

	    var con=document.createElement("div");
	    con.className="con";
	   for(var y in city[k]){
	         // console.log(y);
	         var erji=document.createElement("div");
	         erji.className="son";
	         erji.innerHTML=y;
	         con.appendChild(erji);
	     }
	   cityp.appendChild(con);
	   	   }
}
function AJAX(str){
	$.ajax({
	url:`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`,
	// 跨域
	dataType:"jsonp",
	type:"get",
	// 获取到obj的数据
	success:function(obj){
		weather=obj.data.weather;
		// 输出obj中的数据
		// console.log(weather);
		updata();
		$(".city_box").css({"display":"none"});
	}
})
}

 //当页面加载完成加载的代码
window.onload=function(){
	updata();
	$(".son").on("click",function(){
		var cityh=this.innerHTML;
		AJAX(cityh);
	})
   // 当input获取焦点时，button变确认
   // focus是获取焦点
   // html设置或改变元素的内容
   $(".text").on("focus",function(){
      $(".button").html("确认");
   })
   // 操作按钮
   var button=document.getElementsByClassName("button")[0];
   button.onclick=function(){
   	// 获取botton中的内容
   	var btn=this.innerHTML;
   	if(btn=="取消"){
   		var city_box1=document.getElementsByClassName("city_box")[0];
   		city_box1.style="display:none";
   	}
    else{
    	var str1=document.getElementsByClassName("text")[0].value;
    	for(var i in city){

    		for(var j in city[i]){
    		if(str1==j){
    			AJAX(str1);
    			return;
    		}	
    		}
        }
    	alert("没有该城市气象信息");
   	}
  }
}

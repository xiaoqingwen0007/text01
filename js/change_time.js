var format = function(time, format){
	var t = new Date(time);
	var tf = function(i){return (i < 10 ? '0' : "") + i};
		return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
		switch(a){
		case 'yyyy':
		return tf(t.getFullYear());
		break;
		case 'MM':
		return tf(t.getMonth() + 1);
		break;
		case 'mm':
		return tf(t.getMinutes());
		break;
		case 'dd':
		return tf(t.getDate());
		break;
		case 'HH':
		return tf(t.getHours());
		break;
		case 'ss':
		return tf(t.getSeconds());
		break;
		}
	})
}
function formatDate(now,con){
  var dd=new Date(now)     
  var year=dd.getFullYear();     
  var month=dd.getMonth()+1;     
  var date=dd.getDate();     
  var hour=dd.getHours();
  var minute=dd.getMinutes();     
  var second=dd.getSeconds();
  if(hour<10){
  	hour="0"+hour
  }
  if(minute<10){
  	minute="0"+minute
  }
  if(second<10){
  	second="0"+second
  }
  if(con=="day"){
  	return year+"-"+month+"-"+date
  }
  if(con=="sec"){
  	return hour+":"+minute+":"+second
  }
  if(con=="all"){
  	return year+"-"+month+"-"+date+" "+hour+"-"+minute+"-"+second
  }
       
}
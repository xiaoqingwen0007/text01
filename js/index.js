
//添加底部按钮
$(".footer").html(
	'<div class="index_line">'
		+'<button>送水泵房PLC</button>'
		+'<button>加氯PLC</button>'
		+'<button>加药PLC</button>'
		+'<button>脱泥PLC</button>'
		+'<button>高低压后台</button>'
		+'<button>反冲洗泵房PLC</button>'
	+'</div>'
	+'<div class="water_line">'
		+'<button>送水泵房</button>'
		+'<button>提升泵房</button>'
		+'<button>趋势</button>'
		+'<button>报警</button>'
		+'<button>报表</button>'
		+'<button>返回</button>'
	+'</div>'
	+'<div class="fan_line">'
		+'<button>反冲洗泵房</button>'
		+'<button>滤池</button>'
		+'<button>趋势</button>'
		+'<button>报警</button>'
		+'<button>报表</button>'
		+'<button>返回</button>'
	+'</div>'
)
//底部点击切换按钮
$(".index_line button").eq(0).on("click",function(){
	$(".footer").find("div").hide();
	$(".water_line").show()
	$("iframe").attr("src","assembly/water/songShui.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("送水泵房")
})
$(".index_line button").eq(5).on("click",function(){
	$(".footer").find("div").hide();
	$(".fan_line").show();
	$("iframe").attr("src","assembly/fanChong/fanChong.html")
	$("body").css("background","#b1b1b1")
	$(".title_center").text("反冲洗泵房")
})
$(".water_line button").eq(5).on("click",function(){
	$(".footer").find("div").hide();
	$(".index_line").show()
	$("iframe").attr("src","assembly/water/songShui.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("送水泵房")
})
$(".fan_line button").eq(5).on("click",function(){
	$(".footer").find("div").hide();
	$(".index_line").show()
	$("iframe").attr("src","assembly/water/songShui.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("送水泵房")
})
//加氯PLC
$(".index_line button").eq(1).on("click",function(){
	$("iframe").attr("src","assembly/jiaLv.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("加氯间")
})
//加药PLC
$(".index_line button").eq(2).on("click",function(){
	$("iframe").attr("src","assembly/jiaYao.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("加药间")
})
//脱泥PLC
$(".index_line button").eq(3).on("click",function(){
	$("iframe").attr("src","assembly/tuoNi.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("脱泥机房")
})
//高低压后台
$(".index_line button").eq(4).on("click",function(){
	$("iframe").attr("src","assembly/gaoDiYa.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("高低压后台")
})

//送水泵房
$(".water_line button").eq(0).on("click",function(){
	$("iframe").attr("src","assembly/water/songShui.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("送水泵房")
})
//提升泵房
$(".water_line button").eq(1).on("click",function(){
	$("iframe").attr("src","assembly/water/tiSheng.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("提升泵房")
})
//送水趋势
$(".water_line button").eq(2).on("click",function(){
	$("iframe").attr("src","assembly/water/SongQuShi.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("历史曲线")
})
//送水报警
$(".water_line button").eq(3).on("click",function(){
	$("iframe").attr("src","assembly/water/songBaoJing.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("报警信息")
})
//送水报表
$(".water_line button").eq(4).on("click",function(){
	$("iframe").attr("src","assembly/water/songBaoBiao.html")
	$("body").css("background","#ccecff")
	$(".title_center").text("报表")
})

//反冲洗泵房
$(".fan_line button").eq(0).on("click",function(){
	$("iframe").attr("src","assembly/fanChong/fanChong.html")
	$("body").css("background","#b1b1b1")
	$(".title_center").text("反冲洗泵房")
})
//反冲洗滤池
$(".fan_line button").eq(1).on("click",function(){
	$("iframe").attr("src","assembly/fanChong/lvChi.html")
	$("body").css("background","#b1b1b1")
	$(".title_center").text("滤池")
})
//反冲洗趋势
$(".fan_line button").eq(2).on("click",function(){
	$("iframe").attr("src","assembly/fanChong/fanQuShi.html")
	$("body").css("background","#b1b1b1")
	$(".title_center").text("滤池数据曲线")
})
//反冲洗报警
$(".fan_line button").eq(3).on("click",function(){
	$("iframe").attr("src","assembly/fanChong/fanBaoJing.html")
	$("body").css("background","#b1b1b1")
	$(".title_center").text("报警信息")
})
//反冲洗报表
$(".fan_line button").eq(4).on("click",function(){
	$("iframe").attr("src","assembly/fanChong/fanBaoBiao.html")
	$("body").css("background","#b1b1b1")
	$(".title_center").text("报表")
})

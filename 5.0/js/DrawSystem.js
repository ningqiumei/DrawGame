var MoreInfo_all = null;
var Draw_angle = null; //转盘转的角度
var Draw_awardLevel = null; //奖品等级
var Draw_awardName = null; //奖品名称
var Draw_lotteryAwardMemberId = null; //奖品ID
var Draw_awardPictureUrl = null; //奖品url
var Awardid = null;
var wait = 60; //验证码倒计时

function  start_call_func (argument) {
	focuseffection(); //焦点效果
	FairIntroduction(); //活动简介
	getCountDown(); //验证码倒计时
	activityStartorNot(); //活动是否开始
	startmarquee(25, 40, 50, 1); //滚动效果
	ScrollImgLeft();
	$("#text_info-1").text("参与方式：开通会员，即可参与抽奖，赢取巴西（里约热内卢）奥运之旅");
	$("#text_info-7").text("活动已经结束!");
	$("#text_info-3").text("淘气早教包、景丽理疗瑜伽、运动跳绳、贝尔瓦七天会员等。");
}


// $(function() {
// 	focuseffection(); //焦点效果
// 	FairIntroduction(); //活动简介
// 	//AwardGetList(); //中奖名单
// 	//userBaseInfo(); //后台已经登录，首次加载页面自动登录
// 	getCountDown(); //验证码倒计时
// 	activityStartorNot(); //活动是否开始
// 	//MoreInfo(); //更多详情页文字说明
// 	MoreInfoImage(); //更多详情页图片
// 	startmarquee(25, 40, 50, 1);//滚动效果
// 	//myAwardList(); //我的奖品
// 	//document.getElementById("startdDraw").focus();
// 	//console.log("toast display:" + document.getElementById("div-toast-img-12").style.display);
// 	$("#text_info-1").text("参与方式：开通会员，即可参与抽奖，赢取巴西（里约热内卢）奥运之旅");
// 	$("#text_info-7").text("活动已经结束!");
// });

//活动未开始 隐藏中奖名单区域
function hideChild_000() {
	var ul = document.getElementById("bg_Operation-img-8");
	ul.style.display = "none";
	var ul1 = document.getElementById("text_info-2");
	ul1.style.display = "none";
	var ul10 = document.getElementById("startdDraw");
	ul10.style.display = "none";
}
//显示抽奖按钮
function showChild_011() {
	var ul1 = document.getElementById("startdDraw");
	ul1.style.display = "block";
	document.getElementById("startdDraw").focus();
}
//活动未开始 中奖名单区域显示还未开始框
function hideChild_001() {
	var ul = document.getElementById("text_info-2-1");
	ul.style.display = "block";
	var ul001 = document.getElementById("text_info-4");
	ul001.style.display = "none";
	var ul002 = document.getElementById("text_info-40");
	ul002.style.display = "none";
	var ul003 = document.getElementById("text_info-41");
	ul003.style.display = "block";
	var ul1 = document.getElementById("startdDraw-1");
	ul1.style.display = "block";
	$("#text_info-41").text("活动马上开始，敬请期待！");
}
//活动未开始 隐藏中奖名单区域
function hideChild_002() {
	var ul0 = document.getElementById("text_info-2-2");
	ul0.style.display = "block";
	var ul001 = document.getElementById("text_info-4");
	ul001.style.display = "none";
	var ul002 = document.getElementById("text_info-40");
	ul002.style.display = "none";
	var ul = document.getElementById("text_info-41");
	ul.style.display = "block";
	$("#text_info-41").text("活动已经结束...");
	var ul1 = document.getElementById("startdDraw-2");
	ul1.style.display = "block";
}
//弹出框--活动已经结束
function showChild_000() {
	var ul = document.getElementById("div-toast-img-0");
	ul.style.display = "block";
	var ul001 = document.getElementById("text_info-4");
	ul001.style.display = "none";
	var ul002 = document.getElementById("text_info-41");
	ul002.style.display = "block";

	$("#text_info-5-1").text("活动已经结束!");
	$("#text_info-41").text("活动已经结束...");
	document.getElementById("button-ensure-1").focus();
	$("#indexhtml :button").attr("disabled", "disabled");
}
//弹出框--活动未开始
function showChild_001() {
	var ul = document.getElementById("div-toast-img-1");
	ul.style.display = "block";
	$("#text_info-6-1").text("活动马上开始!");
	document.getElementById("button-ensure-2").focus();
	$("#indexhtml :button").attr("disabled", "disabled");
}
//弹出框--恭喜抽中（虚体奖（兑换码）、卡密奖）
function showChild_002(txt, typeId, cardNumber, passWord) {
	var ul = document.getElementById("div-toast-img-2");
	$("#indexhtml :button").attr("disabled", "disabled");
	ul.style.display = "block";
	console.log("typeId" + typeId + "cardNumber" + cardNumber + "passWord" + passWord);
	if(typeId == 1) { //虚体奖
		document.getElementById("button-rem-4-2").focus();
		var allnumber = $("#temp_userphonenumber").text();
		var mphone = allnumber.substr(3, 4);
		var lphone = allnumber.replace(mphone, "****");
		var _li = '<font style="font-size: 25px;">您抽中的' + txt + '兑换码已发送至' + lphone + '手机上。</font><br/> <font style="font-size: 25px;">兑换码 ：' + passWord + '</font>';
		$("#cardpassword").empty();
		$("#cardpassword").append(_li);
	} else { //卡密奖
		document.getElementById("button-rem-4-2").focus();
		var allnumber = $("#temp_userphonenumber").text();
		var mphone = allnumber.substr(3, 4);
		var lphone = allnumber.replace(mphone, "****");
		var _li = '<font style="font-size: 25px;">您抽中的<B>' + txt + '</B>卡号和密码已发送至' + lphone + '手机上。</font><br/> <font style="font-size: 25px;">卡号 ：' + cardNumber + '</font><br/><font style="font-size: 25px;">密码 ：' + passWord + '</font>';
		$("#cardpassword").empty();
		$("#cardpassword").append(_li);
	}

}
//弹出框--获取更多机会
function getProductPackage() {
	console.log("in getProductPackage.....");
	var ul = document.getElementById("div-toast-img-3");
	ul.style.display = "block";
	document.getElementById("button-img-3-2").focus();
	$("#indexhtml :button").attr("disabled", "disabled");

	//	var activid_2 = $("#activityid").text();
	//	console.log("activid_2" + activid_2);
	//指定产品包有待后台修改
	//	$.ajax({
	//		type: "get",
	//		async: true,
	//		url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/condition/1",
	//		dataType: "jsonp",
	//		jsonp: "callback",
	//		//jsonpCallback: "receive",
	//		success: function(data) {
	//			var i = 1;
	//			var temp = data.data[i].productPackageTypeName;
	//			$("#text_info-9-div").text("【" + temp + "】");
	//		},
	//		error: function() {
	//			console.log('fail');
	//		}
	//	});
}
//弹出框--未中奖
function showChild_004() {
	var ul = document.getElementById("div-toast-img-4");
	ul.style.display = "block";
	document.getElementById("button-img-4-1").focus();
	$("#indexhtml :button").attr("disabled", "disabled");
}

function phonewriteornot(txt, awards, typeId, lotteryAwardMemberId, cardNumber, passWord) {
	var ph = $("#temp_userphonenumber").text();
	//var ph = '13728728225';//测试
	console.log("phonewriteornot:" + ph.length + "txt:" + txt + "typeId:" + typeId);
	console.log("cardNumber:" + cardNumber + "passWord:" + passWord);
	if(ph.length == 0) {
		$("#text_info-11-0").text(txt);
		showChild_005();
	} else {
		if(typeId == 2) { //已填写手机号的实体将
			$("#foom-back-2").text(txt);
			showChild_016();
		} else { //已填写手机号的卡密奖
			if(typeof(cardNumber) == "undefined") {
				showChild_002(txt, typeId, 0, passWord);
				console.log("duihuanma");
			} else {
				showChild_002(txt, typeId, cardNumber, passWord);
				console.log("kami");
			}

		}
	}
	LotteryNumber();
}

//弹出框--恭喜抽中（检测到未填写手机号）
function showChild_005() {
	$("#text_info-11-1").text("请填写您的手机号码领取奖品");
	var ul = document.getElementById("div-toast-img-5");
	ul.style.display = "block";
	document.getElementById("button-img-5-1").focus();
	$("#indexhtml :button").attr("disabled", "disabled");
}
//弹出框--恭喜抽中（检测到填写手机号，确认是否更改）
function showChild_016() {
	var ul = document.getElementById("toost-back-warm");
	ul.style.display = "block";
	var allnumber = $("#temp_userphonenumber").text();
	console.log("----allnumber---" + allnumber);
	var mphone = allnumber.substr(3, 4);
	var lphone = allnumber.replace(mphone, "****");
	$("#foom-back-3").html("您当前手机号是" + lphone);
	document.getElementById("buttoon-back-3-1").focus();
	$("#indexhtml :button").attr("disabled", "disabled");
}

//确定以当前手机号领取奖品
function ensuretoaward(id) {
	var isReally = "true" //设置一个变量 区分实体还是虚体
	var phoneNumber = $('#form-info-7-3').text();
	var Awardid_new = $('#unseediv').text();
	var userOpen_id = $('#userOpenId').text();
	var AccessToken_new = $('#accesstoken').text();
	console.log("in phoneNumber----------------" + phoneNumber);
	console.log("in ensuretoaward----------------" + Awardid_new);
	//需要在这里给后台传递参数：openid，中奖奖品，当前手机号等等
	cancelToast(id);
	$.ajax({
		type: "get",
		async: true,
		data: {
			"lotteryAwardMemberId": Awardid_new,
			"phone": phoneNumber
		},
		url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/confirm/" + Awardid_new + "/" + phoneNumber + "/" + AccessToken_new,
		dataType: "jsonp",
		jsonp: "callback",
		success: function(data) {
//			var typeid_all = null;
//			if(isReally == "false") { //虚体奖或者卡密奖弹提示框
//				//CardPasswordinfo();
//				showChild_002(typeid_all, 0, 0);
//			} else {
//				//实体将不做处理
//			}
		},
		error: function(data) {
			//alert('fail');
		}
	});

}
//弹出填写手机号的详情页
function showChild_007() {
	var ul = document.getElementById("div-toast-text-7");
	ul.style.display = "block";
	var ul2 = document.getElementById("deviceready");
	ul2.style.display = "none";
}
//手机号填写准确与错误的弹出框
function showChild_008() {
	//需要一个参数判断 实体虚体奖
	//给后台传用户输入的手机号和验证码和用户的中奖名单ID		
	var phoneNumber =  document.getElementById('form-info-7-3').value; //$('#form-info-7-3').text();
	var captcha_new = document.getElementById('form-info-7-4').value;//$('#form-info-7-4').text();
	var Awardid_new = $('#unseediv').text();
	var userOpen_id = $('#userOpenId').text();
	var AccessToken_second = $('#accesstoken').text();
	console.log(phoneNumber + "--" + captcha_new + "---" + Awardid_new + "---" + AccessToken_second);
	//把中奖Id 手机号 验证码 传给后台,向后台传递这三个参数
	var showChild_008_all = function(phone, captcha, awardid, userOpen_id) {
		console.log("--------in showChild_008_all----------");
		$.ajax({
			type: "get",
			async: true,
			data: {
				"lotteryAwardMemberId": awardid,
				"phone": phone,
				"code": captcha
			},
			url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/updateUserInfo/" + awardid + "/" + phone + "/" + captcha + "/" + AccessToken_second,
			dataType: "jsonp",
			jsonp: "callback",
			success: function(data) {
				var str = JSON.stringify(data);
				console.log("response data = " + str);
				if (true == data.success) {
					var questionflag = data.success;
					var typenumber = "1"; //typenumber用来判断中奖的类型
					console.log("------return status" + "--------" + questionflag);
					theInfoResult(questionflag, typenumber);
					$("#codeflag").text("true");
					codeFlag();
				} else {
					console.log('fail');
					$("#codeflag").text("");
					codeFlag();
				}
				
			},
			error: function(data) {
				console.log('error callback');
			}
		});
		//setTimeout(codeFlag, 3000);
	};
	showChild_008_all(phoneNumber, captcha_new, Awardid_new, userOpen_id);
}

function codeFlag() {
	var isCodeFlag = $("#codeflag").text();
	console.log("isCodeFlag=" + isCodeFlag);
	if(isCodeFlag == "true") {
		console.log("code id right");
	} else {
		var ul = document.getElementById("codeIsWrong");
		ul.style.display = "block";
		setTimeout("codeFlagRemove()", 3000);
	}
}

function codeFlagRemove() {
	var ul = document.getElementById("codeIsWrong");
	ul.style.display = "none";
}
//判定信息修改的结果
function theInfoResult(result, type) {
	//获取后台的判定结果
	console.log("in theInfoResult()" + "type" + type);
	if(result) {
		var ul = document.getElementById("toastsuccess");
		ul.style.display = "block";
		//1秒后弹出提示框，3秒后回到抽奖主界面
		//setTimeout("func()", 1000);
		setTimeout("toWriteSucessAgain()", 3000);

	} else {
		var ul = document.getElementById("toastfalse");
		ul.style.display = "block";
		$("#form-info-7-6-1").val("验证码错误，请重新填写。");
		setTimeout("toWriteAgain()", 2000);
	}
}
//重新填写、隐藏错误信息
function toWriteAgain() {
	var ul = document.getElementById("toastfalse");
	ul.style.display = "none";

}

function toWriteSucessAgain () {
	// body...
	var ul = document.getElementById("toastsuccess");
	ul.style.display = "none";

	document.getElementById("div-toast-text-7").style.display = "none";
	document.getElementById("div-toast-img-5").style.display = "none";
	
	//document.getElementById('indexhtml').style.display="block"; 
	document.getElementById("deviceready").style.display="block";
	//document.getElementById('moreinfo_speciallyeffect').focus();
	$("#indexhtml :button").removeAttr("disabled");
	document.getElementById("startdDraw").focus();

	document.getElementById("form-info-7-3").value = '  请准确填写手机号';
	document.getElementById("form-info-7-4").value = '  验证码';


	//LotteryNumber();
	//start_call_func();
}

//悬浮提示框效果
function func() {
	var isReally = "true" //用来区分实体将还是虚体奖
	var layer = document.createElement("div");
	layer.id = "layer";
	var style = {
		background: "#5B5B5B",
		position: "absolute",
		zIndex: 10,
		width: "434px",
		height: "50px",
		left: "465px",
		top: "408px",
		fontSize: "32px",
		textAlign: "center"
	}
	for(var i in style)
		layer.style[i] = style[i];
	if(document.getElementById("layer") == null) {
		document.body.appendChild(layer);
		//		$("#layer").text("3秒后回到抽奖页面");
		//setTimeout("document.body.removeChild(layer)", 2000)
		if(isReally == "true") {
			//window.location.href = 'index.html';
			//start_call_func();
		} else{
		}
	}
}
//跳转回到抽奖主界面
function showChild_008_return() {
	window.location.reload();
}
//得到焦点触发事件--文本框效果图
function OnfocusFun(element, elementvalue) {
	if(element.value == elementvalue) {
		element.value = "";
	}
}
//离开输入框触发事件
function OnBlurFun(element, elementvalue) {
	if(element.value == "" || element.value.replace(/\s/g, "") == "") {
		element.value = elementvalue;
	}
}

//跳转更多详情页
function showChild_009() {
	var ul2 = document.getElementById("deviceready");
	ul2.style.display = "none";
	var ul = document.getElementById("div-toast-text-9");
	ul.style.display = "block";
	document.getElementById("form-info-9-2").focus();
}

function showChild_010() {
	myAwardList();
	var ul = document.getElementById("div-toast-text-10");
	ul.style.display = "block";
	var ul2 = document.getElementById("deviceready");
	ul2.style.display = "none";
}
//根据我的奖品数创建多个div，存储图片
function myAwardList() {
	var _MyAwardImage = new Array();
	var _MyAwardsBeanlength = null;
	var _AwardFlag = new Array();
	var _AwardName = new Array();
	var _AwardExchangeFlag = new Array();
	var userOpen_id = $('#userOpenId').text();
	var MyAccessToken = $('#accesstoken').text();
	console.log("-------MyAccessToken-------" + MyAccessToken);
	$.ajax({
		type: "get",
		async: true,
		data: {
			"Awards": "awards",
			"Phone": "phone",
			"Captcha": "captcha"
		},
		url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/myAwards/1/" + MyAccessToken,
		dataType: "jsonp",
		jsonp: "callback",
		success: function(data) {
			$("#form-info-10-1 div").remove();
			_MyAwardsBeanlength = data.myAwardsBean.length
			for(var i = 0; i < _MyAwardsBeanlength; i++) {
				_AwardExchangeFlag[i] = data.myAwardsBean[i].awardExchangeFlag
				console.log("_AwardExchangeFlag=" + _AwardExchangeFlag[i]);
				_AwardFlag[i] = data.myAwardsBean[i].awardFlag;
				_AwardName[i] = data.myAwardsBean[i].awardName;
				_Number = i;
				_MyAwardImage[i] = data.myAwardsBean[i].awardUrl
				if(_AwardName[i] == '谢谢参与') {

				} else {
					if(_AwardExchangeFlag[i] == "0") {
						var lastNameOne = _AwardName[i] + "(已放弃)";
						myAwardListtwo(_Number, _MyAwardsBeanlength, _AwardFlag[i], lastNameOne, _MyAwardImage);
					} else {
						var lastNameTwo = _AwardName[i] + "(已领取)";
						myAwardListtwo(_Number, _MyAwardsBeanlength, _AwardFlag[i], lastNameTwo, _MyAwardImage);
					}
				}
			}
		},
		error: function(data) {
		}
	});
	//创建相应div存储图片
	var myAwardListtwo = function(number, length, flag, name, imageurl) {
		console.log("length" + length + "----" + "name" + name);
		var _div = '<div title="images" class="wrap" id="' + name + '" style="width: 45%; height: 65%; padding-right: 5%; margin-top: 0.5%; overflow: hidden; text-overflow: ellipsis;  opacity: 1; float: left; ">' + '<div title ="AwardImage" class ="AwardImageUrl" style="width: 95%; height: 80%; padding-left: 0%; padding-top: 0%;  margin-top: 0.5%; margin-left: 0.5%; background-color: white; overflow: hidden;  text-overflow: ellipsis; border: 1px solid black; opacity: 0.5; float: left;' + 'background-image: url(' + _MyAwardImage[_Number] + ');background-size:100%;">' + (_Number + 1) + '</div>' + '<div title="Detail" id="NO." tabindex="-1" style="width: 95%; height: 10%; margin-top: 80%; margin-left: 0.5%; text-align: center; border: 0px solid black; opacity: 1;">' + name + '</div>' + '</div>';
		$("#form-info-10-1").append(_div);
	};
}

//活动简介   动态创建div存储奖品图片
function FairIntroduction() {
	//获取当前时间
	var oDate = new Date(); //实例一个时间对象；
	var year_now = oDate.getFullYear(); //获取系统的年；
	var month_now = oDate.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
	var day_now = oDate.getDate(); // 获取系统日，
	var hours_now = oDate.getHours(); //获取系统时，
	var minute_now = oDate.getMinutes(); //分
	var second_now = oDate.getSeconds(); //秒
	var menmber_now = second_now * 1 + minute_now * 100 + hours_now * 10000 + day_now * 1000000 + month_now * 100000000 + year_now * 10000000000;
	//该接口有活动id、奖品送货方式、奖品id、奖品等级、奖品名称、奖品图片地址、奖品类型（虚实奖）
	$.ajax({
		type: "get",
		async: true,
		url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/active/1",
		dataType: "jsonp",
		jsonp: "callback",
		success: function(data) {
			//动态创建多个div插入文字；			
			//			console.log("活动ID：" + data.awardBeanList[0].activeId);
			//			$("#activityid").text(data.awardBeanList[0].activeId);

			//			for(var i = 0; i < data.awardBeanList.length; i++) {
			//				if(i == 0) {
			//					if(data.awardBeanList[i].awardName == '谢谢参与') {} else {
			//						$("#text_info-3").append(data.awardBeanList[i].awardName);
			//					}
			//				} else {
			//					if(data.awardBeanList[i].awardName == '谢谢参与') {} else {
			//						$("#text_info-3").append("、");
			//						$("#text_info-3").append(data.awardBeanList[i].awardName);
			//					}
			//				}
			//			}

			var begintime = data.activeBean.activeBeginTime;
			var endtime = data.activeBean.activeEndTime;
			//活动开始时间
			var year_activity_begin = begintime.substr(0, 4);
			var month_activity_begin = begintime.substr(5, 2);
			var day_activity_begin = begintime.substr(8, 2);
			var hour_activity_begin = begintime.substr(11, 2);
			var minute_activity_begin = begintime.substr(14, 2);
			var second_activity_begin = begintime.substr(17, 2);
			var menmber_activity_begin = second_activity_begin * 1 + minute_activity_begin * 100 + hour_activity_begin * 10000 + day_activity_begin * 1000000 + month_activity_begin * 100000000 + year_activity_begin * 10000000000;
			//活动结束时间
			var year_activity_end = endtime.substr(0, 4);
			var month_activity_end = endtime.substr(5, 2);
			var day_activity_end = endtime.substr(8, 2);
			var hour_activity_end = endtime.substr(11, 2);
			var minute_activity_end = endtime.substr(14, 2);
			var second_activity_end = endtime.substr(17, 2);
			var menmber_activity_end = second_activity_end * 1 + minute_activity_end * 100 + hour_activity_end * 10000 + day_activity_end * 1000000 + month_activity_end * 100000000 + year_activity_end * 10000000000;
			console.log(menmber_activity_end);
			//活动开始时间
			$("#text_info-0").text("活动时间:" + year_activity_begin + "年" + month_activity_begin + "月" + day_activity_begin + "日" + "-" + year_activity_end + "年" + month_activity_end + "月" + day_activity_end + "日");
			if(menmber_activity_begin <= menmber_now && menmber_now <= menmber_activity_end) { //如果活动开始
				console.log("活动开始");
				showChild_011();
			} else {
				console.log("活动未开始。");
				var ul = document.getElementById("activityNotStart");
				ul.style.display = "block";
				var ul1 = document.getElementById("startdDraw");
				ul1.style.display = "none";
			}
			AwardGetList();
		},
		error: function(data) {
			console.log(data);
		}
	});

}

function ScrollImgLeft() {
	var speed = 20;
	var scroll_begin = document.getElementById("scroll_begin");
	var scroll_end = document.getElementById("scroll_end");
	var scroll_div = document.getElementById("scroll_div");
	scroll_end.innerHTML = scroll_begin.innerHTML;

	function Marquee() {
		if(scroll_end.offsetWidth - scroll_div.scrollLeft <= 0)
			scroll_div.scrollLeft -= scroll_begin.offsetWidth;
		else
			scroll_div.scrollLeft++;
	}
	var MyMar = setInterval(Marquee, speed);

}

//抽奖机会次数
function LotteryNumber() {
	//该接口有抽奖次数
	var access_token_4 = $("#accesstoken").text();
	console.log("access_token_4 : " + access_token_4);
	$.ajax({
		type: "get",
		async: true,
		url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/leftNumber/1/" + access_token_4,
		dataType: "jsonp",
		jsonp: "callback",
		success: function(data) {
			console.log("chenggong...");
			var lotterynumber = data.number;
			$("#text_info-40").text(lotterynumber);
			$("#drawleftnum").text(lotterynumber);
		},
		error: function(data) {
			console.log("shibai...");
			$("#text_info-40").text("0");
			$("#drawleftnum").text("0");
		}
	});
}
//点击取消
function cancelToast(id) {
	var s;
	s = document.getElementById(id).parentElement.id;
	var ul = document.getElementById(s);
	if(ul.style.display == "block") {
		ul.style.display = "none";
	} else {
		ul.style.display = "block";
	}
	$("#indexhtml :button").removeAttr("disabled");
	document.getElementById("startdDraw").focus();
}

function cancelToastback(id) {
	var s;
	s = document.getElementById(id).parentElement.id;
	console.log("------" + s + "-----------");
	var ul = document.getElementById(s);
	if(ul.style.display == "block") {
		ul.style.display = "none";
	} else {
		ul.style.display = "block";
	}
	$("#button-img-5-1").removeAttr("disabled");
	$("#buttoon-back-3-1").removeAttr("disabled");
	$("#buttoon-back-3-2").removeAttr("disabled");
	$("#toost-back-warm :button").removeAttr("disabled");
	$("#indexhtml :button").removeAttr("disabled");
	$("#homepage :button").removeAttr("disabled");
	document.getElementById("startdDraw").focus();
	var s1 = document.getElementById("div-toast-img-5");
	var s2 = document.getElementById("toost-back-warm");
	var s3 = document.getElementById("div-toast-text-7");
	if(s1.style.display == "block") {
		document.getElementById("button-img-5-1").focus();
	}
	if(s2.style.display == "block") {
		document.getElementById("buttoon-back-3-1").focus();
	}
	if(s3.style.display == "block") {
		//document.getElementById("buttoon-back-3-1").focus();
	}
}

function gotohomepage() {
	var pageflag = document.getElementsByClassName("toast");
	var ii = null;
	for(ii = 0; ii < pageflag.length; ii++) {
		pageflag[ii].style.display = "none";
	}
	var ii1 = document.getElementById("deviceready");
	ii1.style.display = "block";
	$("#indexhtml :button").removeAttr("disabled");
	$("#homepage :button").removeAttr("disabled");
	document.getElementById("startdDraw").focus();
}

//点击开始抽奖--根据时间判断执行何种后续功能
function gotoStartDraw() {
	//choujiangmusic();
	var TimeBeginFlag = null;
	//获取当前时间
	var oDate = new Date(); //实例一个时间对象；
	var year_now = oDate.getFullYear(); //获取系统的年；
	var month_now = oDate.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
	var day_now = oDate.getDate(); // 获取系统日，
	var hours_now = oDate.getHours(); //获取系统时，
	var minute_now = oDate.getMinutes(); //分
	var second_now = oDate.getSeconds(); //秒
	var menmber_now = second_now * 1 + minute_now * 100 + hours_now * 10000 + day_now * 1000000 + month_now * 100000000 + year_now * 10000000000;
	console.log("now time is ：" + menmber_now);
	//获取活动开始结束的时间
	$.ajax({
		type: "get",
		async: true,
		url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/active/1",
		dataType: "jsonp",
		jsonp: "callback",
		//jsonpCallback: "receive",
		success: function(data) {
			var begintime = data.activeBean.activeBeginTime;
			var endtime = data.activeBean.activeEndTime;
			//活动开始时间
			var year_activity_begin = begintime.substr(0, 4);
			var month_activity_begin = begintime.substr(5, 2);
			var day_activity_begin = begintime.substr(8, 2);
			var hour_activity_begin = begintime.substr(11, 2);
			var minute_activity_begin = begintime.substr(14, 2);
			var second_activity_begin = begintime.substr(17, 2);
			var menmber_activity_begin = second_activity_begin * 1 + minute_activity_begin * 100 + hour_activity_begin * 10000 + day_activity_begin * 1000000 + month_activity_begin * 100000000 + year_activity_begin * 10000000000;
			//活动结束时间
			var year_activity_end = endtime.substr(0, 4);
			var month_activity_end = endtime.substr(5, 2);
			var day_activity_end = endtime.substr(8, 2);
			var hour_activity_end = endtime.substr(11, 2);
			var minute_activity_end = endtime.substr(14, 2);
			var second_activity_end = endtime.substr(17, 2);
			var menmber_activity_end = second_activity_end * 1 + minute_activity_end * 100 + hour_activity_end * 10000 + day_activity_end * 1000000 + month_activity_end * 100000000 + year_activity_end * 10000000000;

			if(menmber_activity_begin <= menmber_now && menmber_now <= menmber_activity_end) { //如果活动开始
				console.log("活动开始");
				startDrawFlag();
			} else if(menmber_now >= menmber_activity_end) { //如果活动已经结束
				console.log("活动已经结束。");
				showChild_000()
			} else if(menmber_now <= menmber_activity_begin) {
				console.log("活动马上开始。");
				showChild_001();
				$("#text_info-6-2").text("活动时间：" + month_activity_begin + "月" + day_activity_begin + "日-" + month_activity_end + "月" + day_activity_end + "日");
			}
		},
		error: function(data) {}
	});

}
//活动开始与否的判断
function activityStartorNot() {
	var TimeBeginFlag = null;
	//获取当前时间
	var oDate = new Date(); //实例一个时间对象；
	var year_now = oDate.getFullYear(); //获取系统的年；
	var month_now = oDate.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
	var day_now = oDate.getDate(); // 获取系统日，
	var hours_now = oDate.getHours(); //获取系统时，
	var minute_now = oDate.getMinutes(); //分
	var second_now = oDate.getSeconds(); //秒
	var menmber_now = second_now * 1 + minute_now * 100 + hours_now * 10000 + day_now * 1000000 + month_now * 100000000 + year_now * 10000000000;
	//获取活动开始结束的时间
	$.ajax({
		type: "get",
		async: true,
		url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/active/1",
		dataType: "jsonp",
		jsonp: "callback",
		success: function(data) {
			var begintime = data.activeBean.activeBeginTime;
			var endtime = data.activeBean.activeEndTime;
			//活动开始时间
			var year_activity_begin = begintime.substr(0, 4);
			var month_activity_begin = begintime.substr(5, 2);
			var day_activity_begin = begintime.substr(8, 2);
			var hour_activity_begin = begintime.substr(11, 2);
			var minute_activity_begin = begintime.substr(14, 2);
			var second_activity_begin = begintime.substr(17, 2);
			var menmber_activity_begin = second_activity_begin * 1 + minute_activity_begin * 100 + hour_activity_begin * 10000 + day_activity_begin * 1000000 + month_activity_begin * 100000000 + year_activity_begin * 10000000000;
			//活动结束时间
			var year_activity_end = endtime.substr(0, 4);
			var month_activity_end = endtime.substr(5, 2);
			var day_activity_end = endtime.substr(8, 2);
			var hour_activity_end = endtime.substr(11, 2);
			var minute_activity_end = endtime.substr(14, 2);
			var second_activity_end = endtime.substr(17, 2);
			var menmber_activity_end = second_activity_end * 1 + minute_activity_end * 100 + hour_activity_end * 10000 + day_activity_end * 1000000 + month_activity_end * 100000000 + year_activity_end * 10000000000;
			if(menmber_activity_begin <= menmber_now && menmber_now <= menmber_activity_end) { //如果活动开始
				//活动开始，首页默认状态为正确状态
				showChild_011();
			} else if(menmber_activity_begin > menmber_now) { //如果活动已经结束或者还未开始
				console.log("还未开始");
				hideChild_000(); //隐藏中奖名单区域
				hideChild_001(); //中奖名单 上下滚动效果
			} else if(menmber_activity_end < menmber_now) {
				console.log("已经结束");
				hideChild_000(); //隐藏中奖名单区域
				hideChild_002();
			}
		},
		error: function(data) {}
	});
}
//判断抽奖次数，若不为0，执行startDraw（），若为0，弹次数为0的toast
function startDrawFlag() {
	var isloginflag = $("#islogin").text();
	console.log("isloginflag:" + isloginflag);
	var startdrawflag = $("#drawleftnum").text();
	console.log("startdrawflag:" + startdrawflag);
	if(isloginflag == "false") {
		//提示您还没有登录，请先登录.
		console.log("you haved not loaded . Please login in first");
		var back = document.getElementById("toast-nologin-warm");
		back.style.display = "block";
		document.getElementById("button-nologin-3-1").focus();
		$("#indexhtml :button").attr("disabled", "disabled");
	} else {
		console.log("left draw number is" + startdrawflag);
		if(startdrawflag != 0) {
			console.log("startdrawflag=" + startdrawflag);
			startDraw();
		} else {
			console.log("The left number is 0 .......");
			//抽奖次数为零，弹获取机会的toast；
			getProductPackage();
		}
	}
}
//开始抽奖,获取后台数据：奖品名称、等级、旋转角度
function startDraw() {
	//转盘转动的代码
	console.log("click start draw");
	var rotateTimeOut = function() {
		$('#rotate').rotate({
			angle: 0,
			animateTo: 2160,
			duration: 8000,
			callback: function() {
				console.log('网络超时，请检查您的网络设置！');
			}
		});
	};
	var bRotate = false;
	var rotateFn = function(awards, angles, txt, typeid, lotteryAwardMemberId, cardNumber, passWord) {
		console.log("in rotateFn");
		bRotate = !bRotate;
		$('#rotate').stopRotate();
		$('#rotate').rotate({
			angle: 0,
			animateTo: angles + 1800,
			duration: 3000,
			callback: function() {
				$("#unseediv").text(lotteryAwardMemberId);
				console.log("lotteryAwardMemberId" + lotteryAwardMemberId);
				phonewriteornot(txt, awards, typeid, lotteryAwardMemberId, cardNumber, passWord);
				bRotate = !bRotate;
			}
		})
	};
	//向后台请求数据：角度，奖品ID，奖品名称，奖品等级   并传参macadress
	var macaddress = "1ca770d3efe3"; //$("#macaddressnum").text();
	var accesstoken = $("#accesstoken").text();
	console.log("accesstoken=" + accesstoken + " accesstoken+macaddress=" + macaddress); //OK

	$.ajax({
		type: "post",
		async: true,
		data: {
			"macaddress": macaddress,
		},
		url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/lottery/1/" + macaddress + "/" + accesstoken,
		dataType: "jsonp",
		jsonp: "callback",
		success: function(data) {
			console.log('SUCCESS' + data + '-' + data.data.angle);
			var Draw_angle = data.data.angle; //角度
			var Draw_awardLevel = data.data.awardLevel; //几等奖
			var Draw_awardName = data.data.awardName; //奖项名称
			var Draw_lotteryAwardMemberId = data.data.lotteryAwardMemberId; //奖品id短信验证时用于传给后台
			var Draw_awardTypeId = data.data.awardTypeId; //1是虚2是实3是卡密
			console.log("Draw_angle"+Draw_angle+"Draw_awardTypeId"+Draw_awardTypeId);
			if(Draw_awardTypeId == 2) {
				rotateFn(Draw_awardLevel, Draw_angle, Draw_awardName, Draw_awardTypeId, Draw_lotteryAwardMemberId, 0, 0, 0);
				console.log("angle：" + Draw_angle + "awardLevel：" + Draw_awardLevel + "awardName：" + Draw_awardName);
			} else if(Draw_awardTypeId == 3) {
				var Draw_apkName = data.data.awardExchangeType//包名
				console.log("Draw_apkName:"+Draw_apkName);
				$("#apkname").text(Draw_apkName);
				var Draw_ordNumber = data.data.cardInfo.cardNo; //卡号
				var Draw_password = data.data.cardInfo.password; //密码
				console.log("angle：" + Draw_angle + "awardLevel：" + Draw_awardLevel + "awardName：" + Draw_awardName + "ordNumber：" + Draw_ordNumber + "password：" + Draw_password+"Draw_apkName"+Draw_apkName);
				rotateFn(Draw_awardLevel, Draw_angle, Draw_awardName, Draw_awardTypeId, Draw_lotteryAwardMemberId, Draw_ordNumber, Draw_password);
			} else {
				//...
			}
			if(bRotate) return;
			LotteryNumber();
		},
		error: function(data) {}
	});
}
//中奖名单
function AwardGetList() {
	$.ajax({
		type: "get",
		async: true,
		url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/awardList/1",
		dataType: "jsonp",
		jsonp: "callback",
		//jsonpCallback: "receive",
		success: function(data) {
			console.log("data.data.length" + data.data.length);
			var _UserNickName = new Array();
			var _AwardName = new Array();
			var _AwardTime = new Array();
			var _AwardTimeTime = new Array();
			for(var i = 0; i < data.data.length; i++) {
				_UserNickName[i] = data.data[i].userNickName;
				_AwardName[i] = data.data[i].awardName;
				_AwardTime[i] = data.data[i].awardTime;
				_AwardTimeTime[i] = _AwardTime[i].substr(0, 11);
			}
			for(var i = 0; i < data.data.length; i++) {
				if(_AwardName[i] == '谢谢参与') {

				} else {
					var _li = '<li>' + '<div class ="msg" >' + '<nobr style="width:30%; float: left; overflow: hidden;text-overflow :ellipsis;text-align: left;">' + _UserNickName[i] + '</nobr>' + '<nobr style="width:28%; float: left; overflow: hidden; text-overflow :ellipsis; text-align: left;">' + _AwardName[i] + '</nobr>' + '<nobr style="width:38%; float: left; overflow: hidden;text-overflow :ellipsis; text-align: left;">' + _AwardTimeTime[i] + '</nobr>' + '</div>' + '</li>';
					$("#marqueebox1 ul").append(_li);
				}
			}
		},
		error: function(data) {}
	});
	setTimeout(AwardGetList, 180000); //设置为三分钟
}
//页面特效功能
function focuseffection() {
	//开始抽奖
	$('#startdDraw').focus(function() {
		document.getElementById("bg_Operation-img-2").style.display = "none";
		document.getElementById("bg_Operation-img-2-border").style.display = "block";
	});
	$('#startdDraw').blur(function() {
		document.getElementById("bg_Operation-img-2").style.display = "block";
		document.getElementById("bg_Operation-img-2-border").style.display = "none";
	});
	//更多详情
	$('#moreinfo_speciallyeffect').focus(function() {
		gotFocus(this.id);
	});
	$('#moreinfo_speciallyeffect').blur(function() {
		loseFocus(this.id);
	});
	//我的奖品
	$('#myaward_speciallyeffect').focus(function() {
		gotFocus(this.id);
	});
	$('#myaward_speciallyeffect').blur(function() {
		loseFocus(this.id);
	});

	$('#button-ensure-1').focus(function() {
		gotFocus(this.id);
	});
	$('#button-ensure-1').blur(function() {
		loseFocus(this.id);
	});
	$('#button-ensure-2').focus(function() {
		gotFocus(this.id);
	})
	$('#button-img-3-1').focus(function() {
		gotFocus(this.id);
	});
	$('#button-img-3-1').blur(function() {
		loseFocus(this.id);
	});
	$('#button-img-3-2').focus(function() {
		gotFocus(this.id);
	});
	$('#button-img-3-2').blur(function() {
		loseFocus(this.id);
	});

	$('#button-back-3-1').focus(function() {
		gotFocus(this.id);
	});
	$('#button-back-3-1').blur(function() {
		loseFocus(this.id);
	});

	$('#button-back-3-2').focus(function() {
		gotFocus(this.id);
	});
	$('#button-back-3-2').blur(function() {
		loseFocus(this.id);
	});
	$('#buttoon-back-3-1').focus(function() {
		gotFocus(this.id);
	});
	$('#buttoon-back-3-1').blur(function() {
		loseFocus(this.id);
	});
	$('#buttoon-back-3-2').focus(function() {
		gotFocus(this.id);
	});
	$('#buttoon-back-3-2').blur(function() {
		loseFocus(this.id);
	});
	$('#button-img-4-1').focus(function() {
		gotFocus(this.id);
	});
	$('#button-img-4-1').blur(function() {
		loseFocus(this.id);
	});
	$('#button-img-4-2').focus(function() {
		gotFocus(this.id);
	});
	$('#button-img-4-2').blur(function() {
		loseFocus(this.id);
	});

	$('#button-rem-4-2').focus(function() {
		gotFocus(this.id);
	});
	$('#button-rem-4-2').blur(function() {
		loseFocus(this.id);
	});
	$('#button-img-5-1').focus(function() {
		gotFocus(this.id);
	});
	$('#button-img-5-1').blur(function() {
		loseFocus(this.id);
	});

	$('#button-img-6-1').focus(function() {
		gotFocus(this.id);
	});
	$('#button-img-6-1').blur(function() {
		loseFocus(this.id);
	});

	$('#button-img-6-2').focus(function() {
		gotFocus(this.id);
	});
	$('#button-img-6-2').blur(function() {
		loseFocus(this.id);
	});
	//短信验证页确定
	$('#button-text-7').focus(function() {
		gotFocus(this.id);
	});
	$('#button-text-7').blur(function() {
		loseFocus(this.id);
	});
	//短信验证页验证码
	$('#form-info-7-5').focus(function() {
		$('#form-info-7-5').css("background-color", "red");
	});
	$('#form-info-7-5').blur(function() {
		$('#form-info-7-5').css("background-color", "blue");
	});
	$('#button-nologin-3-1').focus(function() {
		gotFocus(this.id);
	});
	$('#button-nologin-3-1').blur(function() {
		loseFocus(this.id);
	});
	$('#button-nologin-3-2').focus(function() {
		gotFocus(this.id);
	});
	$('#button-nologin-3-2').blur(function() {
		loseFocus(this.id);
	});
}

function gotFocus(id) {
	var thisid;
	thisid = document.getElementById(id).children[1].id;
	var ul = document.getElementById(thisid);
	ul.style.display = "block";
}

function loseFocus(id) {
	var thisid;
	thisid = document.getElementById(id).children[1].id;
	var ul = document.getElementById(thisid);
	ul.style.display = "none";
}
//验证手机号是否正确，正确就执行读秒倒计时操作并给后台传递正确的手机号
function getCountDown() {
	var validCode = true;
	$(".captcha").click(function() {
		var phoneNumber = document.getElementById('form-info-7-3').value;
		console.log("phoneNumber = " + phoneNumber);
		var rel = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
		if(rel.test(phoneNumber)) {
			time(this); //验证通过读秒60秒
			//将用户填写的手机号传给后台
			$.ajax({
				type: "get",
				async: true,
				url: "http://restful.lottery.coocaatv.com/v1/lottery/edu/sendMessage/" + phoneNumber,
				dataType: "jsonp",
				jsonp: "callback",
				success: function(data, textStatus) {
					var str = JSON.stringify(data);
					console.log("response data = " + str);
					if (true == data.status){
						$("#fivePhone").text("true");
						overflow();
						console.log("fivePhone = " + $("#fivePhone").text());
					} else {

						$("#fivePhone").text("");
						overflow();
					}
				},
					
				error: function(data) {
					$("#fivePhone").text("");
					console.log("444:");
					overflow();
				},
			});
		} else {
			if(phoneNumber == "  请准确填写手机号") {
				console.log("空" + phoneNumber);
				var ul = document.getElementById("toastfalse");
				ul.style.display = "block";
				$("#form-info-7-6-1").val("手机号不能为空，请重新填写。");
				setTimeout("toWriteAgain()", 2000);
			} else {
				var ul = document.getElementById("toastfalse");
				ul.style.display = "block";
				$("#form-info-7-6-1").val("手机号不匹配请重新填写。");
				setTimeout("toWriteAgain()", 2000);
			}
		}
		//setTimeout(overflow, 3000);
	});
}

//验证码读秒
function time(o) {
	if(wait == 0) {
		o.removeAttribute("disabled");
		o.value = "获取验证码";
		wait = 60;
	} else {
		o.setAttribute("disabled", true);
		o.value = "重新发送(" + wait + ")";
		wait--;
		setTimeout(function() {
				time(o)
			},
			1000)
	}
}

function overflow() {
	var fiveFlag = $("#fivePhone").text();
	console.log("fiveFlag=" + fiveFlag);
	if(fiveFlag == "true") {
		console.log("Thr number id less than 5.");
	} else {
		console.log("Thr number id over than 5.");
		var ul = document.getElementById("numberBigFive");
		ul.style.display = "block";
		setTimeout("overflowRemove()", 3000);
	}
}

function overflowRemove() {
	var ul = document.getElementById("numberBigFive");
	ul.style.display = "none";
}

function startmarquee(lh, speed, delay, index) {
	var t;
	var o = document.getElementById("marqueebox" + index);
	o.innerHTML += o.innerHTML;
	o.scrollTop = 0;

	function start() {
		t = setInterval(scrolling, speed);
		o.scrollTop += 1;
	}

	function scrolling() {
		if(o.scrollTop % lh != 0) {
			o.scrollTop += 1;
			if(o.scrollTop >= o.scrollHeight / 2) o.scrollTop = 0;
		} else {
			clearInterval(t);
			setTimeout(start, delay);
		}
	}
	setTimeout(start, delay);
}
//音乐效果
function choujiangmusic() {
	var music = document.getElementById("music");
	music.pause();
	$("#music").attr("src", "sounds/clickdraw.mp3");
}

function buttFocus(obj) {
	var str = obj.children[1];
	var id = str.getAttribute("id");
	document.getElementById(id).style.display = "block";

}

function buttBlur(obj) {
	var str = obj.children[1];
	var id = str.getAttribute("id");
	document.getElementById(id).style.display="none";
	
}
function luckFocus(obj){
	document.getElementById("buttonImgBorder").style.display="block";
}

function luckBlur(obj){
	document.getElementById("buttonImgBorder").style.display="none";
}

function gotoSecondPage(){
	document.getElementById("firstPage").style.display="none";
	document.getElementById("indexhtml").style.display="block";
}

function CardPasswordinfo(){//需要多个参数传进来
	document.getElementById("div-toast-img-2").style.display="block";
	var name = "【贝瓦儿歌】七天会员卡";
	var phone = "13728728225";
	var mphone = phone.substr(3, 4);
	var lphone = phone.replace(mphone, "****");
	var card = "1234567";
	var password = "123456";
	var _li = '<font style="font-size: 25px;">您抽中的'+ name +'卡号和密码已发送至'+lphone+'手机上。</font><br/> <font style="font-size: 25px;">卡号 ：'+card+'</font><br/><font style="font-size: 25px;">密码 ：'+password+'</font>';
	$("#cardpassword").append(_li);
}

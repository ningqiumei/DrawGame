
var isLogin = 1; // -1 is initial, 0 is no login, 1 is logined 
var img_src = __uri('images/caizhi.png');

var userInfo = {"user_name" : "第五空间", "user_img": img_src, "user_mobile":"13863556925"};
var activiInfo = {"left_times":0};
var xmlhttp = null;

//document.write("<script language='javascript' src=__uri('js/DrawSystem.js')></script>");

window.onload = function () {



	getUserInfo();

	initPage();

	if (1 == isLogin) {

	} else if (0 == isLogin){

	} else {

	}
}

function call_back_func () {
	// body...
	console.log();
}

function getUserInfo () {
	console.log("URL = " + document.URL);
	var str = document.location.search;
	var session = str.substring(str.indexOf("session=") + ("session=").length,str.length);
	console.log("session =  " + session);
	if ("" == session) {
		isLogin = 0;
		console.log("isLogin =  " + isLogin);
		return;
	}
	userInfo.session = session;
//	var url = "http://beta.passport.coocaa.com/getInfo/bySessionId?sessionId=" + session;
//	sendHTTPRequest(url, get_user_func);
	$.ajax({
				type: "get",
				async: true,
				url: "http://beta.passport.coocaa.com/getInfo/bySessionId?sessionId=" + session,
				dataType: "jsonp",
				jsonp: "callback",
				success: function(data) {
					var str = JSON.stringify(data)
					console.log("response data string = " + str);
					if ("{}" == str) {
						isLogin = 0;
						console.log("isLogin =  " + isLogin);
						return;
					} else {
						isLogin = 1;
						//console.log("isLogin =  " + isLogin);
						console.log("response data username  = " + data.nick_name);
						userInfo.user_name = data.nick_name;
						userInfo.user_img = data.avatar;
						userInfo.user_mobile = '';

						console.log("response data open_id  = " + data.open_id);
						console.log("response data avatar  = " + data.avatar);
						console.log("response data mobile  = " + data.mobile);
					}	
		 		},
				error: function() {
					console.log("jsonp error!");
				}
			});

}

function get_user_func () {

 if (xmlhttp.readyState == 4) {
        console.log("this.status = " + this.status);
        console.log("this.responseText = " + this.responseText);
        if (xmlhttp.status == 200)
        {

        }
    }
}




function initPage () {
	document.getElementById('firstPagrButton').focus();
	document.getElementById("firstPagrButton").addEventListener("click",experienceonclick ,false);

}

function experienceonclick(){
	console.log("isLogin = " + isLogin);
	if(isLogin == 0){
		document.getElementById("bg").style.display="block";
		document.getElementById("loadButtDiv").style.display="block";
		document.getElementById('loadButt').focus();
    }   
    else{
    	secondPage();
		document.getElementById('firstPage').style.display="none";
		document.getElementById('indexhtml').style.display="block"; 
    	document.getElementById('moreinfo_speciallyeffect').focus();	            
    }
}

function secondPage(){

	//$("#islogin").text(message.haslogin);

	//

	//TODO USR NAME
	$("#button-logo-3").text(userInfo.user_name);
	//TODO USR IMG

	$("#button-logo-2").attr("src",userInfo.user_img);

	//TODO Left times;
	//$("#text_info-40").text(activiInfo.left_times);
	//$("#drawleftnum").text(lotterynumber);
	$("#accesstoken").text(userInfo.session);
	//TODO mobile
	$("#temp_userphonenumber").text(userInfo.user_mobile);
	start_call_func();
}

function sendHTTPRequest(url, func)
{

  if (xmlhttp == null)
  {
    if (window.XMLHttpRequest) 
    {
      xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  if (xmlhttp != null)
  {
    xmlhttp.onreadystatechange = func;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  else 
  {
    console.log("php is null");
  }
}

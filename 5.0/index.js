
var isLogin = 1; // -1 is initial, 0 is no login, 1 is logined 
var img_src = __uri('images/caizhi.png');

var userInfo = {"user_name" : "第五空间", "user_img": img_src, "user_mobile":"13863556925"};
var activiInfo = {"left_times":0};
window.onload = function () {

	getUserInfo();

	initPage();

	if (1 == isLogin) {

	} else if (0 == isLogin){

	} else {

	}
}

function getUserInfo () {
	

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
	$("#text_info-40").text(activiInfo.left_times);
	//$("#drawleftnum").text(lotterynumber);

	//TODO mobile
	//$("#temp_userphonenumber").text(userInfo.user_mobile);
	
}


var app = {
	canonical_uri: function(src, base_path) {
		var root_page = /^[^?#]*\//.exec(location.href)[0],
			root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
			absolute_regex = /^\w+\:\/\//;
		// is `src` is protocol-relative (begins with // or ///), prepend protocol  
		if (/^\/\/\/?/.test(src)) {
			src = location.protocol + src;
		}
		// is `src` page-relative? (not an absolute URL, and not a domain-relative path, beginning with /)  
		else if (!absolute_regex.test(src) && src.charAt(0) != "/") {
			// prepend `base_path`, if any  
			src = (base_path || "") + src;
		}
		// make sure to return `src` as absolute  
		return absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src);
	},

	rel_html_imgpath: function(iconurl) {
		console.log(app.canonical_uri(iconurl.replace(/.*\/([^\/]+\/[^\/]+)$/, '$1')));
		return app.canonical_uri(iconurl.replace(/.*\/([^\/]+\/[^\/]+)$/, '$1'));
	},

	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener("backbutton", this.handleBackButton, false);
	},
	handleBackButton: function() {
		console.log("Back Button Pressed!");
		var countflag = 0;
		var losefocusid;
		var j = 0;
		var toastids = document.getElementsByClassName("toast");
		if(document.getElementById('firstPage').style.display=="block"){
			navigator.app.exitApp();
		}
		for (j = 0; j < toastids.length; j++) {
			var status = toastids[j].style.display;
			console.log(j + "toast display:" + toastids[j].style.display);
			if (status != "block") {
				countflag++;
			} else {
				losefocusid = j;
			}
		}
		console.log("--------countflagtwo-----" + countflag + "----" + toastids.length);
		console.log("--------losefocusid-----" + losefocusid);
		if (countflag == toastids.length) {
			// navigator.app.exitApp();			
			document.getElementById('firstPage').style.display="block";
        	document.getElementById('indexhtml').style.display="none";
        	document.getElementById('firstPagrButton').focus();
		} else {
			if (losefocusid == 5) {
				var back = document.getElementById("toast-back-warm");
				if (back.style.display == "none") {
					back.style.display = "block";
				} else {
					back.style.display = "block";
				}
				document.getElementById("button-back-3-2").focus();
				$("#button-img-5-1").attr("disabled", "disabled");
				$("#indexhtml :button").attr("disabled", "disabled");
				console.log("--------countflag === 5 ---------" + countflag);
			} else if (losefocusid == 6) {
				var back = document.getElementById("toast-back-warm");
				if (back.style.display == "none") {
					back.style.display = "block";
				} else {
					back.style.display = "block";
				}
				document.getElementById("button-back-3-2").focus();
				$("#div-toast-img-6 :button").attr("disabled", "disabled");
				$("#indexhtml :button").attr("disabled", "disabled");
			} else if (losefocusid == 7) {
				var back2 = document.getElementById("toast-back-warm");
				if (back2.style.display == "none") {
					back2.style.display = "block";
				} else {
					back2.style.display = "block";
				}
				document.getElementById("button-back-3-2").focus();
				$("#toost-back-warm :button").attr("disabled", "disabled");
				$("#div-toast-text-7 :button").attr("disabled", "disabled");
				$("#indexhtml :button").attr("disabled", "disabled");
			} else if (losefocusid == 11) {
				window.location.href = 'index.html';
			} else {
				for (var i = 0; i < toastids.length; i++) {
					$("#form-info-9-2").empty();
					//console.log("The toastid in handleBackButton is(<7) " + toastids[i].id);
					if (toastids[i].style.display == "block") {
						toastids[i].style.display = "none";
					} else {
						toastids[i].style.display = "none";
					}
					var ul2 = document.getElementById("deviceready");
					if (ul2.style.display == "none") {
						ul2.style.display = "block";
					} else {
						ul2.style.display = "block";
					}
					$("#indexhtml :button").removeAttr("disabled");
					document.getElementById("startdDraw").focus();
				}
				console.log("--------countflagthree---------" + countflag);
			}
		}
		//navigator.app.exitApp();
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
		app.triggleButton();
		coocaaosapi.hasCoocaaUserLogin(function(message) {
            // console.log("haslogin " + message.haslogin);
            loginstatus = message.haslogin;
            console.log("haslogin " + loginstatus);
        },function(error) { console.log(error);});
        document.getElementById('firstPagrButton').focus();

	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		// var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelectorAll('.received');

		// listeningElement.setAttribute('style', 'display:none;');
		for (var i = 0, j = receivedElement.length; i < j; i++) {
			receivedElement[i].setAttribute('style', 'display:block;');
		}
		/*receivedElement.setAttribute('style', 'display:block;');*/
		document.getElementById('firstPagrButton').focus();
		console.log('Received Event: ' + id);
	},
	triggleButton: function() {
		cordova.require("coocaa-plugin-coocaaosapi.coocaaosapi");
		//点击立即抽奖
		document.getElementById("firstPagrButton").addEventListener("click",experienceonclick ,false);

        //点击APK图标
        document.getElementById("apkbutt1").addEventListener("click",Apkclick ,false);
        document.getElementById("apkbutt2").addEventListener("click",Apkclick ,false);
        document.getElementById("apkbutt3").addEventListener("click",Apkclick ,false);
        document.getElementById("apkbutt4").addEventListener("click",Apkclick ,false);
        document.getElementById("apkbutt5").addEventListener("click",Apkclick ,false);
        document.getElementById("apkbutt6").addEventListener("click",Apkclick ,false);

        document.getElementById("button-nologin-3-1").addEventListener("click", function() {
        	var ul = document.getElementById("div-toast-img-12");
        	if (ul.style.display == "none") {
        		ul.style.display = "block";
        	} else {
        		ul.style.display = "block";
        	}
        	var ul = document.getElementById("toast-nologin-warm");
        	if (ul.style.display == "block") {
        		ul.style.display = "none";
        	} else {
        		ul.style.display = "none";
        	}
        	coocaaosapi.startUserSetting(function(message) {
        		console.log(message);
        	}, function(error) {
        		console.log(error);
        	});
        }, false);

    }
};

app.initialize();

function Apkclick(obj){
	var apk = obj.currentTarget.children;
	console.log(apk);
	var apkName = apk[0].getAttribute("apkName");
	coocaaosapi.startOrInfor(
		apkName,
		function(message) {console.log(message); },
		function(error) { console.log(error);}
		);

}

function experienceonclick(){
	console.log("status"+loginstatus);
	if(loginstatus=="false"){
		coocaaosapi.startUserSettingAndFinish(function(message)  {console.log(message); },function(error){console.log(error);});
        // document.getElementById('getimmediate').src="images/3.png";
        coocaaosapi.addUserChanggedListener(function(message){
        	console.log(message);
        	secondPage();
        	document.getElementById('firstPage').style.display="none";
        	document.getElementById('indexhtml').style.display="block";
        	document.getElementById('moreinfo_speciallyeffect').focus();
        	loginstatus = "true";
        });
    }   
    else{
    	secondPage();
		document.getElementById('firstPage').style.display="none";
		document.getElementById('indexhtml').style.display="block"; 
    	document.getElementById('moreinfo_speciallyeffect').focus();	            
    }

}

function secondPage(){
	coocaaosapi.hasCoocaaUserLogin(function(message) {
		console.log("haslogin " + message.haslogin);
		if (message.haslogin == "true") {
			console.log("haslogin two:" + message.haslogin);
			$("#islogin").text(message.haslogin);
			var ul1 = document.getElementById("button-been-logo");
			if (ul1.style.display == "none") {
				ul1.style.display = "block";
			} else {
				ul1.style.display = "block";
			}

			coocaaosapi.getUserInfo(function(message) {
				console.log("external_info " + message.external_info);
				console.log("open_id " + message.open_id);
				console.log("mobile "+message.mobile);
				console.log("nick_name "+message.nick_name);
				$("#button-logo-3").text(message.nick_name);
				var name_ss = $("#button-logo-3").text();
				console.log("------name_ss---------"+name_ss);
				$("#userOpenId").text(message.open_id);

					//这里用来验证如果信息里包含手机号的情况
					$("#temp_userphonenumber").text(message.mobile);
					var allnumber = $("#temp_userphonenumber").text();
					console.log("----allnumber---"+allnumber);
					
				}, function(error) {
					console.log(error);
				});

			} else {
				console.log("haslogin three:" + message.haslogin);
				$("#islogin").text(message.haslogin);
			}
		}, function(error) {
			console.log(error);
		});

		coocaaosapi.getDeviceInfo(function(message) {
			console.log("panel " + message.panel);
			console.log("version " + message.version);
			console.log("model " + message.model);
			console.log("chip " + message.chip);
			console.log("mac " + message.mac);
			console.log("chipid " + message.chipid);
			console.log("androidsdk " + message.androidsdk);
			console.log("devid " + message.devid);
			console.log("activeid " + message.activeid);
			$("#macaddressnum").text(message.mac);
		}, function(error) {
			console.log(error);
		});

coocaaosapi.getUserAccessToken(function(message) {
	if (message.accesstoken != null) {
		console.log("usertoken " + message.accesstoken);
		$("#accesstoken").text(message.accesstoken);
	} else {}
}, function(error) {
	console.log(error);
});
}
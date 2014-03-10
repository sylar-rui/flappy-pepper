$(document).ready(function() {
	var random_bg = Math.floor(Math.random() * 12 + 1);
	var bg = 'url(images/bg/bg' + random_bg + '.jpg)';
	$("body").css("background-image", bg);
});

function ischeckepwd() {
	if (document.getElementById("pwd").value != document.getElementById("pwd_check").value) {
		document.getElementById("pwdmsg").innerHTML = "两次输入的密码不一致,请检查";
	} else {
		document.getElementById("pwdmsg").innerHTML = "";
	}
}

function ischeckemail() {
	var email = document.getElementById("email").value;
	$("#emailmsg").empty();
	if (email != "") {
		var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		isok = reg.test(email);
		if (!isok) {
			$("#emailmsg").append("邮箱输入错误，请检查");
			document.getElementById("email").focus();
			return false;
		}
	};
}

$(".register_display,.register_close").bind("click", function() {
	$(".registerform").slideToggle("slow");
	return false
});
$(".lostpassword_display,.lostpassword_close").bind("click", function() {
	$(".lostpasswordform").slideToggle("slow");
	return false
});

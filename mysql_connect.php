<?php	
function(){
	$db = mysql_connect("localhost","root","johndeere1") 
	or die("连接数据库失败！");
	echo ('<p>Connectted to MySQL!</p>');
	mysql_select_db("FlappyPepper")
	or die ("不能连接到user".mysql_error());
	echo ('<h1>Welcome</h1>');
	echo ('<p>Connected to Database FlappyPepper!</p>');
}
?>
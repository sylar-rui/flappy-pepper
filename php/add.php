<?php
require 'conn.php';

$name = $_POST["name"];
$email = $_POST["email"];
$web = $_POST["web"];
$content = $_POST["content"];
// 替换换行和空格
$content = str_replace("\n", "<br/>", str_replace(" ", "&nbsp;", $content));

// sql
$sql = "INSERT INTO comment ".
		"VALUES('','$name','$email','$web','$content',now())";

mysql_query($sql);

//重定向浏览器
header("Location: http://localhost/comment/");
//确保重定向后，后续代码不会被执行
exit;

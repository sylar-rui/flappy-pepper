<?php
	require_once 'mysql_connect.php';
	$name = $_POST['name'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$pwd_check = $_POST['pwd_check'];
	echo "string";

	$sql="INSERT INTO users (name, email, password) VALUES ('$name','$email','$password')";
	$result=mysql_query($sql);
	if(!$result){
		echo"Failed to Register";
	}else {
		echo"Registered Successful!";
	}
?>
<html>
	<head>
		<title>Connect to mySQL server</title>
	</head>
	<body>
		<h1>Welcome</h1>
		<?php 
			$mysqlConnected = @mysql_connect('localhost','root','johndeere1');
			if (!$mysqlConnected) {
				exit('<p>Unable to connect to MySQL now</p>');
			}else {
				echo ('<p>Connectted to MySQL!</p>');
                                $myDatabaseConnect =@mysql_select_db('FlappyPepper', $mysqlConnected);
                                if (!$myDatabaseConnect){
                                	exit('<p>Unable to connect to your database now!</p>');
                                } else {
                                	echo ('<p>Connected to Database FlappyPepper!</p>');
                                // 	$sql = "CREATE TABLE OwnerProfile(
                                // 			owner varchar(20),
                                // 			id varchar(10) 
                                // 			)";
                                // 	$sqlSelect = "SELECT * FROM pet";
                                // 	if(!@mysql_query($sql)){
                                // 		echo ('<p>SQL Query CREATE TABLE Failed!</p>');
                                // 	} else {
                                // 		echo ('<p>Table OwnerProfile Created!</p>');
                                // 	}
                                // 	if(!$result = @mysql_query($sqlSelect)){
                                // 		echo ('<p>SQL Query SELECT Failed!</p>');
                                // 	} else {
                                // 		while($row = mysql_fetch_array($result)){
                                // 			echo ('<p>'.$row['owner'].'</p>');
                                // 		}
                                // 	}
                                // }
			}
		?>
	</body>
</html>
<?php
 $conn = @mysql_connect("localhost", "root", "") or die("获取连接失败");
 mysql_select_db("test");
 
 //$sql = "SELECT * FROM comment";

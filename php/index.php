<?php 
	require 'conn.php';
	
	@$page = $_GET["p"];
	if($page == null){
		$page = 0;
	}
	$num = $page*3;
	
	$sql = "SELECT * FROM comment ORDER BY time LIMIT $num,3";
	$result = mysql_query($sql);
	
	$sql2 = "SELECT count(*) FROM comment";
	$result2 = mysql_query($sql2);
	$row = mysql_fetch_row($result2);
	$count = $row[0]/3
?>
<!DOCTYPE table PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>comment</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>

<!-- 评论列表 -->
<table width="100%">
  <?php 
  	while($row = mysql_fetch_array($result)){
  ?>
  <tr>
    <td width="90px" align="center">
    	<img src="http://www.gravatar.com/avatar/<?= md5($row['email']) ?>s=120" alt="Gravatar" id="userimg"><br>
    	<a href="<?= $row['web'] ?>" alt="<?= $row['name']?>"><?= $row['name']?></a>
    </td>
    <td valign="top">
    	<div style="margin-top: 5px;">
    		<?= $row['time']?>
    	</div>
    	<hr>
    	<div>
    		<?= $row['content']?>
    	</div>
    </td>
  </tr>
  <?php 
  	}
  ?>
</table>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;
<?php 
for($i=0;$i<$count;$i++){
	if($i == $page){
		echo ($i+1)."&nbsp;";
	}else{
		echo "<a href='index.php?p=$i'>".($i+1)."</a>&nbsp;";
	}
}
?>
<br><br>

<!-- 评论框 -->
<form action="add.php" method="post" style="float: left;">
	<table>
		<tr>
			<td align="right">
				姓名：
			</td>
			<td>
				<input type="text" name="name">
			</td>
		</tr>
		<tr>
			<td align="right">
				邮箱：
			</td>
			<td>
				<input type="text" name="email">
			</td>
		</tr>
		<tr>
			<td align="right">
				Web：
			</td>
			<td>
				<input type="text" name="web">
			</td>
		</tr>
		<tr valign="top">
			<td align="right">
				留言：
			</td>
			<td>
				<textarea rows="15" cols="80" name="content"></textarea>
			</td>
		</tr>
		<tr>
			<td>
				&nbsp;
			</td>
			<td>
				<input type="submit" value="提交">
			</td>
		</tr>
	</table>
</form>

</body>
</html>
<html>

<head>
<title> dirtPage </title>
<link rel="stylesheet" href="styles.css" type="text/css">
</head>



 
<script type="text/javascript">
function increaseScore(i, topic)
{
	
	document.increasescore.message.value = i;
document.increasescore.topic.value = topic;
 document.increasescore.submit()
	
}

function searchExact(topic)
{
	
	document.searchexact.topic.value = topic;
 document.searchexact.submit()
	
}

</script>
 

 
<body>
<SCRIPT LANGUAGE="JavaScript" SRC="navbar.js">
</SCRIPT>
 

<form name="increasescore" action="increasescore5.php" method="post">
<input type="hidden" name="message" value="fred">
<input type="hidden" name="topic">
</form>

 <form name="searchexact" action="searchexact5.php" method="post">
<input type="hidden" name="topic" value="fred">
</form>

<?php

 

mysql_connect("dirtpage1.db.6263223.hostedresource.com", "dirtpage1", "Jason7734") or die(mysql_error());
mysql_select_db("dirtpage1") or die(mysql_error());
echo "<h3> <i> dirtpage log </i>    </h3>  ";
$query = "SELECT * FROM people ORDER BY id ASC LIMIT 10000"; 
$result = mysql_query($query) or die(mysql_error());




while($row = mysql_fetch_array($result)){
	
	
	
	
	
	
	?>    
 <A HREF="javascript:void(0)" onClick= 'searchExact("<?php echo $row['person']; ?>")'> 
	
	<?php
	
echo    "<span class = \"comment\">".   " (" . $row['origin'] . ") - ". "</span><span class = \"topic\">" .$row['person'] . " : " . "</span></a>" . 
	"<span class = \"comment\">"     .  
	$row['comment'] . "</span>"     ;
	
		
		 
	
	echo "<br />";
echo "<br />";
	}


?>
</body>

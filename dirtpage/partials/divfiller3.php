<?php

$theirName = strtolower($_GET['topic']);
$change = $_GET['change'];
$messageNumber = $_GET['messagenumber'];

mysql_connect("dirtpage1.db.6263223.hostedresource.com", "dirtpage1", "Jason7734") or die(mysql_error());
mysql_select_db("dirtpage1") or die(mysql_error());
include("functions.php"); 

 mysql_query("delete from feed where event = '$theirName'") or die(mysql_error());  
mysql_query("INSERT INTO feed
(type, event) VALUES(\"view\", '$theirName')")
or die(mysql_error());  

 
//	   
//MAIN QUERY
//
echo "<A HREF=\"http://www.dirtpage.com/page/" . $theirName . "\"><span class=\"topic\">" . $theirName . "</span></a>";

echo "<div class = \"options\">"  ?><A HREF="http://www.dirtpage.com/page/<?php echo str_replace(" ", "+", $theirName); ?>"><?php             echo "<span class = \"goto\">main page - </a></span>";
 ?><A HREF="http://www.dirtpage.com/results/<?php echo str_replace(" ", "+", $theirName); ?>"><?php       
 echo "<span class = \"search\">search</span></a><br></div>";


$query = "SELECT * FROM people
WHERE person = '$theirName'
ORDER BY rank DESC limit 50"; 
	 
$result = mysql_query($query) or die(mysql_error());
echo"<ol>";
while($row = mysql_fetch_array($result)){
	
echo  "<span class = \"m\"><li>" . hyper($row['comment']) . "</span>";

 
?>

<br><br>
 
<?php } echo "</ol></span>"?>




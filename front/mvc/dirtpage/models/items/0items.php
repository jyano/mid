<head>

<link rel="stylesheet" href="http://www.dirtpage.com/styles.css" type="text/css">

</head>

<body>


<?php

$topic = trim($_GET['topic']);
$newMessage = $_GET['newmessage'];
$act = $_GET['act'];
$change = $_GET['change'];
$messageNumber = $_GET['messagenumber'];
 
 mysql_connect("dirtpage1.db.6263223.hostedresource.com", "dirtpage1", "Jason7734") or die(mysql_error());
mysql_select_db("dirtpage1") or die(mysql_error());
include_once('../phpfunctions.php');

//	   
//MAIN QUERY
//

$query = topic.find(topic like '$topic').exec(function(z,res){

})

_.e(res, function(row){

$.sp( style = \"float: right\").A( views: "row.num_views )


$.sp( class=\"pinktitle\">").A( strtolower($topic) )


&nbsp;";


$.sp(class = \"bigyellow\">").A(  "(" +rowscore+ ")" )
if( $odd = $row['score']%2 ) {
$pic1 = "http://www.dirtpage.com/thumbgray.jpg";
$class1 = "topic_up";
$pic2 = "http://www.dirtpage.com/thumbdowngray.jpg";
$class2 = "topic_down";}
else {$pic2 = "http://www.dirtpage.com/thumbgray.jpg"; $class2 = "topic_up"; $pic1 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class1 = "topic_down";   }?>

<a href="javascript:void(0)"> <img class = <?php echo $class1; ?>   src="<?php echo $pic1; ?>" height = "3%" border = "0"/> </a>
<a href="javascript:void(0)"> <img class = <?php echo $class2; ?>  src="<?php echo $pic2; ?>"  height = "3%" border = "0"/> </a>

<?php

echo "<img src=\"/../../../x/graphics/reload.jpg\" height = \"21px\" class=\"refresh\">";  
echo "<A HREF=\"../../../x/search.php?topic=" . str_replace(" ", "+", $topic) . "\"><img src=\"/../../../x/graphics/search.jpg\" height = \"26px\"></a>&nbsp;";  
echo "<span style = \"float: clear\" class=\"tinygreen\"><br>created by anonymous some time ago</span>"; 

})



?>

<br>
<br />

   



<form  name="post_message"id="post_message" onSubmit="return false;"><br />
</h1>
<input type="hidden" name="topic" value= <?php echo "\"$topic\"" ?>>
<input type="hidden" name="act" value="postmessage">
<table class="smallpink"><tr><td width = 180><span id="post">post a new message: </span></td>
<td width = 350><input type="text" name="newmessage" size="63" value="" maxlength="125" autocomplete="off"></td>
<td><input id="button" type="submit" value="post"></td></tr></table>
</form>


<form enctype="multipart/form-data" action="http://www.dirtpage.com/x/upload.php" method="post">
<input type="hidden" name="topic" value= <?php echo "\"$topic\"" ?>>
<input type="hidden" name="MAX_FILE_SIZE" value="10000000" />
<table class = "smallpink" ><tr><td width = 180> post a new picture: </td>
<td width = 350><input name="uploaded_file" type="file" value="add new pic"  /></td>
<td><input type="submit" value="post" /></td></tr></table>
</form> <br />


 

<?php
// QUERY
$query = "SELECT 'messages' as table_name, message as item, score, message_id as item_id
        FROM messages WHERE topic = '$topic' 
        UNION
        SELECT 'pictures' as table_name, picture as item, score, picture_id as item_id
        FROM pictures WHERE topic = '$topic' 
        ORDER BY score DESC";
$result = mysql_query($query) or die(mysql_error());
$i = 0;

while($row = mysql_fetch_array($result)){ $i ++;
	

// MESSAGES
if 	($row['table_name'] == 'messages') { 
echo  "<table ><tr ><td valign=\"top\"><span class=\"smallyellow\">$i.</span></td>";
echo "<td valign=\"top\" width= \"600\" style=\"padding-left:5px; \">
<span class = \"smallwhite\">" . hyper($row['item']) . "</span>"   .  "<span class = \"smallyellow\">".  " (" . $row['score']. ") </span> ";
if( $odd = $row['score']%2 ) {$pic1 = "http://www.dirtpage.com/thumbgray.jpg"; $class1 = "message_up"; $pic2 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class2 = "message_down";}
else {$pic2 = "http://www.dirtpage.com/thumbgray.jpg"; $class2 = "message_up"; $pic1 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class1 = "message_down";   }?>
<a href="javascript:void(0)"> <img class = <?php echo $class1; ?> name ="<?php echo $row['item_id']; ?>"  src="<?php echo $pic1; ?>" height = "80%" border = "0"/> </a>
<a href="javascript:void(0)"> <img class = <?php echo $class2; ?> name ="<?php echo $row['item_id']; ?>" src="<?php echo $pic2; ?>"  height = "80%" border = "0"/> </a>
<?php echo "<a href = \"http://www.dirtpage.com/x/page.php?topic=". $topic . "&mode=message&message=". $row['item_id'] . "\">"?> <span name="<?php echo $row['item_id']; ?>"><image src = "../../../x/graphics/deeper2.jpg" border = "0" height = "80%"></a>

<br></td>
</tr></table>
<?php  
}
	
	
//PICTURES	
if 	($row['table_name'] == 'pictures') {
echo "<table ><tr ><td valign = \"top\"><span class=\"smallyellow\"> $i.</span> </td>";
echo "<td valign = \"top\">&nbsp;<img src=\"../../../../x/pictures/".  $row['item'] . "\" height=\"150\" border=\"black\"></td>";
echo "<td valign = \"top\">"; 
echo  "<span class = \"t\">".  " (" . $row['score']. ") </span><br> ";
if( $odd = $row['score']%2 ) {$pic1 = "http://www.dirtpage.com/thumbgray.jpg"; $class1 = "picture_up"; $pic2 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class2 = "picture_down";}
else {$pic2 = "http://www.dirtpage.com/thumbgray.jpg"; $class2 = "picture_up"; $pic1 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class1 = "picture_down";   }?>
<a href="javascript:void(0)"> <img class = <?php echo $class1; ?> name ="<?php echo $row['item_id']; ?>"  src="<?php echo $pic1; ?>" border = "0" height = "80%"/> </a><br>
<a href="javascript:void(0)"> <img class = <?php echo $class2; ?> name ="<?php echo $row['item_id']; ?>" src="<?php echo $pic2; ?>"  border = "0" height = "80%"/> </a><br>
<?php echo "<a href = \"http://www.dirtpage.com/x/page.php?topic=". $topic . "&mode=picture&picture=". $row['item'] . "\">"?> <span name="<?php echo $row['item_id']; ?>"><image src = "../../../x/graphics/deeper2.jpg" border = "0" height = "80%"></span></a>

<?php

echo "</td><td valign = \"bottom\" style=\"padding-left:20px; padding-right:70px;\"><span class = \"smallred\">";




// CAPTION
$item = $row['item'];
$query2 = "SELECT * FROM captions WHERE picture = '$item' ORDER BY score DESC limit 1"; 
$result2 = mysql_query($query2) or die(mysql_error()); 
while($row2 = mysql_fetch_array($result2))
{echo ($row2['caption']) ;}




echo "</span><br><br></td></tr></table>";
}
	
	
echo "<br>";
}
?>









<script type="text/javascript" src="http://www.dirtpage.com/jsfunctions.js"></script>



<script type="text/javascript">

  
</script>
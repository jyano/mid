
<?php
include_once('../phpfunctions.php');
$picture = $_GET['picture'];
$topic = $_GET['topic'];
$message_id = $_GET['message'];
  mysql_connect("dirtpage1.db.6263223.hostedresource.com", "dirtpage1", "Jason7734") or die(mysql_error());
mysql_select_db("dirtpage1") or die(mysql_error());

$query = "SELECT * FROM messages WHERE message_id = '$message_id' ORDER BY score ASC"; 
$result = mysql_query($query) or die(mysql_error()); 
while($row = mysql_fetch_array($result)){


echo "<table cellspacing=\"5\"><tr><td>";
echo "<A HREF=\"page.php?topic=" . str_replace(" ", "+", $topic). "\"><img src=\"../../../x/graphics/back_arrow.jpg\"></a></td>";
  
echo "<td><span class=\"pinktitle\">" . strtolower($topic) . "</span></td></tr></table>";





echo "<br><div class=\"hugered\" style=\"padding:20px;\">" .  $row['message']."</div>"; 

}  
  
?>
<form name="post"id="post_response" onSubmit="return false;"><br />
</h1><span id="post">&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="new_response" size="65" value="" maxlength="125" autocomplete="off"></span>
<input id="button" type="submit" value="post new response">
</form> 
<?php



  
$query = "SELECT * FROM responses WHERE message_id = '$message_id' ORDER BY score DESC"; 
$result = mysql_query($query) or die(mysql_error());
$i=0; 
 while($row = mysql_fetch_array($result)){$i++;
 echo "<span class=\"smallyellow\">$i.&nbsp;&nbsp;</span>";
echo  "<span class = \"message\">" . hyper($row['response']) . "</span>"   .  "<span class = \"t\">".  " (" . $row['score']. ") </span>&nbsp; ";
if( $odd = $row['score']%2 ) {$pic1 = "http://www.dirtpage.com/thumbgray.jpg"; $class1 = "up"; $pic2 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class2 = "down";}
else {$pic2 = "http://www.dirtpage.com/thumbgray.jpg"; $class2 = "up"; $pic1 = "http://www.dirtpage.com/thumbdowngray.jpg"; $class1 = "down";   }?>
<a href="javascript:void(0)"> <img class = <?php echo $class1 ?> name ="<?php echo $row['response_id']; ?>"  src="<?php echo $pic1 ?>" border = "0"/> </a>
<a href="javascript:void(0)"> <img class = <?php echo $class2 ?> name ="<?php echo $row['response_id']; ?>" src="<?php echo $pic2 ?>"  border = "0"/> </a><span class ="del" name="<?php echo $row['id']?>"> </span>
 <br><br> 
 <?php } 
 
 
 
 ?>
 
 

 

<script type="text/javascript" src="http://www.dirtpage.com/jsfunctions.js"></script>



<script type="text/javascript">


// set posting

$('#post_response').submit(function() {
$.get("http://www.dirtpage.com/x/datacalls.php", {message_id: <?php echo "\"$message\"" ?>, new_response: document.post.new_response.value, act: "post_response"}, function()
{
$.get("http://www.dirtpage.com/x/divfillers/message.php", {message: <?php echo "\"$message_id\"" ?>, topic: <?php echo "\"$topic\"" ?>}, function(data) {
$('#holder').html(data);});
})});
 
 
 // set voting



$('.up').click(function() {
$.get("http://www.dirtpage.com/x/datacalls.php", {response_id: this.name, act: "response_up"}, function() {
$.get("http://www.dirtpage.com/x/divfillers/message.php", {topic: <?php echo "\"$topic\"" ?>, message: <?php echo "\"$message_id\"" ?>}, function(data) {
$('#holder').html(data);}); });
});



$('.down').click(function() {
$.get("http://www.dirtpage.com/x/datacalls.php", {response_id: this.name, act: "response_down"}, function() {
$.get("http://www.dirtpage.com/x/divfillers/message.php", {topic: <?php echo "\"$topic\"" ?>, message: <?php echo "\"$message_id\"" ?>}, function(data) {
$('#holder').html(data);}); });
});

  
  
// set delete
$('.del').click(function(){    $j = $(this).attr("name");   if ("<?php echo $_SESSION['admin']?>" == "yes") {
$.get("http://www.dirtpage.com/datacalls", {topic: <?php echo "\"$theirName\"" ?>, messagenumber: $j, act: "deletemessage"}, function() {
$.get("http://www.dirtpage.com/captiondivfiller.php", { topic: <?php echo "\"$theirName\"" ?>}, function(data) {
$('#output').html(data);});} 
);} 
else{alert("you don't have administrator access.. idiot")} }); 
  

  

  
// TEMP DISABLE set 'search' button
  
//$('#output .search').mouseenter(function(){ 
//$.get("http://www.dirtpage.com/minisearchfiller.php", {topic: $(this).attr('name')},  function(data) {
//$('.results').html(data);	  }     ); 
//$('.results').fadeIn("slow");
//});

  
</script>
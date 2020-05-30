<?php
if($_POST){
	$led=$_POST['led'];
	$myfile = fopen("output.txt", "w") or die("Unable to open file!");
	$content="Led is: ".$led;
	fwrite($myfile, $content);
	fclose($myfile);
	echo "Output file updated!<br>";
	echo $content;
}
?>
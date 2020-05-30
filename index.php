<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	</head>
	<body>
        <div>Quynh</div>
		<?php
			$myfile = fopen("input.txt", "r") or die("Unable to open file!");
			$input = fread($myfile,filesize("input.txt"));
			$input = str_replace("\n","<br />",$input);
			echo $input;
			fclose($myfile);
		?>
	
		<form id="form_led">
			<label for="led">LED</label>
			<select id="led" name="led">
				<option value="on">On</option>
				<option value="off">Off</option>
			</select>
			<button id="submit">Submit</button>
		</form>
		<script type="text/javascript">
		$(document).ready(function(){
			$("#submit").click(function()
			{
				var form_data = $('form#form_led').serialize();
				$.ajax({
				type : 'POST', 
				url  : 'action.php',
				data : form_data,
				success :  function(form_data)
					   {                       
							if(form_data == 'false')
							{
								alert('Something wrong happened!');
							}else{
								$('#request_content').html(form_data);
							}
					   }
				});
				return false;
			});
		});
		</script>
		<div id="request_content"></div>
	</body>
</html>
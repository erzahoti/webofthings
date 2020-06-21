/**
    Change light's status
**/
$('#selectLight').on('change', function (e) {
        var status = $(this).children("option:selected").val();
        $.ajax({
          url: "/changeLight",
          type: "POST",
          data: {'status': status},
          dataType: "json",
          success: function(result) {
          if(result==="1"){
			    $('#lightStatus').text("Current status: ON");
            } else {
		        $('#lightStatus').text("Current status: OFF");
            }
          },
		  error: function(error) {
			console.log(error);
		  }

        });
});


/**
    Read Light status
**/
$.ajax({
		url: '/readLight',
		type: 'GET',
		success: function(response){
			$("#selectLight").val(response);
			 if(response==="1"){
			    $('#lightStatus').text("Current status: ON");
            } else {
		        $('#lightStatus').text("Current status: OFF");
            }
		},
		error: function(error){
			console.log(error);
		}
});


/**
    Read Temperature status
**/
$.ajax({
		url: '/readTemp',
		type: 'GET',
		success: function(response){
			$('#tempStatus').text("Current status: "+response+"°");
		},
		error: function(error){
			console.log(error);
		}
});


/**
    Read Humidity status
**/
$.ajax({
		url: '/readHum',
		type: 'GET',
		success: function(response){
			$('#humStatus').text("Current status: "+response+"%");
		},
		error: function(error){
			console.log(error);
		}
});




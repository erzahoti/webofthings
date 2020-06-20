// FOLOOCA RASPBERRY PI REST APIs.

/**
    Change light's status
**/

$('#selectLight').on('change', function (e) {
        var status = $(this).children("option:selected").val();
        $.ajax({
          url: "https://raspwot.testwot.iot.felooca.eu/changeLight",
          type: "POST",
          data: {'status': status},
          dataType: "json",
          success: function(result) {
            if(result=="1"){
			    $('#lightStatus').text("Current status: ON");
            } else {
		        $('#lightStatus').text("Current status: OFF");
            }
          }
        });
});


/**
    Read Light status
**/
$.ajax({
		url: 'https://raspwot.testwot.iot.felooca.eu/readLight',
		type: 'GET',
		success: function(response){
			$("#selectLight").val(response[0]);
			 if(response[0]==1){
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
		url: 'https://raspwot.testwot.iot.felooca.eu/readTemp',
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
		url: 'https://raspwot.testwot.iot.felooca.eu/readHum',
		type: 'GET',
		success: function(response){
			$('#humStatus').text("Current status: "+response+"%");
		},
		error: function(error){
			console.log(error);
		}
});

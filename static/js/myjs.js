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
          beforeSend: function(x) {
            if (x && x.overrideMimeType) {
              x.overrideMimeType("application/j-son;charset=UTF-8");
            }
          },
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
		url: '/readLight',
		type: 'GET',
		success: function(response){
			var res = response.split(":");
			$("#selectLight").val(parseInt(res[1]));
			console.log(res[1])
			 if(res[1]==1){
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
			var res = response.split(":");
			$('#tempStatus').text("Current status: "+res[1]+"°");
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
			var res = response.split(":");
			$('#humStatus').text("Current status: "+res[1]+"%");
		},
		error: function(error){
			console.log(error);
		}
});
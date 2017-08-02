/*function initMap(){
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl:false,
		zommControl:false,
		streetViewControl:false
	});


/*getCurrentPosition permite al usuario obtener su ubicacion actual, el parametro functionExito se
ejecuta solo cuando el usuario comparte su ubicacion, miestras que funcionError se ejecuta cuando
se produce un error en la geolocalizacion*/
	/*function buscar(){
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);			
		}
	}
	document.getElementById("encuentrame").addEventListener("click",buscar);
	var latitud,longitud;


/*Con funcionExito obtendremos nuestra latitud o longitud y ademas crearemos un marcador de nuestra ubicacion*/
	/*var funcionExito = function(posicion) {
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map
		});

	map.setZoom(17);
	map.setCenter({lat:latitud, lng:longitud});
}

	var funcionError = function (error) {
	alert("Tenemos un problema con encontrar tu ubicacion");
	}
}

initMap();*/


$(document).ready(function(){
		$.ajax({
		url: 'https://api.darksky.net/forecast/f5d360fb438a13b1091a598b835b37eb/-33.4143,-70.6608',
		type: 'GET',
		dataType: 'jsonp',
	})
	.done(function(e) {
		$('#tu-ubicacion').click(function(){
			var primerInput = $('#primer-input').val();
			var segundoInput = $('#segundo-input').val();
			$('#caja-input').append('<p>' + primerInput + '</p>' + '<p>' + segundoInput + '</p>');
			$('#primer-input').val("");
			$('#segundo-input').val("");
		})
		

		$("#encuentrame").click(function(){
			$('#contenedor-info').append('<p>Temperatura: ' + e.currently.temperature + '</p>' + '<p>Humedad: ' + e.currently.humidity + '</p>' + '<p>Indice UV: ' + e.currently.uvIndex + '</p>' + '<p>Presion: ' + e.currently.pressure + '</p>' + '<p>' + e.timezone + '</p>');
			
		})

		var day;
		switch (new Date().getDay()) {
			case 0:
			day = "Sunday";
			break;
			case 1:
			day = "Monday";
			break;
			case 2:
			day = "Tuesday";
			break;
			case 3:
			day = "Wednesday";
			break;
			case 4:
			day = "Thursday";
			break;
			case 5:
			day = "Friday";
			break;
			case  6:
			day = "Saturday";
		}
		console.log(day)
		console.log(new Date())
		var diaActual = $("#demo").append('<h4 class="dia-actual">' + "Today is " + day + '</h4>')
		var minMax = $('#min-max').append('<h6 class="grados">' + 'Min' + ' - ' + 'Max' + '</h6>')
		console.log(e.timezone);
			console.log(e);

			if(day == "Sunday"){
				$('#dias').append('<p>MONDAY: ' + e.daily.data[1].temperatureMin + " - " + e.daily.data[1].temperatureMax + '</p>' + '<p>TUESDAY: ' + e.daily.data[2].temperatureMin + " - " + e.daily.data[2].temperatureMax + '</p>' + '<p>WEDNESDAY: ' + e.daily.data[3].temperatureMin + " - " + e.daily.data[3].temperatureMax + '</p>' + '<p>THURSDAY: ' + e.daily.data[4].temperatureMin + " - " + e.daily.data[4].temperatureMax + '</p>' + '<p>FRIDAY: ' + e.daily.data[5].temperatureMin + " - " + e.daily.data[5].temperatureMax + '</p>' + '<p>SATURDAY: ' + e.daily.data[6].temperatureMin + " - " + e.daily.data[6].temperatureMax + '</p>');
			}
			if(day == "Monday"){
				$('#dias').append('<p>TUESDAY: ' + e.daily.data[2].temperatureMin + " - " + e.daily.data[2].temperatureMax + '</p>' + '<p>WEDNESDAY: ' + e.daily.data[3].temperatureMin + " - " + e.daily.data[3].temperatureMax + '</p>' + '<p>THURSDAY: ' + e.daily.data[4].temperatureMin + " - " + e.daily.data[4].temperatureMax + '</p>' + '<p>FRIDAY: ' + e.daily.data[5].temperatureMin + " - " + e.daily.data[5].temperatureMax + '</p>' + '<p>SATURDAY: ' + e.daily.data[6].temperatureMin + " - " + e.daily.data[6].temperatureMax + '</p>' + '<p>SUNDAY: ' + e.daily.data[0].temperatureMin + " - " + e.daily.data[0].temperatureMax + '</p>');
			}
			if(day == "Tuesday"){
				$('#dias').append('<p>WEDNESDAY: ' + e.daily.data[3].temperatureMin + " - " + e.daily.data[3].temperatureMax + '</p>' + '<p>THURSDAY: ' + e.daily.data[4].temperatureMin + " - " + e.daily.data[4].temperatureMax + '</p>' + '<p>FRIDAY: ' + e.daily.data[5].temperatureMin + " - " + e.daily.data[5].temperatureMax + '</p>' + '<p>SATURDAY: ' + e.daily.data[6].temperatureMin + " - " + e.daily.data[6].temperatureMax + '</p>' + '<p>SUNDAY: ' + e.daily.data[0].temperatureMin + " - " + e.daily.data[0].temperatureMax + '</p>' + '<p>MONDAY: ' + e.daily.data[1].temperatureMin + " - " + e.daily.data[1].temperatureMax + '</p>');
			}
			if(day == "Wednesday"){
				$('#dias').append('<p>THURSDAY: ' + e.daily.data[4].temperatureMin + " - " + e.daily.data[4].temperatureMax + '</p>' + '<p>FRIDAY: ' + e.daily.data[5].temperatureMin + " - " + e.daily.data[5].temperatureMax + '</p>' + '<p>SATURDAY: ' + e.daily.data[6].temperatureMin + " - " + e.daily.data[6].temperatureMax + '</p>' + '<p>SUNDAY: ' + e.daily.data[0].temperatureMin + " - " + e.daily.data[0].temperatureMax + '</p>' + '<p>MONDAY: ' + e.daily.data[1].temperatureMin + " - " + e.daily.data[1].temperatureMax + '</p>' + '<p>TUESDAY: ' + e.daily.data[2].temperatureMin + " - " + e.daily.data[2].temperatureMax + '</p>');
			}
			if(day == "Thursday"){
				$('#dias').append('<p>FRIDAY: ' + e.daily.data[5].temperatureMin + " - " + e.daily.data[5].temperatureMax + '</p>' + '<p>SATURDAY: ' + e.daily.data[6].temperatureMin + " - " + e.daily.data[6].temperatureMax + '</p>' + '<p>SUNDAY: ' + e.daily.data[0].temperatureMin + " - " + e.daily.data[0].temperatureMax + '</p>' + '<p>MONDAY: ' + e.daily.data[1].temperatureMin + " - " + e.daily.data[1].temperatureMax + '</p>' + '<p>TUESDAY: ' + e.daily.data[2].temperatureMin + " - " + e.daily.data[2].temperatureMax + '</p>' + '<p>WEDNESDAY: ' + e.daily.data[3].temperatureMin + " - " + e.daily.data[3].temperatureMax + '</p>');
			}
			if(day == "Friday"){
				$('#dias').append('<p>SATURDAY: ' + e.daily.data[6].temperatureMin + " - " + e.daily.data[6].temperatureMax + '</p>' + '<p>SUNDAY: ' + e.daily.data[0].temperatureMin + " - " + e.daily.data[0].temperatureMax + '</p>' + '<p>MONDAY: ' + e.daily.data[1].temperatureMin + " - " + e.daily.data[1].temperatureMax + '</p>' + '<p>TUESDAY: ' + e.daily.data[2].temperatureMin + " - " + e.daily.data[2].temperatureMax + '</p>' + '<p>WEDNESDAY: ' + e.daily.data[3].temperatureMin + " - " + e.daily.data[3].temperatureMax + '</p>' + '<p>THURSDAY: ' + e.daily.data[4].temperatureMin + " - " + e.daily.data[4].temperatureMax + '</p>');
			}
			if(day == "Saturday"){
				$('#dias').append('<p>SUNDAY: ' + e.daily.data[0].temperatureMin + " - " + e.daily.data[0].temperatureMax + '</p>' + '<p>MONDAY: ' + e.daily.data[1].temperatureMin + " - " + e.daily.data[1].temperatureMax + '</p>' + '<p>TUESDAY: ' + e.daily.data[2].temperatureMin + " - " + e.daily.data[2].temperatureMax + '</p>' + '<p>WEDNESDAY: ' + e.daily.data[3].temperatureMin + " - " + e.daily.data[3].temperatureMax + '</p>' + '<p>THURSDAY: ' + e.daily.data[4].temperatureMin + " - " + e.daily.data[4].temperatureMax + '</p>' + '<p>FRIDAY: ' + e.daily.data[5].temperatureMin + " - " + e.daily.data[5].temperatureMax + '</p>');
			}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
})


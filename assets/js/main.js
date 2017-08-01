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
			console.log(e.timezone);
			console.log(e);
		})
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
})
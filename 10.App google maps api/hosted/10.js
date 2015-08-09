$(function(){
	var map, lat, lng, ruta;

	function cargarRuta(){
		ruta = (localStorage.ruta || "");
		if (ruta != "") ruta = JSON.parse( ruta );
	}

	function guardarRuta(lat,lng){
		if (ruta === "") ruta = [];
		ruta.push([lat,lng]);
		localStorage.ruta = JSON.stringify(ruta);
	}

	function borrar(){
		ruta="";
		localStorage.ruta="";
		geolocalizar();
	}

	function enlazarMarcador(e){
		pintarRuta(e.latLng.lat(),e.latLng.lng());
		guardarRuta(e.latLng.lat(),e.latLng.lng());
	};

	function pintarRuta(destLat,destLng){
		map.drawRoute({
			origin: [lat, lng],
			destination: [destLat,destLng],
			travelMode: 'driving',
			strokeColor: '#000000',
			strokeOpacity: 0.6,
			strokeWeight: 5
		});

		map.addMarker({ lat: destLat, lng: destLng });

		lat = destLat;
		lng = destLng;
	}

	function geolocalizar(){
		GMaps.geolocate({
			success: function(position){
				cargarRuta();
				if (ruta === ""){
					lat = position.coords.latitude;
					lng = position.coords.longitude;
					guardarRuta(lat,lng);
				}else{
					lat = ruta[0][0];
					lng = ruta[0][1];
				}

				map = new GMaps({
					el: '#map',
					lat: lat,
					lng: lng,
					click: enlazarMarcador,
					tap: enlazarMarcador
				});

				map.addMarker({ lat: lat, lng: lng});
				for(var i=1; i<ruta.length; i++){
					pintarRuta(ruta[i][0], ruta[i][1]);
				}

			},
			error: function(error){ alert('Error: '+error.message ); },
			not_supported: function(){ alert('No soporta geolocalizacion'); },
		});
	};

	$('#Reset').on('click', borrar );
	geolocalizar();



});
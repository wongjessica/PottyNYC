var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.7, lng: -73.9},
	zoom: 11
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
	    var pos = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	    };

	    infoWindow.setPosition(pos);
	    infoWindow.setContent('Your Location');
	    infoWindow.open(map);
	    //map.setCenter(pos);
	}, function() {
	    handleLocationError(true, infoWindow, map.getCenter());
	});
    } else {
	// Browser doesn't support Geolocation
	handleLocationError(false, infoWindow, map.getCenter());
    }

    geocoder = new google.maps.Geocoder();
    locations.forEach(function(e){
	var address = {
	    lat: e[0],
	    lng: e[1],
	};
	place_pin(geocoder, map, address);
    });

    map.setCenter({lat: 40.7, lng: -73.9});
}

function place_pin(geocoder, map, address) {
    var marker = new google.maps.Marker({
	map: map,
	position: address,
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
			  'Error: The Geolocation service failed.' :
			  'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

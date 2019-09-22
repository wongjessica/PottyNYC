var geocoder;
var map;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 11,
	center: {lat: -34.397, lng: 150.644}
    });

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

function initMap() {
		var uluru = {lat: 43.652881, lng: -79.379339};
		var map = new google.maps.Map(document.getElementById('map'), {
		  zoom: 12,
		  center: uluru
		});
		var marker = new google.maps.Marker({
		  position: uluru,
		  map: map
	});
}

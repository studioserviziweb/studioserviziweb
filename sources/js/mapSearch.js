$(document).ready(function() {

	$("body").on("click", "#reset-field", function(e) {
		$('input[name=address]').val("");

		var newLat = 41.90278349999999;
		var newLng = 12.496365500000024;
		var panX=0;

		if(navigator.userAgent.search("Mobile")>0 && navigator.userAgent.search("iPad") < 0){
			// var panX=0;
		}
		else if (navigator.userAgent.search("iPad") > 0) {
			// var newLat = 41.297985;
			// var newLng = 5.825012;
			var zoom = 5;
			// var panX=-180;
		}
		else {
			// var newLat = 40.416775;
			// var newLng = -3.70379;
			// var panX=-180;
		}


		zoomOverride = 5;

		var myPlace = new google.maps.LatLng(newLat, newLng);

		map.setCenter({lat: newLat, lng: newLng});
		map.setZoom(zoomOverride);

		// set offset
		map.panBy(panX, 0);

		google.maps.event.addListener( map, 'idle', function() {

			// Read the bounds of the map being displayed.
			bound = map.getBounds();

			$('#results-list').html("");
			var checkResult = false;

			// Iterate through all of the markers that are displayed on the *entire* map.
			for ( i = 0, l = gmarkers.length; i < l; i++ ) {

				current_marker = gmarkers[ i ];

				/* If the current marker is visible within the bounds of the current map,
				 * let's add it as a list item to #nearby-results that's located above
				 * this script.
				 */
				if ( bound.contains( current_marker.getPosition() ) ) {

					/* Only add a list item if it doesn't already exist. This is so that
					 * if the browser is resized or the tablet or phone is rotated, we don't
					 * have multiple results.
					 */

					if ( $ ('#map-marker-' + i).length === 0 ) {
						var item_content = '';
						item_content += '<div class="image_marker"><img src="' + current_marker.icon + '" /></div>';
						item_content += '<div class="content_marker">' + current_marker.info.replace("Indirizzo: ", "").replace("Telefono: ", "Tel. ") + '</div><a class="opneWindows" href="#" data-geo-info="' + i + '"></a>';



						$( '#results-list' ).append(
						$( '<li />' )
						 .attr( 'id', 'map-marker-' + i )
						 .attr( 'class', 'depot-result' )
						 .html( item_content )
						);

						$('a.opneWindows').click(function(){
							google.maps.event.trigger(gmarkers[ $(this).attr('data-geo-info') ], 'click');
							map.setCenter(gmarkers[ $(this).attr('data-geo-info') ].getPosition());
							return false;

							reloadResult = false;
						})

						checkResult = true;

					}
				}
			}

			if (!checkResult) {
				var notFound = '<div class="content_marker"><p>Nessun risultato trovato</p></div>'
				$( '#results-list' ).append(
				$( '<li />' )
				 .attr( 'id', 'map-marker-' + i )
				 .attr( 'class', 'depot-result' )
				 .html( notFound )
				);
			}

			reloadResult = true;
		});

		return false;

	});

	$("body").on("click", "#my-location", function(e) {
		$('input[name=address]').val("");
		if ("geolocation" in navigator){
			navigator.geolocation.getCurrentPosition(function(position){
				var newLat = position.coords.latitude;
				var newLng = position.coords.longitude;

				zoomOverride = 7;

				var myPlace = new google.maps.LatLng(newLat, newLng);

				var marker = new google.maps.Marker({
				  position: myPlace,
				  map: map
				});

				if (!circle ==='undefined')
					circle.setMap(null);

				// Add circle overlay and bind to marker
				circle = new google.maps.Circle({
				  map: map,
				  radius: 200000,    // 10 miles in metres
					fillColor: '#AA0000',
					strokeOpacity: 0,
	       	fillOpacity: 0,
				});
				circle.bindTo('center', marker, 'position');


				bound = circle.getBounds();

				var bounds = new google.maps.LatLngBounds(myPlace);
				map.fitBounds(bounds);

				map.setCenter({lat: newLat, lng: newLng});
				map.setZoom(zoomOverride);


			});
		}else{
			console.log("Browser doesn't support geolocation!");
		}

		reloadResult = true;

		return false;
	});


	$("body").on("submit", "#map-search", function(e) {
		e.preventDefault();

		var form = $(this);

		var formData = form.serialize();
		formDataEnc = decodeURIComponent(formData);
		var address = formDataEnc.split(' ').join('+');


		$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?' + address + '&key=AIzaSyBVDLI9lNYAdqUpU9a_aVN6C0IgPLZ3DjU', function(results) {
			var newLat = results.results[0].geometry.location.lat;
			var newLng = results.results[0].geometry.location.lng;

			zoomOverride = 7;

			var myPlace = new google.maps.LatLng(newLat, newLng);

			map.setCenter({lat: newLat, lng: newLng});

			var marker = new google.maps.Marker({
			  position: myPlace,
			  map: map
			});

			if (!circle ==='undefined')
				circle.setMap(null);

			// Add circle overlay and bind to marker
			circle = new google.maps.Circle({
			  map: map,
			  radius: 200000,    // 10 miles in metres
			  fillColor: '#AA0000',
				strokeOpacity: 0,
       	fillOpacity: 0,
			});
			circle.bindTo('center', marker, 'position');

			bound = circle.getBounds();

			var bounds = new google.maps.LatLngBounds(myPlace);
			map.fitBounds(bounds);

			map.setCenter(bounds.getCenter());
			map.setZoom(zoomOverride);

		});
	});
});

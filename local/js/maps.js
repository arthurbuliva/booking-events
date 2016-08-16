
var map;
var myCenter = new google.maps.LatLng(51.508742, -0.120850);
var marker;
var markers = [];


function initialize()
{
    var mapProp =
            {
                center: myCenter,
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    google.maps.event.addListener(map, 'click', function (event)
    {
        addMarker(event.latLng);

        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;

        var latLng = event.latLng;

        document.getElementById("latitude").value = latLng.lat();
        document.getElementById("longitude").value = latLng.lng();

        geocodeLatLng(geocoder, map, infowindow);
    });

}

function geocodeLatLng(geocoder, map, infowindow)
{
    var latlng = {lat: parseFloat(document.getElementById("latitude").value), lng: parseFloat(document.getElementById("longitude").value)};
    geocoder.geocode({'location': latlng}, function (results, status)
    {
        if (status === 'OK')
        {
            var result = results[0];
            if (result)
            {
                addMarker(latlng);
                infowindow.setContent(result.formatted_address);
                document.getElementById("latitude").value = result.location.lat();
                document.getElementById("longitude").value = result.location.lng();
            } else
            {
                window.alert('No results found');
            }
        } else
        {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
}



// Adds a marker to the map and push to the array.
function addMarker(location)
{

    deleteMarkers();
    var marker = new google.maps.Marker
            (
                    {
                        position: location,
                        map: map
                    });
    markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map)
{
    for (var i = 0; i < markers.length; i++)
    {
        markers[i].setMap(map);
    }
}



// Removes the markers from the map, but keeps them in the array.
function clearMarkers()
{
    setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers()
{
    setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers()
{
    clearMarkers();
    markers = [];
}


function placeMarker(location)
{
    marker = new google.maps.Marker(
            {
                position: location,
                map: map,
            });

    var infowindow = new google.maps.InfoWindow(
            {
                content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
            });

    infowindow.open(map, marker);


}

function getCoordinates()
{
    var nameOfPlace = document.getElementById("event-location").value;

    var theUrl = "http://maps.google.com/maps/api/geocode/json?address=" + encodeURIComponent(nameOfPlace);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);

    var results = JSON.parse(xmlHttp.responseText).results;
    if(results){
        var coordinates = results[0].geometry.location;

        var position = {lat: coordinates.lat, lng: coordinates.lng};

        deleteMarkers();
        
        addMarker(position);

        var laLatLng = new google.maps.LatLng(coordinates.lat, coordinates.lng);

        map.panTo(laLatLng);
        map.setZoom(16);

        document.getElementById("latitude").value = coordinates.lat;
        document.getElementById("longitude").value = coordinates.lng;
    }


//          setTimeout((document.getElementById("event-location").value = JSON.parse(xmlHttp.responseText).results[0].formatted_address), 3000);

//          alert(JSON.parse(xmlHttp.responseText).results[0].formatted_address);

//    alert(xmlHttp.responseText);


}

google.maps.event.addDomListener(window, 'load', initialize);
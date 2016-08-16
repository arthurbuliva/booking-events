var api_domain = "http://localhost:8000/proxy.php?url=";
function availabilityChange () {
    var location = $("#event-location").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var checkin = $("#event-from").val();
    var checkout = $("#event-to").val();
    if(location && latitude && longitude && checkin && checkout) {
        var api_url = api_domain + "getHotelAvailabilityV2%3Fcheckin=" + checkin + "%26checkout=" + checkout + "%26room1=A%26longitude=" + longitude + "%26latitude=" + latitude + "%26rows=10%26output=hotel_details,room_details,room_policies";
        $.get(api_url, function(data, status){ 
            var avResults = JSON.parse(data);
            var hotels = {};
            var hotel_ids = [];
            if(avResults.hotels) {
                for(var i in avResults.hotels) {
                    var hotel_id = avResults.hotels[i].hotel_id;
                    hotel_ids.push(hotel_id);
                    hotels[hotel_id] = avResults.hotels[i];
                }

                api_url = api_domain + "bookings.getHotelDescriptionTranslations%3Flanguagecodes=en%26hotel_ids=" + hotel_ids.join(",");
                $.get(api_url, function(data, status){
                    var descriptionResults = JSON.parse(data);
                    var html = "";
                    for(var i in descriptionResults) {
                        var result = descriptionResults[i];
                        hotels[result.hotel_id].description = result.description;
                    }
                    api_url = api_domain + "bookings.getHotelDescriptionPhotos%3Fhotel_ids=" + hotel_ids.join(",");
                    $.get(api_url, function(data, status){
                        var photoResults = JSON.parse(data);
                        for(var i in photoResults) {
                            var result = photoResults[i];
                            hotels[result.hotel_id].photo = result.url_max300;
                        }
                        api_url = api_domain + "bookings.getHotels%3Fhotel_ids=" + hotel_ids.join(",");
                        $.get(api_url, function(data, status){
                            var reviewResults = JSON.parse(data);
                            for(var i in reviewResults) {
                                var result = reviewResults[i];
                                hotels[result.hotel_id].review_score = result.review_score;
                            }
                            for(var i in hotels) {
                                var hotel = hotels[i];
                                html += Mustache.render($("#hotel_template").html(), {
                                    review_score: hotel.review_score,
                                    location: location,
                                    photo: hotel.photo,
                                    hotel_id: hotel.hotel_id,
                                    hotel_name: hotel.hotel_name,
                                    description: hotel.description,
                                    "price-total": parseInt(hotel.room_min_price.price),
                                });
                            }
                            $(".selection-options").html(html);
                            $(".selected").html();
                            $( "#sortable" ).sortable({
                                handle: ".drag"
                            });

                            $(".admin-box .bicon-star").click(function(){
                                $(this).closest( ".result" ).prependTo( $( ".selected" ) ); 
                            });

                            $(".admin-box .bicon-close").click(function(){
                                $(this).closest( ".result" ).appendTo( $( ".selection-options" ) ); 
                            });
                        });
                    });
                });
            } else {
                 $(".selection-options").html();
                 $(".selected").html();
            }
        });
    } else {
        $(".selection-options").html();
        $(".selected").html();
    }
}

$(function(){
    $("#event-location").change(availabilityChange);
    $("#event-from").change(availabilityChange);
    $("#event-to").change(availabilityChange);
    $("#submit").click(function(e){
        var event = {
            name :  $("#event-name").val(),
        };

        var events = localStorage.getItem("events");
        if(events) {
            events = JSON.parse(events);
        } else {
            events = [];
        }

        events.push(event);
        localStorage.events = JSON.stringify(events);
        return false;
    });
});
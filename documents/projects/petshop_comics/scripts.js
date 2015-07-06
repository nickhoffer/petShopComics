function initialize() {
        var mapOptions = {
          center: { lat: 38.069441, lng: -85.669364},
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.SATELLITE
            
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
    
    var marker = new google.maps.Marker({
      position: { lat: 38.069441, lng: -85.669364},
      map: map,
      title: "PetShop Comics!"
    });
      }
      google.maps.event.addDomListener(window, "load", initialize);
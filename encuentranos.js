<<<<<<< HEAD
=======

>>>>>>> e1a1d45d1824a945f51222013a0dd0827f2c7b79
function iniciarMap(){
    var coord = {lat:-12 ,lng: -77};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
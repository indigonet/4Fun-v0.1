const apikey="55bc2ec5979b0c7d4bec981ae5b5a0b5"
const apiurl="https://api.openweathermap.org/data/2.5/weather?"

var lat = 0
var lng = 0

function getLocation() {
    if (navigator.geolocation) {
      //console.log("OK!")
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
      //console.log("Entra")
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    }

    this.getLocation()
    
    $(document).ready(function(){
        $.get(apiurl+"lat="+lat+"&lon="+lng+"&units=metric"+"&appid="+apikey,function(data){ 
            console.log(data.weather[0]);
            $("#textoclima").text(data.weather[0].description)

            let climaactual=data.main.temp+"°c"
            $("#climaactual").text(climaactual)

            icon=data.weather[0].icon
            climaicono="http://openweathermap.org/img/wn/"+icon+"@2x.png"
            $("#icono").attr("src",climaicono)
        })
    })
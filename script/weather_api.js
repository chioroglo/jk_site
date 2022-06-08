
function request_weather(city) {
	
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/weather?q=" + city + "&lat=0&lon=0&id=2172797&lang=null&units=imperial",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
		"X-RapidAPI-Key": "6a92dd06ddmshea7602e79f6ca60p1d05dcjsn8873da03879e"
	}
};

$.ajax(settings).done(function (response) {
    $('#temperature').html(response['main']['temp'] + '&#176C' + '<br>' + response['weather'][0]["main"]);
});}

$(document).ready(request_weather("Magadan"));
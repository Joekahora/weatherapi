function getCurrentWeather(){
    var cityName = $("#searchplace").val();
    var weatherApiCall = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&&appid=f11adde7d4f7b71c1c1be26bc839a821"
    $.getJSON(weatherApiCall, weatherData)
        function weatherData(currentWeatherData) {
            var cityName = currentWeatherData.name
            var countryName = currentWeatherData.sys.country
            var temperature = currentWeatherData.main.temp
            $("#output").append("<br>The weather at" + cityName + " in country code " + countryName + "<br>The Temperature there is " + temperature); 
            console.log(currentWeatherData)           
        }
}

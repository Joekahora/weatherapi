function getCurrentWeather(){
    var cityName = $("#searchplace").val();
    var weatherApiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&&appid=f11adde7d4f7b71c1c1be26bc839a821"
    $.getJSON(weatherApiCall, weatherData)
        function weatherData(currentWeatherData) {
            var cityName = currentWeatherData.name
            var countryName = currentWeatherData.sys.country
            var temperature = currentWeatherData.main.temp
            var pressure = currentWeatherData.main.pressure
            var humidity = currentWeatherData.main.humidity
            var windSpeed = currentWeatherData.wind.speed
            var sunRise = currentWeatherData.sys.sunrise
            var sunSet = currentWeatherData.sys.sunset
            $("#output").append("<br>The weather at " + cityName + " in country code are as follow: " + countryName + "<br>The Temperature there is " + temperature);
            $("#output").append("<br> The Pressure there is " + pressure + "<br>The humidity there is " + humidity + "<br>The Windspeed is " + windSpeed);
            $("#output").append("<br> The Sun rises at " +sunRise+" and sets at " + sunSet); 
            console.log(currentWeatherData)           
        }
}

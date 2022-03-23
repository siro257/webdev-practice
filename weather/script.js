let weather = {
    apiKey: "8e21bb63b17f59fe87c41ba1ea1105c1",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey + "&units=metric"
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerHTML = name;
        document.querySelector(".temp").innerHTML = temp.toFixed(1) + " °C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";

        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + "m/s";

        document.querySelector(".weather").classList.remove("loading");

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};


// document.querySelector(".search button").addEventListener("click", function () {
//     weather.search();
// });

document.querySelector(".search-bar").addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        weather.search();
    }
})

weather.fetchWeather("napa");
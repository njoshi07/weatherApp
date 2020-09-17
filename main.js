window.addEventListener("load",()=> {
    let lat;
    let long;
    let timeZone = document.querySelector(".location-timezone");
    let temperature = document.querySelector(".temperature-degree");
    let icon = document.querySelector(".icon");
    let temperatureDescription = document.querySelector(".temperature-description");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
         const proxy = 'https://cors-anywhere.herokuapp.com/';
         const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=41.257160&lon=-95.995102&units=imperial&lang=en&appid=23d42c6f1d8fba0e824c8e1e2e4590dd`;

            fetch(api)
                .then(response => {
                    return response.json();
                }).then(data => {
                    console.log(data);
                    const locationTimeZone = data.name;
                    const desc = data.weather[0].description;
                    const weatherIcon = data.weather[0].icon;
                    const temp = data.main.temp;

                icon.innerHTML = weatherIcon;
                temperature.innerHTML = temp;
                temperatureDescription.innerHTML = desc;
                timeZone.innerHTML = locationTimeZone;
                });
        });

    }
});
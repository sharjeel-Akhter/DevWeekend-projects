let card = document.querySelector(".card");
let inputs = document.querySelector("#input");
let searchBtn = document.querySelector("button");
let errorSec = document.querySelector(".error");
let messageDiv = document.querySelector(".message")

let isRun = false;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather/";
const API_KEY = "appid=172ebc8e19cfaad7b063aaf93399510e";



searchBtn.addEventListener("click" , () => {
    let city = inputs.value.trim().toLowerCase();
    if(!city){
        error("Invalid City")
    }
    errorSec.textContent = "";
    card.classList.add("hide");
    fetchWeather(city);
    inputs.value = "";
})


async function fetchWeather(city){
    const url = `${BASE_URL}?q=${city}&${API_KEY}&units = metric`;
    try{
        messageDiv.classList.remove("hide");
        let response = await fetch(url);
        let data = await response.json();
        messageDiv.classList.add("hide");
        getData(data);


}   
    catch(err){
        error(err);
    }
    }

function error(err){

    errorSec.textContent = `${err.message}`;
}


function getData(data){
    let name = data.name;
    let temp = Math.round(data.main.temp - 273.15);
    let feels = Math.round(data.main.feels_like - 273.15);
    let humidity = data.main.humidity;
    let visible = data.visibility?(data.visibility / 1000).toFixed(1) : "NA";
    let wind = (data.wind.speed * 3.6).toFixed(1);
    let description = data.weather[0].description;
    let iconCode = data.weather[0].icon;

let date = new Date();

 let day = date.toLocaleDateString("en-us", {weekday:'long'});
let dates = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
let time = date.toLocaleTimeString("en-US", { hour:"2-digit", minute:"2-digit" });

    card.classList.remove("hide");
    card.innerHTML = `<div class="head">
                <p class="city">${name}</p>
                <div class="time">
                    <span>${day}</span>
                    <span>${dates} - ${time} </span>
                </div>
               </div>

               <div class="main">
                <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather-icon">
                <div class="discription">
                    <p class="temp">${temp}&deg;C</p>
                    <p>${description}</p>
                </div>
               </div>

               <div class="sections">
                <div class="humidity sects">
                    <p><i class="bi bi-droplet-fill"></i></p>
                    <p>${humidity}%</p>
                    <p>Humidity</p>
                </div>
                <div class="wind sects">
                    <p><i class="bi bi-wind"></i></p>
                    <p>${wind}km/h</p>
                    <p>Wind</p>
                </div>
                <div class="feels sects">
                    <p><i class="bi bi-thermometer-half"></i></p>
                    <p>${feels}&deg</p>
                    <p>Feels Like</p>
                </div>
                <div class="visibility sects">
                    <p><i class="bi bi-eye-fill"></i></p>
                    <p>${visible}km</p>
                    <p>Visibility</p>
                </div>
               </div>
       `
}









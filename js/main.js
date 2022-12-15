document.querySelector(".button").addEventListener("click",function()
{
    async function GetData()
    {
        let Data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2b2bda90aa8f40cdb0870745221910&q=${document.getElementsByName("search")[0].value}&days=3`);
        let MyData = await Data.json();
        Today(MyData);
    }
    GetData();
});

function Today(MyData)
{
    let first = 
    `
    <div class="col-lg-4 bg-dark rounded-5 Cover col-md-6 col-sm-12 mb-3 me-3">
          <div class="d-flex justify-content-between text-white mt-2">
            <span class="ms-3">Today</span>
            <span class="me-3">${MyData["forecast"]["forecastday"]["0"]["date"]}</span>
          </div>
          <div class="text-white ms-3 mt-5 text-center">
            <h2>${MyData["location"]["name"]}</h2>
            <div class="d-flex justify-content-center">
            <p class="fw-bold display-1">${MyData["forecast"]["forecastday"]["0"]["day"]["avgtemp_c"]}<sup>O</sup>C</p>
            <img src="${MyData["forecast"]["forecastday"]["0"]["day"]["condition"]["icon"]}" alt="" class="me-3">
            </div>
          </div>
          <h3 class="text-white ms-3 text-center">${MyData["forecast"]["forecastday"]["0"]["day"]["condition"]["text"]}</h3>
          <div class="icons text-white mt-5 d-flex justify-content-between">
             <p class="ms-2"><i class="fa-solid fa-umbrella fa-lg text-white"></i>${MyData["forecast"]["forecastday"]["0"]["day"]["daily_chance_of_rain"]}%</p>
             <p><i class="fa-solid fa-wind text-white fa-lg"></i> ${MyData["forecast"]["forecastday"]["0"]["day"]["maxwind_kph"] } <span>Km/h</span></p>
             <p class="me-3"><i class="fa-solid fa-compass text-white fa-lg"></i> ${MyData["current"]["wind_dir"]}</p>
             
          </div>
        </div>


        <div class="col-lg-4 w-25 h-100 bg-dark rounded-5 Cover me-3">
          <div class="text-white text-center mt-3">
            <span>Tomorrow</span> 
          </div>
          <div class="h-100 text-white text-center mt-5">
            <img src="${MyData["forecast"]["forecastday"]["1"]["day"]["condition"]["icon"]}" alt="">
            <p class="fw-bold">${MyData["forecast"]["forecastday"]["1"]["day"]["maxtemp_c"]}  <sup>O</sup>C</p>
            <p>${MyData["forecast"]["forecastday"]["1"]["day"]["mintemp_c"]} <sup>O</sup>C</p>
            <span>${MyData["forecast"]["forecastday"]["0"]["day"]["condition"]["text"]}</span>
          </div>
        </div>


        <div class="col-lg-4 w-25 h-100 bg-dark rounded-5 Cover">
          <div class="text-white text-center mt-3">
            <span>After Tomorrow</span> 
          </div>
          <div class="h-100 text-white text-center mt-5">
            <img src="${MyData["forecast"]["forecastday"]["2"]["day"]["condition"]["icon"]}" alt="">
            <p class="fw-bold">${MyData["forecast"]["forecastday"]["2"]["day"]["maxtemp_c"]} <sup>O</sup>C</p>
            <p>${MyData["forecast"]["forecastday"]["2"]["day"]["mintemp_c"]} <sup>O</sup>C</p>
            <span>${MyData["forecast"]["forecastday"]["0"]["day"]["condition"]["text"]}</span>
          </div>
        </div>
    `
    document.querySelector(".Data").innerHTML = first;
}

// let Data = await fetch(``);
// let MyData = await Data.json();





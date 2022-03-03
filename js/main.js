
//setting variables that I can use through the whole app
let appId = '60e9a913bbf1ad88bff19ed3e1d772c3';

//let result;
let condition;
let description;
let locale;
let tempK; 
let tempC = tempK-273.15; 
let tempF = tempC*(9/5)+32;

let userZip = 90210; 
let resp;



async function getWeather(){

    request = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appId}`);
        let resp = request.data;
        console.log(resp);
        //let weather = resp.data;
        //console.log(weather);
        displayWeather(resp)
}

function displayWeather(resp) {
    //console.log(resp);
    let location = resp.name;
    let tempK = resp.main.temp;
    let tempC = Math.round(tempK -273);
    let tempF = Math.round(9/5*tempC+32);
    let condition = resp.weather[0].main;
    let description = resp.weather[0].description;

    const locale = document.querySelector('#locale')
    locale.textContent = `${location}`;
    const tempKel = document.querySelector('#tempK')
    tempKel.textContent = `${tempK} ${'K'}`;
    const tempCel = document.querySelector('#tempC')
    tempCel.textContent = `${tempC} ${'C'}`;
    const tempFar = document.querySelector('#tempF')
    tempFar.textContent = `${tempF} ${'F'}`;
    const currentWeather= document.querySelector('#condition');
    currentWeather.textContent = `${condition}`;
    const descrip = document.querySelector('#description');
    descrip.textContent = `${description}`;
    
    
    //let condtion = document.getElementById("condition");
    //let description = document.getElementById("description");
    
    //location.innerText = location
}

function checkZip(){
    let zipInput = document.getElementById("zipInput");
    if(!isNaN(zipInput.value) && zipInput.value.length === 5){
        userZip = zipInput.value
        getData()
        .catch(err => {
            return new err ("OOPS! Enter a valid ZIP")
        });
    }
}

function clearInput() {
        onclick.document.getElementById("weatherBtn").value="";
    }
getWeather();

/*
    .then(resp => {
        return resp.data;
    }).then (data => {
        return data
    })
    .catch(err => {
        console.log(err);
    })
}
*/

//function setState(){
//    displayWeather();
//}

//async function getWeather(weatherLink) {
//    let result = await axios.get(weatherLink);
//    let weather = await result.data;
//}

/*
function displayWeather() {
    const location = data.name;
    const tempK = data.temp;
    const condition = data.weather[0].main;
    const description = data.weather[0].description;
    let locale = document.getElementById('locale')
    locale.textContent = location;
    let tempKel = document.getElementById('tempK')
    tempKel.textContent = Math.floor(tempK) + ' K'
    let tempC = document.getElementById('tempC')
    tempC.textContent = Math.floor(tempK-273.15) + ' C';
    let tempF = document.getElementById('tempF')
    tempF.textContent = Math.floor((tempK-273.15)*(9/5)+32)+ ' F'
    let currentWeather= document.getElementById('condition');
    currentWeather.textContent = condition;
    let other = document.getElementById('description');
    other.innerText = description
}
*/

/*
async function getWeather() {
    try{
    let data = await axios.get(weatherLink);
    return data;
    } catch(err) {
        display.error('Oops! Something went wrong')
    }
}
*/

    


/*
//this checks the zip to see if it is correct format
function checkZip(value) {
    let zipPattern = /^\d{5}$/;
    if (zipPattern !== true) {
        return error('You messed up')
    }
    return zipPattern.test(value);
    
}
*/


    
//    document.querySelector(".weatherBtn").addEventListener("click", function(){
 //   weather.search();
//});
//document.querySelector("zipInput").addEventListener("keyup", function(event){
//    if (event.key == "Get Weather") {
//        weather.search();
//    }
//});
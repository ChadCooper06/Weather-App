
//setting variables that I can use through the whole app
let appId = '60e9a913bbf1ad88bff19ed3e1d772c3';

let result;
let condition;
let description;
let city;
let tempK; 
let tempC = tempK-273.15; 
let tempF = tempC*(9/5)+32;
let userZip = 40517; 



let weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appId}`;



async function getWeather() {
  try{
      let response = await axios.get(weatherLink)
      //console.log(response);
      weatherObject = await response.json;
      city = response.data.name
      tempK = response.data.main.temp;
      description = response.data.weather[0].description;
      condition = response.data.weather[0].main;
      pushText();
      
    } catch (error) {
        console.error('error')
    }
}
    


function pushText() {
  let userCity = document.getElementById("city")
  userCity.textContent =  city;
  let tempKelvin = document.getElementById("kelvin")
  tempKelvin.textContent = Math.floor(tempK) + ' K'
  let tempFaren = document.getElementById("farenheit")
  tempFaren.textContent = Math.floor((tempK-273.15)*(9/5)+32)+ ' F'
  let tempCels = document.getElementById('celsius')
  tempCels.textContent = Math.floor(tempK-273.15) + ' C';
  let newCondition= document.getElementById("condition");
  newCondition.textContent = condition;
  let otherInfo = document.getElementById("other");
  otherInfo.innerText = description
}



/*
async function getWeather() {
   let result = await axios.get(weatherLink);

    setState(result);
}

function setState(result) {
 
    displayWeather()
}


function displayWeather() {
    let locale = document.getElementById('locale')
    locale.textContent = locale;
    let tempK = document.getElementById('tempK')
    tempK.textContent = Math.floor(tempK) + ' K'
    let tempC = document.getElementById('tempC')
    tempC.textContent = Math.floor(tempK-273.15) + ' C';
    let tempF = document.getElementById('tempF')
    tempF.textContent = Math.floor((tempK-273.15)*(9/5)+32)+ ' F'
    let condition= document.getElementById('condition');
    condition.textContent = condition;
    let description = document.getElementById('description');
    otherInfo.innerText = description
}



async function getWeather() {
    try{
    let data = await axios.get(weatherLink);
    return data;
    let currentWeather = await data;
    setState(response)
    } catch(err) {
        display.error('Oops! Something went wrong')
    }
}

//this checks the zip to see if it is correct format
function checkZip(value) {
    let zipPattern = /^\d{5}$/;
    if (zipPattern !== true) {
        return error('You messed up')
    }
    return zipPattern.test(value);
    
}
//function buildPage() {
    //    document.getElementById("weatherBtn").onclick
    //}
    
    function clearInput() {
        document.getElementById("weatherBtn").value="";
    }*/
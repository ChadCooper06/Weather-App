
//setting variables that I can use through the whole app
let appId = '60e9a913bbf1ad88bff19ed3e1d772c3';

//let result;
let condition;
let description;
let locale;
let tempK; 
let tempC = tempK-273.15; 
let tempF = tempC*(9/5)+32;

//let userZip = ; 
let resp;

weatherBtn.addEventListener('click', getWeather);

async function getWeather(){
    userZip = `${document.querySelector('#zipInput').value}`;
    request = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appId}`);
        let resp = request.data;
        console.log(resp);
        
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
  
}
/*
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
*/


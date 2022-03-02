const currentWeather = [];
let appId = '60e9a913bbf1ad88bff19ed3e1d772c3';
let userZip = '40517';

let weatherLink = `https://www.api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appId}`;

async function setState() {
    let state = currentWeather
}

async function getWeather() {
    let response = await axios.get(weatherLink)
    return response;
    
    currentWeather = await response;
}



//this checks the zip to see if it is correct format
function checkZip(value) {
    let zipPattern = /^\d{5}$/;
    if (zipPattern !== true) {
        return error()
    }
    return zipPattern.test(value);
}

function buildPage() {

}



function clearInput() {
    if 
}

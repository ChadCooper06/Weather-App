
//const currentWeather = [];
let appId = '60e9a913bbf1ad88bff19ed3e1d772c3';
let userZip = '40517';
//let condition = currentWeather;
//let standardTemp = 


let weatherLink = `https://www.api.openweathermap.org/data/2.5/weather?zip=${userZip},&appid=${appId}`;


async function getWeather() {
    let data = await axios.get(weatherLink)
    .then ((result) => {
        data=result
    });
    return data;
}

/*async function getWeather() {
    try{
    let data = await axios.get(weatherLink);
    return data;
    let currentWeather = await data;
    setState(response)
    } catch(err) {
        display.error('Oops! Something went wrong')
    }
}
*/
let state = {
    location: [],
    standardTemp: [],
    metricTemp: [],
    imperialTemp: [],
    condition: [],
    weatherPic: []
}

function setState(data) {
    
}




//this checks the zip to see if it is correct format
function checkZip(value) {
    let zipPattern = /^\d{5}$/;
    if (zipPattern !== true) {
        return error()
    }
    return zipPattern.test(value);
}

//function buildPage() {
//    document.getElementById("weatherBtn").onclick
//}



function clearInput() {
    document.getElementById("weatherBtn").value="";
}

//button.onclick = function clearInput(){}
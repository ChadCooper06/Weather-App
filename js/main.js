
//const currentWeather = [];
let appId = '60e9a913bbf1ad88bff19ed3e1d772c3';
let input;
let userZip = `${input.value}`;
//let condition = currentWeather;
//let standardTemp = 

async function setState() {
    let state = await getWeather()
    let currentState = state.value;
    return currentState;
}

let weatherLink = `https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=${appId}`;


async function getWeather() {
    let request = await axios.get(weatherLink)
    let data = request.data;
    setState(data)
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
}

//button.onclick = function clearInput(){}
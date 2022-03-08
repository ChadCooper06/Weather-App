
const API_URL="https://api.openweathermap.org/data/2.5/weather";
const APP_ID="60e9a913bbf1ad88bff19ed3e1d772c3";

// Model---has just the info/state-has setters and getters
class Weather{
    constructor(){
    this.city='';
    this.temp=0;
    this.currentCondition='';
    this.currentIcon='';
    }

    setWeather(x) {
        //the things
    }

    getWeather(){

    }

    setState(x){
        this.city=x.city;
    }

    setCity(x) {
        this.city=x;
    }
    getCity(x) {
        return this.city;
    }
    setTemp(x) {
        this.temp=x;
    }
    getTemp(x) {
        return this.temp;
    }
    setCurrentCondition(x) {
        this.currentCondition = x;
    }
    getCurrentCondition() {
        return this.currentCondition;
    }
    setCurrentIcon() {
        this.currentIcon=x;
    }
    getCurrentIcon() {
        return this.currentIcon;
    }
}

//controller---does the heavy lifting
class WeatherController{
    constructor(model, view){
        this.m= model;
        this.v=view;
        this.v.BindInputChange(this.handleZipInputChange.bind(this));
    
    }

    onApiCall = (data) => {
        this.v.displayWeather(data);
    }

    async getWeatherByZipCode(zip){
        try {
            let response = await axios.get(`${API_URL}?zip=${zip},us&${APP_ID}`)
            if(response.data){
                return response.data;
            }
        } catch (error) {
            console.log(error)
        }   
    }

    async handleZipInputChange = (e) => {
        const value = e.target.value;
        const validZip = this.validateZipcode(value) {
            if(validZip) => {
                let data = await this.getWeatherByZipCode(zip);
                this.m.setWeather({
                    city,
                    temp,
                    currentCondition,
                    currentIcon
                })
            }
        }
    }

    validateZipcode(){
        if (!isNaN(value) && value.length === 5){
            return true
        }
        return false
    
}

//View
class WeatherView {
    constructor(){
        this.input = document.getElementById('userZipCode');
        this.tempK = resp.main.temp;
        this.location = resp.name;
        this.tempC = Math.round(tempK -273);
        this.tempF = Math.round(9/5*tempC+32);
        this.condition = resp.weather[0].main;
        this.description = resp.weather[0].description;
        this.icon = resp.weather[0].icon;
    }

    BindInputChange(fn) {
        this.input.addEventListener('input', fn)
    }


    createElement(tag, className) { //
    const element = document.createElement(tag)
    if (className) element.classList.add(className)
        return element
    }
    

    displayWeather(weatherData){
        /*
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
        this. = "<img src = 'https://openweathermap.org/img/wn/" + icon + "@2x.png'>";
        }*/

    }
}


const app = new WeatherController(new Weather(), new WeatherView())

    //create event handler in controller
    //create binding method that adds an event listener to an element in the view
    //come back to the controller and instantiate it in the constructor (because we have access to it)
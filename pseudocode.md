** PURPOSE

Weather app that takes an input of a ZIP and calls the weather API and gets the info for that ZIP and shows the current weather.

** PROCEDURAL BREAKDOWN

Global page that will be the state that will be altered each time something happens 

** SMALL DISPLAY

* input field that a ZIP will be typed into 
    * example text in field as placeholder
    * onchange or onblur that makes this tell user if the info is correct before letting it be sent to the API (uses warn color to signify input isn't proper format)
    * always visible
    * a valid ZIP lets the button work but if not it pops up a msg saying something went wrong
    * must be 5 digits long integer
    * when new one is typed in (at 5th number) the big element below fades away

* button that will send that info to the API 
    * always visible
    
* big div that will display the needed information from the API
    * location
    * temperature in K, C, and F
    * condition
    * other info as needed (decided by me)
    * hidden until the info is called from the API
    
* save the recent inputs and their info from the API locally so that it can be called back immediately rather than making another call
    * will need an object that returns the cached info

* if server side error (no info comes back) an error msg should display saying "oops there was an error"

* maybe a timestamp on each search and function that says if the time has been more than 60 mins then it will make a new call and retrieve new info for that ZIP but otherwise will just use the one that's cached


<div>

<h1>TITLE-weather app</h1>

<input>INPUT- field that can be typed into</input>
    function checkZip() {
        checks the ZIP code input to see if it is legit or not (helper text inside to show proper format)
    -- IF format is '12345' and a real ZIP then accept it as legit and enable the button
    -- ELSE send up a warning statement saying that it is not correct and please try again
    }
  
<button>BUTTON- get weather</button>
  function clearInput(){
      onclick- the input field clears
  }
    function getWeather(){
        runs onclick
        axios get info from the weather API, wait for return of promised info
        IF good info then run buildPage() and fill it with the wanted info
        ELSE catch the error and send up error message saying something went wrong
    }
    
</div>
---If API doesn't return good info then it should pop up error message saying that something went wrong and you should try again---

<div>

-- use JS to make this app build the page using createElement and appendChild
--remains hidden on start
function buildPage() {
    await getWeather
    IF getWeather() returns info
    THEN create the page and display the wanted info
    create div rows and columns that will hold the weather info below
    row1= display location
    row2 has three equal columns showing temperatures in K, C, and F
    row3 displays the weather condition(rainy or sunny)
    row 4 holds an image that matches the rainy or sunny condition
}


    
</div>

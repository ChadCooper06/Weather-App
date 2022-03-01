** PURPOSE

Weather app that takes an input of a ZIP and calls the weather API and gets the info for that ZIP and shows the current weather.

** PROCEDURAL BREAKDOWN

Global page that will be the state that will be altered each time something happens 

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

** SMALL DISPLAY

Three parts: 

1. TITLE-weather app
2. INPUT- field that can be typed into
    * takes ZIP and if it is legit, the request is sent to the API to get the info for that ZIP. 
    * if it is not legit then warning is shown and the button is disabled.
    * the info is brought back and shown in the BIG DISPLAY.
3. BUTTON- get weather
    * click sends the input ZIP to the API
    * clears the input when clicked
    * after click, wait until info is retrieved or not and then show the hidden BIG DISPLAY or pop up the error
    
---If API doesn't return good info then it should pop up error message saying that something went wrong and you should try again---

** BIG DISPLAY

1. This shows only if the info that comes back from the API is good
2. Displays the location
3. Displays the temperature in Celcius, Fahrenheit and Kelvin
4. Displays the weather condition (raining/sunny/etc)
5. Displays an image of the type of weather that matches the condition

    


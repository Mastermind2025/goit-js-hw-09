const btnStart = document.querySelector('button[data-start]');  //Start button obj
const btnStop = document.querySelector('button[data-stop]');    //Stop button obj
btnStart.addEventListener('click', onClickColor);   //add Listener to Start button
btnStop.addEventListener('click', cancelColor);     //add Listener to Stop button
let cancelInterval = null;
//The function generates random color and assigns to body
let getRandomHexColor = function(){
  return document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} 

// We run interval by click on Start button with color function
function onClickColor() {
    cancelInterval = setInterval(getRandomHexColor, 700);
}
// Stop interval function by click Stop button
function cancelColor() {
    clearInterval(cancelInterval);
}





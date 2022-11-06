const btnStart = document.querySelector('button[data-start]');  //Start button obj
const btnStop = document.querySelector('button[data-stop]');    //Stop button obj
btnStart.addEventListener('click', onClickColor);   //add Listener to Start button
btnStop.addEventListener('click', cancelColor);     //add Listener to Stop button

//The function generates random color and assigns to body
let getRandomHexColor = function(){
  return document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} 

let cancelInterval;
// We run interval by click on Start button with color function
function onClickColor() {
    cancelInterval = setInterval(getRandomHexColor, 500);
}
// Stop interval function by click Stop button
function cancelColor() {
    clearInterval(cancelInterval);
}




// console.log(intervalSet);

// function endInterval() {
//     clearInterval(intervalSet);
//     console.log('End!');
// }
 
// const intervalSet = setInterval((funColor) => {
//     funColor = console.log('Hi!');

// }, 1000);


// console.log(getRandomHexColor());
// document.body.style.backgroundColor = 'green';
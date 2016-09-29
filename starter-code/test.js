 function init() {

 var seconds =0;
 var timerId =0;


// step 1 - create selectors - for buttons
var body = document.querySelector('body');
var resetTimer = document.querySelector('#reset');
var startTimer= document.querySelector('#start');
var pauseTimer =document.querySelector('#pause');
var timer = document.querySelector('#timer');

// Step2 Set up event listeners for click

startTimer.addEventListener("click" , startTheTimer);

function startTheTimer (){
timer.innerHTML = "Time Elapsed : " + seconds;
timerId= setInterval (updateTime ,1000);

}


pauseTimer.addEventListener("click" , pauseTheTimer);

function pauseTheTimer () {
  clearInterval(timerId);
  timer.innerHTML = "Time Elapsed : " + seconds;
  timerId = 0;

}

resetTimer.addEventListener("click", resetTheTimer);

function resetTheTimer () {
  clearInterval(timerId);
  timer.innerHTML = "Stop Watch";
  timerId = 0;
  seconds = 0;

}



function updateTime () {
timer.innerHTML = "Time Elapsed: " + " " + seconds;
seconds ++

}









}

init();

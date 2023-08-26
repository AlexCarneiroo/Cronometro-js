const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const millisecondsEl = document.querySelector('#milliseconds');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');
const resetBtn = document.querySelector('#resetBtn');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener('click', startTime);
pauseBtn.addEventListener('click' , pauseTime);
resumeBtn.addEventListener('click', resumeTime);
resetBtn.addEventListener('click' , resetTime);

function startTime(){


    interval = setInterval(()=>{

        if(!isPaused){
            milliseconds += 10;


            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }


            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMillieconds(milliseconds);
        }
    },10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block"
}

function resetTime(){
    clearInterval(interval);


    isPaused = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    millisecondsEl.textContent = '000';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';


    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
}

function pauseTime(){
    isPaused = true;
    pauseBtn.style.display ='none';
    resumeBtn.style.display ='block'

}

function resumeTime(){
    isPaused = false;

    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}


function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMillieconds(time){
    return time < 100 ? `${time}`.padStart(3,"0") : time;
}
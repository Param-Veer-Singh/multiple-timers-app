const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".second");
const timers = document.querySelector(".timers");
const noTimersLine = document.querySelector(".no-timers");
const set = document.querySelector(".set");

set.addEventListener("click",()=>{
    let totalTimeInSec = hour.textContent * 3600 + minutes.textContent * 60 + seconds.textContent * 1;
    
    const newTimer = document.createElement("div");
    newTimer.classList.add("set-timer");
    newTimer.classList.add("d-flex");
    newTimer.classList.add("align-items-center");
    newTimer.innerHTML = `
    <div><h4>Timer:</h4></div>
    <div class="timer d-flex align-items-center">
        <div class="newTimerHour">${hour.textContent}</div>
        <div class="colon"> : </div>
        <div class="newTimerMinutes"> ${minutes.textContent} </div>
        <div class="colon"> : </div>
        <div class="newTimerSeconds"> ${seconds.textContent} </div>
        </div>
        <button class="delete btn" >Delete</button>
    `

    function createNewTimer(){

    }
    timers.appendChild(newTimer);
        
    const newTimerHour = document.querySelectorAll(".newTimerHour");
    const newTimerMinutes = document.querySelector(".newTimerMinutes");
    const newTimerSeconds = document.querySelector(".newTimerSeconds");
    
    
    var id = setInterval(()=>{
        const h = Math.floor(totalTimeInSec / 3600);
        const m = Math.floor(totalTimeInSec / 60);
        const s = Math.floor(totalTimeInSec % 60);
        
        console.log(h);
        console.log(m);
        console.log(s);

        newTimerHour.textContent = h;
        newTimerMinutes.textContent = m;
        newTimerSeconds.textContent = s;

        totalTimeInSec--;

        if(totalTimeInSec < 0){
            clearInterval(id);


        }
    },1000);
});
    

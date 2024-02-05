// const timer = document.getElementById('timer');
// const startButton = document.getElementById('start');
// const stopButton = document.getElementById('stop');
// const resetButton = document.getElementById('reset');

// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval;
// let running = false;

// function startTimer() {
//     startTime = Date.now() - elapsedTime

//     timerInterval = setInterval(() => {
//         elapsedTime = Date.now() - startTime
//         timer.textContent = formatTimer(elapsedTime);
//     }, 10)

//     startButton.disabled = true;
//     stopButton.disabled = false;
// }

// function stopTimer() {
//     clearInterval(timerInterval);
//     startButton.disabled = false;
//     stopButton.disabled = true;
// }

// function resetTimer() {
//     clearInterval(timerInterval);

//     elapsedTime = 0;
//     timer.textContent = "00:00:00";

//     startButton.disabled = false;
//     stopButton.disabled = false;
// }

// function formatTimer(elapsedTime) {
//     const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
//     const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
//     const mseconds = Math.floor((elapsedTime % 1000) / 10);
//     return (
//         (hours ? (hours > 9 ? hours : "0" + hours) : "00")
//         + ":" +
//         (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
//         + ":" +
//         (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
//         + "." +
//         (mseconds > 9 ? mseconds : "0" + mseconds));
// }

// document.getElementById("lap").addEventListener("click", () => {
//     document.getElementById("title").innerHTML = "Laps:";
//     if (running) {
//         let lapTime = document.createElement("li");
//         lapTime.innerHTML = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
//         document.getElementById("laps").appendChild(lapTime);
//     }
// });

// startButton.addEventListener('click', startTimer)
// stopButton.addEventListener('click', stopTimer)
// resetButton.addEventListener('click', resetTimer)

// // @bycapwan

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.getElementById("display");
let int = null;
let startStopPause = document.getElementById("startStopPause");
let running = false;

startStopPause.addEventListener("click", () => {
    if (startStopPause.innerHTML === "Start") {
        int = setInterval(displayTimer, 10);
        startStopPause.innerHTML = "Pause";
        running = true;
    } else if (startStopPause.innerHTML === "Pause") {
        clearInterval(int);
        startStopPause.innerHTML = "Play";
    } else {
        //startStopPause.innerHTML==='Play'
        int = setInterval(displayTimer, 10);
        startStopPause.innerHTML = "Pause";
    }
});

document.getElementById("lap").addEventListener("click", () => {
    document.getElementById("title").style.fontFamily = 'Nunito, sans-serif';
    document.getElementById("title").style.color = 'white';
    document.getElementById("title").style.fontSize = '2rem';
    document.getElementById("title").style.fontWeight = 'bold';
    document.getElementById("title").innerHTML = "Laps:";
    
    if (running) {
        let lapTime = document.createElement("button");
        lapTime.innerHTML = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
        document.getElementById("laps").appendChild(lapTime);
    }
});

document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("title").innerHTML = "";
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
    document.getElementById("startStopPause").innerHTML = "Start";
    document.getElementById("laps").innerHTML = "";
    running = false;
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10
            ? "00" + milliseconds
            : milliseconds < 100
                ? "0" + milliseconds
                : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

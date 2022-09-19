

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

let timer = false  // this variable decide the stopwatch --->  start , stop and reset
//  true   false     false 
function start() {
    timer = true;
    stopwatch();

}
// function recordTime() {
//     timer = true;
//     stopwatch();
//     console.log(timer)

// }

function stop() {
    timer = false;

}

function reset() {
    timer = false;    // when timer is reset then all should be 0
    count = 0;
    sec = 0;
    min = 0;
    hr = 0;
    var hrString = "0"+ hr;
    var minString ="0"+ min;
    var secString ="0"+ sec;
    var countString ="0"+ count;

    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('count').innerHTML = countString;
}

function stopwatch() {  // this function start the timer 
    if (timer == true) {
        count += 1;

        if (count == 100) {
            sec += 1;
            count = 0;

        }
        if (sec == 60) {
            min += 1;
            sec = 0;

        }
        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;

        }


    }

    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;


    if (hr < 10) {
        hrString = "0" + hrString

    }
    if (min < 10) {
        minString = "0" + minString

    }
    if (sec < 10) {
        secString = "0" + secString

    }
    if (count < 10) {
        countString = "0" + countString

    }
    
    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('count').innerHTML = countString;
    setTimeout('stopwatch()', 10);
}


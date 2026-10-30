let sec = 0;
let min = 0;
let hour = 0;
let day = 0;
let time = '';

const text = document.querySelector('.timer');

let last_time = '';

const now = new Date();

let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = now.getHours();
let days = now.getDate();
let months = now.getMonth() + 1;
let years = now.getFullYear();

last_time = `${years}:${months}:${days}:${hours}:${minutes}:${seconds}`;



let saved_data = localStorage.getItem("reset_time");



if(saved_data === null){

    localStorage.setItem("reset_time" , last_time);

}else{

    let time_array = saved_data.split(":").map(Number);

    let old_time = new Date(
        time_array[0],
        time_array[1] - 1,
        time_array[2],
        time_array[3],
        time_array[4],
        time_array[5]
    );

    let now = new Date();

    let difference = Math.floor((now - old_time) / 1000);

    let daysx = Math.floor(difference / 86400);

    let hoursx = Math.floor((difference % 86400) / 3600);

    let minutesx = Math.floor((difference % 3600) / 60);

    let secondsx = difference % 60;

    sec = secondsx;
    min = minutesx;
    hour = hoursx;
    day = daysx;

    sec = String(sec).padStart(2, "0");
    min = String(min).padStart(2, "0");
    hour = String(hour).padStart(2, "0");
    
    time = `${day}:${hour}:${min}:${sec}`;
    text.textContent = time;
}

setInterval(() => {
    sec ++;
    sec = String(sec).padStart(2, "0");
    min = String(min).padStart(2, "0");
    hour = String(hour).padStart(2, "0");

    if(sec >= 60){
        sec = 0;
        min ++;
    }
    if(min >= 60){
        min = 0;
        hour ++;
    }
    if(hour >= 24){
         hour = 0;
         day ++;
    }
        
    time = `${day}:${hour}:${min}:${sec}`;
    text.textContent = time;



    const now = new Date();

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let days = now.getDate();
    let months = now.getMonth() + 1;
    let years = now.getFullYear();

    last_time = `${years}:${months}:${days}:${hours}:${minutes}:${seconds}`;

    

}, 1000);



function reset(){

    sec = 0;
    min = 0;
    hour = 0;
    day = 0;
    time = `0:00:00:00`;
    text.textContent = time;
    localStorage.setItem("reset_time" , last_time);
}
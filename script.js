
function showTime(){  

const h = document.querySelector("#hours");
const m = document.querySelector("#minutes");
const s = document.querySelector("#seconds");
const period = document.querySelector("#period");
const d = document.querySelector("#date");

let now = new Date();
let hour =  now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
hour = hour % 12;
hour = hour ? hour : 12 ;
period.textContent = hour >= 12 ? "PM" : "AM";
h.innerHTML = hour

let minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
m.innerHTML=minute

let second =  now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
s.innerHTML = second

let date = now.toLocaleDateString('en-GB', {
    weekday: 'long',  // "Monday"
    day: '2-digit',   // "01"
    month: 'long',    // "January"
    year: 'numeric'   // "2026"
});

d.innerHTML = date ;

}

showTime();

setInterval(showTime , 1000)


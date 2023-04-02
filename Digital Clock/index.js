const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const ampm = document.getElementById("ampm")

function updateClock(){
    let date = new Date();
    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let dateSeconds = date.getSeconds();
    let dateAmPm;

    dateAmPm = dateHours >= 12 ? "PM" : "AM";

    (dateHours > 12 ? dateHours -= 12 : dateHours);

    hours.innerText = dateHours < 10 ? "0"+dateHours : dateHours;

    minutes.innerText = dateMinutes < 10 ? "0"+dateMinutes : dateMinutes;

    seconds.innerText = dateSeconds < 10 ? "0"+dateSeconds : dateSeconds;

    ampm.innerText = dateAmPm;

    setTimeout(() => { updateClock() }, 1000);
}

updateClock()



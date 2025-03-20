let tile = document.querySelector(".tile");
let switchofon = document.querySelector(".onofbtn");
let body = document.querySelector("body");
let wlcm = document.querySelector(".wlc");
let stage = document.querySelector(".stage")
function ofon(){
    tile.classList.add("load");
    stage.classList.add("load3")
    wlcm.classList.add("load2");
    stage.classList.remove("off")
    
    tile.classList.remove("off");
    body.classList.remove("dim");
    wlcm.classList.remove("off");


}
function oaf(){
    tile.classList.add("off");
    stage.classList.add("off")
    body.classList.add("dim");
    wlcm.classList.remove("load2");
    wlcm.classList.add("off");
}
switchofon.addEventListener("click", ofon);
switchofon.addEventListener("dblclick", oaf);
function displayTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeString = `${hours} : ${minutes} : ${seconds}`;
    document.querySelector('.time').innerText = timeString;
}

// Update time every second
setInterval(displayTime, 1000);

setInterval(() => {let h = document.querySelector(".hrs");

let m = document.querySelector(".mins");
let s = document.querySelector(".secs");
let d = new Date();
h.innerText = d.getHours();
m.innerText = d.getMinutes();


let sec = d.getSeconds();
s.innerHTML = sec;
}, 1000);

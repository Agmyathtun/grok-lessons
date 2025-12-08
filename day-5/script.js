const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0
let int = setInterval(blurring, 30); // call blurring function every 30 milliseconds 30ms = 0.03 seconds (1000ms = 1 second therefore 100% * 30ms = 3000ms = 3 seconds)

function blurring() {
    load++;

    if (load >99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = `${scale(load,0,100,1,0)}`; // opacity from 1 to 0 (last value 1,0) otherwise it will be from 0 to 1
    bg.style.filter = `blur(${scale(load,0,100,70,0)}px)`; // blur from 70px to 0px (last value 70,0) if (0,70 it will be from 0px to 70px)
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
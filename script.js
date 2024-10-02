const randomcolor = function () {
    let bgcolor = Math.floor(Math.random() * 16777215).toString(16);
    bgcolor = "#" + bgcolor.padStart(6, '0');
    return bgcolor;
};
let interval;
const startchangingcolor = function () {

    if (!interval) {
        interval = setInterval(changebgcolor, 1000);

    }

    function changebgcolor() {
        document.querySelector('.box').style.backgroundColor = randomcolor();

    }
};
const stopchangingcolor = function () {
    clearInterval(interval)
    interval = null;

};

document.querySelector('#startBtn').addEventListener('click', startchangingcolor)

document.querySelector('#stopBtn').addEventListener('click', stopchangingcolor)
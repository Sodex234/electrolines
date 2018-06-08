/*

    Electrolines - a game created by Scott Hiett
    Free to download on github.
    Send coffee to the developers.

    https://github.com/Sodex234/electrolines/

*/

/* Screen Rendering Items */
var canvas = null;
var c = null;

var WIDTH = 0;
var HEIGHT = 0;

/* Input Data Information */

var mouseX = 0;
var mouseY = 0;

/*  Document Events */

$(document).ready(() => {
    createWindow();
    createSocket();

    removeLoading();

    setInterval(mainDraw, 1000 / 60);
});

$(document).mousemove((event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
});

/* General Init Functions */
function createWindow() {
    canvas = document.getElementById("gameCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    WIDTH = canvas.width;
    HEIGHT = canvas.height;

    c = canvas.getContext("2d");
}

function createSocket() {

}

function removeLoading() {
    $(".loading").remove();
}

/* Rendering Functions */
function mainDraw() {
    c.fillStyle = "#ecf0f1";
    c.fillRect(0, 0, WIDTH, HEIGHT);

    c.fillStyle = "#2d3436";

    renderCircles();

    c.fillRect(WIDTH / 2, 0, 1, HEIGHT);
    c.fillRect(0, HEIGHT / 2, WIDTH, 1);

    renderMouse();
}

function renderCircles() {
    fillEllipse(WIDTH / 2, HEIGHT / 2, 50, 50)
}

function renderMouse() {
    c.beginPath();

    c.moveTo(mouseX, mouseY);
    c.lineTo(mouseX + 10, mouseY + 20);
    c.lineTo(mouseX + 20, mouseY + 10);
    c.fill();
}

/* Utils */
function fillEllipse(x, y, width, height) {
    c.beginPath();
    c.ellipse(x, y, width, height, 0 / 180, 2 * Math.PI, false);
    c.fill();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
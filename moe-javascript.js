/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* document.querySelector('div.background').textContent = " X = " + x + "][ Y = " + y; */

document.addEventListener("mousemove", function (event) {
    var x = event.clientX;
    var y = event.clientY;

    var posX = x - 2000 + 'px';
    var posY = y - 2000 + 'px';

    document.body.style.setProperty('--positionY', posY);
    document.body.style.setProperty('--positionX', posX);
    console.log(posX, posY);
});

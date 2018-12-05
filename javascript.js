/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var boekenIcon = document.querySelector('.boekenicon');





var hartje = document.querySelectorAll('.heart');









var i = 0;
for (i = 0; i < hartje.length; i++) {
    console.log('hartje');
    hartje[i].addEventListener('click', toggle);
}

function toggle(e) {
    e.currentTarget.classList.toggle('liked');
    boekenIcon.classList.toggle('scale');
    setTimeout(function () {
        boekenIcon.classList.toggle('scale');
    }, 500);
}

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var boekenIcon = document.querySelector('.boekenicon');
var boekenLijst = document.querySelector('.boekenlijst');

var downloadKnop = document.querySelector('.fa-arrow-alt-circle-down');
var loadingBar = document.querySelector('.loadingbar');
var percentage = document.querySelector('.loadingbar p');
var laadPercentage;
laadPercentage = 10;

var hartje = document.querySelectorAll('.heart');




function optellen() {
    laadPercentage = laadPercentage + 10;
    percentage.textContent = laadPercentage + ' / 100%';
    if (laadPercentage >= 100) {
        laadPercentage = 10;
    }
}

function animatie() {
    downloadKnop.classList.add('download');
    loadingBar.classList.add('display');

    //    setInterval(function optellen() {
    //    laadPercentage = laadPercentage + 10;
    //    percentage.textContent = laadPercentage + ' / 100%';
    //    if (laadPercentage >= 100) {
    //        laadPercentage = 0;
    //        clearInterval(optellen);
    //    }
    //}, 500);

    setInterval(optellen, 500);
    setTimeout(function () {
        downloadKnop.classList.remove('download');
    }, 1000);
    setTimeout(function () {
        loadingBar.classList.remove('display');
        downloadKnop.classList.remove('fa-arrow-alt-circle-down');
        downloadKnop.classList.add('fa-check-circle');
        clearInterval(optellen);
    }, 5000);
}



boekenIcon.addEventListener('click', function () {
    boekenLijst.classList.toggle('show');
});
downloadKnop.addEventListener('click', animatie);


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

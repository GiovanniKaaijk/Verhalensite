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

var sorteerKleur = document.querySelector('.kleurrijk');
var kleurrijk = document.querySelector('main section:nth-child(1)');
var komisch = document.querySelector('main section:nth-child(2)');
var monogroom = document.querySelector('main section:nth-child(3)');
var psychydelisch = document.querySelector('main section:nth-child(4)');
var drama = document.querySelector('main section:nth-child(5)');

var openHart = document.querySelector('.closed-heart');
var dichtHart = document.querySelector('.open-heart');

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
        clearInterval(optellen);
    }, 5000);
}


function kleur() {
    komisch.classList.toggle('hide');
    monogroom.classList.toggle('hide');
    psychydelisch.classList.toggle('hide');
    drama.classList.toggle('hide');
}


function hartje() {
    openHart.classList.toggle('hide');
    dichtHart.classList.toggle('hide');
    boekenIcon.classList.toggle('scale');
    setTimeout(function () {
        boekenIcon.classList.toggle('scale');
    }, 500);
}

boekenIcon.addEventListener('click', function () {
    boekenLijst.classList.toggle('show');
});
downloadKnop.addEventListener('click', animatie);


sorteerKleur.addEventListener('click', kleur);

openHart.addEventListener('click', hartje);
dichtHart.addEventListener('click', hartje);

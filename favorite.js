/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var trashBin = document.querySelectorAll('.fa-trash-alt');
var i = 0;

var row = '';
var counter = 0;
var blankstate = document.querySelector('.blank');

var allButtons = document.querySelectorAll('.fa-arrow-alt-circle-down');
var x = 0;

for (x = 0; x < allButtons.length; x++) {
    allButtons[x].addEventListener('click', spinning);

}

function spinning(e) {
    var target = e.currentTarget;
    var sibling = e.currentTarget.nextElementSibling;
    sibling.classList.toggle('display');
    target.classList.toggle('opacity');
    setTimeout(function () {
        sibling.classList.toggle('display');
        target.classList.remove('fa-arrow-alt-circle-down');
        target.classList.add('fa-check-circle');
        target.classList.toggle('opacity');
    }, 2000);
}

for (i = 0; i < trashBin.length; i++) {
    console.log('trash');
    trashBin[i].addEventListener('click', deleteRow);
}




function deleteRow(e) {
    counter += 1;
    row = e.currentTarget.parentElement;
    console.log(row);
    row.classList.toggle('opacity');
    row.classList.toggle('shrink');
    setTimeout(function () {
        row.classList.toggle('delete');
    }, 500);
    console.log(counter);
    if (counter >= 4) {
        blankstate.classList.toggle('hide');
    }
}

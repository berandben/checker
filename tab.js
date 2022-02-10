"use strict";

let tab;

document.addEventListener("DOMContentLoaded", load, false);

function load() {

    tab = document.getElementById('visualizar');

    listernersUp();
}

function listernersUp() {

    tab.addEventListener('keydown', tabPressed, false);

}

function tabPressed(event) {

    if (event.key === 'Tab') {

        corregir();
    }

}


import { Age } from "./../assets/js/spaceAge.js";

$(document).ready(function() {
  $('#age').submit(function(event) {
    event.preventDefault();
    let age = new Age($('#age').val(), $('#expectancy').val());
    let mercury = age.ageMercury();
    let mercuryExpectancy = age.mercuryExpectancy();
    let venus = age.ageVenus();
    let mars = age.ageMars();
    let jupiter = age.ageJupiter();
    let earth = age.ageInSeconds();
    $('#mercuryAge').text(mercury)
    $('#mercuryExpectancy').text(mercuryExpectancy)
    $('#venusAge').text(venus)
    $('#venusExpectancy').text()
    $('#marsAge').text(mars)
    $('#marsExpectancy').text
    $('#jupiterAge').text(jupiter)
    $('#jupiterExpectancy').text
    $('#age').text(earth) //ageInSeconds

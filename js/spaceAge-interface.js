import { Age } from "./../assets/js/spaceAge.js";

$(document).ready(function() {
  $('#age').submit(function(event) {
    event.preventDefault();
    let mercury = ageMercury;
    let venus = ageVenus;
    let mars = ageMars;
    let jupiter = ageJupiter;
    let earth = age;
    $('#mercuryAge').text(mercury)
    $('#mercuryExpectancy').text()
    $('#venusAge').text(venus)
    $('#venusExpectancy').text()
    $('#marsAge').text(mars)
    $('#marsExpectancy').text
    $('#jupiterAge').text(jupiter)
    $('#jupiterExpectancy').text
    $('#age').text(earth)

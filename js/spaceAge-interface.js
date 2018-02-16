import { Age } from "./../js/spaceAge.js";

$(document).ready(function() {
  $('#form').submit(function(event) {
    debugger;
    event.preventDefault();
    let age = new Age($('#ageInput').val(), $('#expectancy').val());
    let mercury = age.ageMercury();
    let mercuryExpectancy = age.mercuryExpectancy();
    let venus = age.ageVenus();
    let venusExpectancy = age.venusExpectancy();
    let mars = age.ageMars();
    let marsExpectancy = age.marsExpectancy();
    let jupiter = age.ageJupiter();
    let jupiterExpectancy = age.jupiterExpectancy();
    let earth = age.ageInSeconds();
    $('#mercuryAge').append(mercury);
    $('#mercuryExpectancy').append(mercuryExpectancy);
    $('#venusAge').append(venus);
    $('#venusExpectancy').append(venusExpectancy);
    $('#marsAge').append(mars);
    $('#marsExpectancy').append(marsExpectancy);
    $('#jupiterAge').append(jupiter);
    $('#jupiterExpectancy').append(jupiterExpectancy);
    $('#ageSeconds').append(earth);//ageInSeconds
  })
});

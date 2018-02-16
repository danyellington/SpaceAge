import { Age } from './../js/spaceAge.js';

describe('spaceAge', function() {


  it('should return the user age', function() {
    let userAge = new Age("12");
    expect(userAge instanceof Age);
  });


  // it('should return the user age in seconds', function() {
  //   let secondsAge = ageInSeconds("1");
  //   expect(secondsAge).toEqual("1");
  // });

  it('should calculate user age on Mercury', function() {
    let userAge = new Age("12");
    expect(userAge.ageMercury()).toEqual(50);
  })

  it('should calculate user age on Venus', function() {
    let userAge = new Age("12");
    expect(userAge.ageVenus()).toEqual(19);
  })

  it('should calculate user age on Mars', function() {
    let userAge = new Age("45");
    expect(userAge.ageMars()).toEqual(23);
  })

  it('should calculate user age on Jupiter', function() {
    let userAge = new Age("30");
    expect(userAge.ageJupiter()).toEqual(2);
  })
});

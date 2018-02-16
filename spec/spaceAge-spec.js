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

  // it('should calculate user age on Mercury', function() {
  //   let userAge = new Age("12");
  //   expect(userAge.ageMercury());
  // })

  it('should calculate user age on Venus', function() {
    let userAge = new Age("12");
    expect(userAge.ageVenus()).toEqual(19);
  })
});

// mercury .24
// venus .62
// mars 1.88
// jupiter 11.86

export class Age{
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  function ageInSeconds(age) {
    let ageInSeconds = this.age * 35 * 24 * 60 * 60;
    return ageInSeconds;
  }


  function getAgeMercury(age){
    let mercuryAge = this.age / .24;
    return mercuryAge;
  }

  function getAgeVenus(age){
    let venusAge = this.age / .62;
    return venusAge;
  }

  function getAgeMarss(age){
    let marsAge = this.age / 1.88;
    return marsAge;
  }

  function getAgeJupiter(age){
    let jupiterAge = this.age / 11.86;
    return jupiterAge;
  }

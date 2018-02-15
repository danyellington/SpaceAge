// mercury .24
// venus .62
// mars 1.88
// jupiter 11.86

export class Age{
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  ageInSeconds() {
    let ageInSeconds = this.age * 365 * 24 * 60 * 60;
    return ageInSeconds;
  }


  AgeMercury(){
    let mercuryAge = this.age / .24;
    return mercuryAge;
  }

  AgeVenus(){
    let venusAge = this.age / .62;
    return venusAge;
  }

  AgeMars(){
    let marsAge = this.age / 1.88;
    return marsAge;
  }

  AgeJupiter(){
    let jupiterAge = this.age / 11.86;
    return jupiterAge;
  }

  expectancy(){
    let lifeExpectancy = this.expectancy - this.age;
    return lifeExpectancy;
  }
}

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
    const ageInSeconds = this.age * 365 * 24 * 60 * 60;
    return ageInSeconds;
  }

  expectancy(){
    const lifeExpectancy = this.expectancy - this.age;
    return Math.ceil(lifeExpectancy);
  }

//Mercury
  ageMercury(){
    const mercuryAge = this.age / .24;
    return Math.floor(mercuryAge);
  }

  lifeExpectancyMercury() {
    let mercuryExpectancy = this.expectancy / .24;
    return Math.ceil(mercuryExpectancy - this.ageMercury());
  }

//Venus
  ageVenus(){
    let venusAge = this.age / .62;
    return Math.floor(venusAge);
  }

  lifeExpectancyVenus() {
    let venusExpectancy = this.expectancy / .24;
    return Math.ceil(venusExpectancy - this.ageVenus());
  }

//Mars
  ageMars(){
    let marsAge = this.age / 1.88;
    return Math.floor(marsAge);
  }

  lifeExpectancyMars() {
    let marsExpectancy = this.expectancy / .24;
    return Math.ceil(marsExpectancy - this.ageMars());
  }

//Jupiter
  ageJupiter(){
    let jupiterAge = this.age / 11.86;
    return Math.floor(jupiterAge);
  }

  lifeExpectancyJupiter() {
    let jupiterExpectancy = this.expectancy / .24;
    return Math.ceil(jupiterExpectancy - this.ageJupiter());
  }




}

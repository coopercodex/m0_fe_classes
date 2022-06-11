// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = 'silver';
  }

  say(newSay) {
    return `*~* ${newSay} *~*`;
  }
};

var unicorn1 = new Unicorn('sally');
console.log('unicorn object', unicorn1);

var uni = unicorn1.say('potatoes');
console.log(uni)
console.log('unicorn say', unicorn1.say('potatoes'));
console.log(unicorn1.name);


// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
  }

  drink() {
    this.thirsty = false;
  }
}
var vampire1 = new Vampire('sal', 'bat');
console.log('before drink', vampire1.thirsty);
vampire1.drink()
console.log('after drink', vampire1.thirsty);
console.log(vampire1.pet);

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.isHungry = true;
    this.meals = 0;
  }
  eat() {
    this.meals += 1;
   if (this.meals >= 4) {
      this.isHungry = false;
    }
  }
}
var dragon1 = new Dragon('doug', 'dave', 'dark');
console.log('name', dragon1.name);
console.log('rider', dragon1.rider);
console.log('color', dragon1.color);
dragon1.eat();
dragon1.eat();
dragon1.eat();
dragon1.eat();
dragon1.eat();
console.log(dragon1.isHungry)
var dragon2 = new Dragon('adam', 'eve', 'orange');
console.log('nameofdragon1', dragon1.name);
console.log('nameofdragon2', dragon2.name);
console.log(dragon2.isHungry);
dragon2.eat();
dragon2.eat();

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class Hobbit {
  constructor(name, disposition) {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = (this.name === 'Frodo');
  }
  celebrateBirthday() {
    this.age += 1;
    if (this.age === 33) {
      this.isAdult = true;
    } else if (this.age >= 101) {
      this.isOld = true;
    }
  }
};

var hobbit1 = new Hobbit('kitty', 'happy');
console.log('name', hobbit1.name);
console.log('disposition', hobbit1.disposition);
  for (var i = 0; i < 101; i++) {
    hobbit1.celebrateBirthday();
  }
  console.log(hobbit1.isAdult, hobbit1.isOld);
  console.log(hobbit1.hasRing);

  var hobbit2 = new Hobbit('Frodo', 'weird');
  console.log('has ring: ', hobbit2.hasRing)

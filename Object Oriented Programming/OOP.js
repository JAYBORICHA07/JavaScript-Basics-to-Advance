// -----------------------------------------------------------------------------------------------------
let dog = {
  name: "Eric",
  numLegs: 4,
};
// -----------------------------------------------------------------------------------------------------
let dog = {
  name: "Spot",
  numLegs: 4,
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);
// -----------------------------------------------------------------------------------------------------
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return `This dog has ${dog.numLegs} legs.`;
  },
};

dog.sayLegs();
// -----------------------------------------------------------------------------------------------------
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
  //Here in "this.numLegs" this refers to the object that the method is associated with: dog.
  // If the object's name is changed to mallard, it is not necessary to find all the references to duck
};

dog.sayLegs();
// -----------------------------------------------------------------------------------------------------
//this is an example of Constructor Which is used to build new function
//In constructor we syntax is something like "function FunName(){P1;P2;P3}"
//Where first letter of FunName must be capitals
//P1,P2,... are the properties which must define like this.ProName(there is no condition for ProName)
function Dog() {
  this.name = "Eric";
  this.color = "Brown";
  this.numLegs = 4;
}
// -----------------------------------------------------------------------------------------------------
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();
// Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new
//instance of Dog called hound. Without the new operator, this inside the constructor would not point to
//the newly created object, giving unexpected results. Now Hound has all the properties defined inside the
//Dog constructor.
// -----------------------------------------------------------------------------------------------------
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Bruce", "Black");

//pass in the values as arguments to define each unique Dog into the Dog constructor: let cardinal = new
// Dog("Bruce", "Black"); This gives a new instance of Dog with name and color properties set to Bruce
// and Black, respectively. The numLegs property is still set to 4.
// -----------------------------------------------------------------------------------------------------
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(5);
myHouse instanceof House;
// Anytime a constructor function creates a new object, that object is said to be an instance of its
//   constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof
// allows you to compare an object to a constructor, returning true or false based on whether or not that
// object was created with the constructor.
// -----------------------------------------------------------------------------------------------------
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
//here name and numLegs are called own properties
let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
//now ownProps will be ["name", "numLegs"]
// -----------------------------------------------------------------------------------------------------
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");

// now beagle will have two properties name and numLegs we use this technique when we need same property
//   in a lot of constructors so we don't need to write them in function
// -----------------------------------------------------------------------------------------------------
function Dog(name) {
  this.name = name; //own property
}

Dog.prototype.numLegs = 4; // prototype property

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let property in beagle) {
  if (Dog.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
// Only change code below this line
// -----------------------------------------------------------------------------------------------------
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
// -----------------------------------------------------------------------------------------------------
function Dog(name) {
  this.name = name;
}
//A more efficient way is to set the prototype to a new object that already contains the properties.
//   This way, the properties are added all at once:
Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log(`my name is ${this.name}`);
  },
};
// -----------------------------------------------------------------------------------------------------
function Dog(name) {
  this.name = name;
}
// There is one crucial side effect of manually setting the prototype to a new object. It erases the
//   constructor property! This property can be used to check which constructor function created the
// instance, but since the property has been overwritten, it now gives false results:
// Only change code below this line
Dog.prototype = {
  //To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
// -----------------------------------------------------------------------------------------------------
function Dog(name) {
  this.name = name;
}
//an object inherits its prototype directly from the constructor function that created it.
let beagle = new Dog("Snoopy");

// beagle inherits its prototype from the Dog constructor function. You can show this relationship with
//   the isPrototypeOf method:
// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);
//console.log(Dog.prototype.isPrototypeOf(beagle))... This would return true.
// -----------------------------------------------------------------------------------------------------
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
// -----------------------------------------------------------------------------------------------------
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}
Animal.prototype = {
  constroctor: Animal,
  eat: function () {
    console.log(`nom nom nom`);
  },
};
// -----------------------------------------------------------------------------------------------------
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
// -----------------------------------------------------------------------------------------------------
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
// -----------------------------------------------------------------------------------------------------
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
// -----------------------------------------------------------------------------------------------------
function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
// Only change code below this line
Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Only change code above this line

let beagle = new Dog();
// -----------------------------------------------------------------------------------------------------
function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
// -----------------------------------------------------------------------------------------------------
let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line

let glideMixin = function (obj) {
  obj.glide = function () {};
};

glideMixin(bird);
glideMixin(boat);
// -----------------------------------------------------------------------------------------------------
function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}
// -----------------------------------------------------------------------------------------------------
(function () {
  console.log("A cozy nest is ready");
})();
// -----------------------------------------------------------------------------------------------------
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();
// -----------------------------------------------------------------------------------------------------
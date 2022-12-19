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
  let myHouse = new House(5)
  myHouse instanceof House
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
  
  for(let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property)
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

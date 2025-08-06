const myDog = {
  name: "Clifford",
  owner: "Emily",
  tvshow: "Clifford the Big Red Dog",
  speak: "I am very tall but I am not scary",

  get description() {
    return `${this.name} is owned by ${this.owner} and stars in ${this.tvshow}. ${this.name} says: "${this.speak}".`;
  }
};

alert(myDog.description);


// Constructor function
function Dog(name, owner, tvshow, speak, canTalk) {
  this.name = name;
  this.owner = owner;
  this.tvshow = tvshow;
  this.speak = speak;
  this.canTalk = canTalk;

  this.myGreeting = function () {
    return `${this.name} is owned by ${this.owner} and stars in ${this.tvshow}. 
    ${this.name} says: "${this.speak}". Can he talk? ${this.canTalk}, but only to other dogs.`;
  };
}


const myDogConst = new Dog(
  "Clifford",
  "Emily",
  "Clifford the Big Red Dog",
  "I am very tall but I am not scary",
  true
);


alert(myDogConst.myGreeting());

	
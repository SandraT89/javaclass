
function Dog(name, owner, tvshow, speak, canTalk) {
  this.name = name;
  this.owner = owner;
  this.tvshow = tvshow;
  this.speak = speak;
  this.canTalk = canTalk;

  this.myGreeting = function () {
    let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
    return `${this.name} is owned by ${this.owner} and stars in ${this.tvshow}. 
${this.name} says: "${this.speak}". ${talkMessage}`;
  };
}

const myDogConst = new Dog("Clifford", "Emily", "Clifford the Big Red Dog", "I am very tall but I am not scary", true);
let dog1 = new Dog("Hong Kong Phooey", "No one", "A show named after himself", "Watch me fight bad guys!", true);
let dog2 = new Dog("Scooby-Doo", "Shaggy", "A show named after himself", "I solve mysteries but I'm afraid of ghosts!", true);

// Store with lowercase keys for case-insensitive match
let dogList = {
  "clifford": myDogConst,
  "hong kong phooey": dog1,
  "scooby-doo": dog2
};

// Ask user
let userChoice = prompt("Enter a dog's name (Clifford, Hong Kong Phooey, Scooby-Doo):");
userChoice = userChoice.toLowerCase();

let infoParagraph = document.getElementById("dogInfo");

if (dogList[userChoice]) {
  infoParagraph.textContent = dogList[userChoice].myGreeting();
} else {
  infoParagraph.textContent = "Sorry, that dog does not exist.";
}

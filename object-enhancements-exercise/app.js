/* Write an ES2015 Version */

function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  };
}

/* Write an ES2015 Version */

let favoriteNumber = 42;

const instructorFavNum = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

/* Write an ES2015 Version */

const instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!" 
  }
}

function createAnimal(species, verb, noise) {
  return {
    species, 
    [verb]() {
      return noise;
    }
  }
}
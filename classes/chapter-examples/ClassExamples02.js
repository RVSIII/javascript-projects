// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name, age = 161, mass){
     this.name = name;
     this.age = age;
     this.mass = mass
   }
}

let tortoise = new Astronaut('Speedy', 83);
let dog = new Astronaut("Rover", 8, 85)
console.log(tortoise.name, "", tortoise.mass);

console.log(dog)
// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!
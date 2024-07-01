let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodNew = (food.split(",").sort()).join(", ");
let equipmentNew = (equipment.split(",").sort().join(", "));
let petsNew = (pets.split(",").sort().join(", "));
let sleepAidsNew = (sleepAids.split(",").sort().join(", "));

console.log(foodNew);
console.log(equipmentNew);
console.log(petsNew);
console.log(sleepAidsNew);
console.log(" \n ")
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [
    foodNew,
    equipmentNew,
    petsNew,
    sleepAidsNew
]
console.log(cargoHold)
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

const input = require('readline-sync');
let answer = input.question("Select a cabinet 0-3 in the cargoHold: ");

let newAnswer = Number(answer);

console.log(`The contents of the cabinet you selected are ${cargoHold[newAnswer]}`);

let answerTwo = input.question("Now name a particular item for which you are looking: ");

/*EACH OF THESE STEPS WAS ME TESTING A MODIFICATION TO THE CODE, BUILDING UP ONE STEP AT A TIME TO THE FINAL GOAL.
console.log(answerTwo);

console.log(typeof newAnswer)

console.log(cargoHold[2])

console.log(cargoHold[newAnswer].includes(answerTwo));
*/
if (cargoHold[newAnswer].includes(answerTwo)) {
    console.log("You're in luck!  There IS one of those in that cabinet!")
} else {console.log(`Too bad--there I can't find a ${answerTwo} in there`)}

/*
if (answer <0 || answer >3) {
    console.log("Please select the number 0, 1, 2, or 3.")
} else {
   if cargoHold[answer].includes(newAnswer)

console.log(newAnswer)
}




else {
    console.log(`The contents of the cabinet you selected are ${cargoHold[answer]}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
*/
// Declare and assign the variables below

let shuttleName = "Determination";

let shuttleSpeedMph = 17500;

let kilToMars = 225000000;

let kilToMoon = 384400;

let milesPerKil = .621;

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof kilToMars);
console.log(typeof kilToMoon);
console.log(typeof milesPerKil);

let milesToMars = kilToMars * milesPerKil;

let hrsToMars = milesToMars / shuttleSpeedMph;

let daysToMars = hrsToMars / 24;

console.log (milesToMars)

console.log (shuttleName + " will take " + daysToMars + " days to reach Mars");

let milesToMoon = kilToMoon * milesPerKil;

let hrsToMoon = milesToMoon / shuttleSpeedMph;

let daysToMoon = hrsToMoon / 24;

console.log (shuttleName + " will take " + daysToMoon + " days to reach the Moon.");

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below
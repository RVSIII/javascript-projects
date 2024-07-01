const input = require('readline-sync');


let str = "LaunchCode";

let firstNewStr = str.slice(0, 3);
let secondNewStr = str.slice(3, 10);

console.log(secondNewStr.concat(firstNewStr));

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${(secondNewStr.concat(firstNewStr))} is the output of using slice and concat on ${str}`)


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let answer = input.question("Enter the number of letters to be relocated: ");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (answer > str.length) {
    console.log(`Error: ${answer} is invalid!  3 characters moved by default.`);

    console.log((str.slice(4, 10)).concat(str.slice(0, 3)));

}
else {
    let myNewString = str.slice(answer)+str.slice(0,answer)
    console.log(myNewString)
}
    
/*function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}
*/

function isEven(n) {
   if (n % 2 === 0) {
       console.log(true);
   } else {
       console.log(false);
   }
}

if (isEven(3) === true) {
   console.log("Totes!")
} else {
   console.log("Nopers!")
}
//console.log(isEven(4));
//console.log(isEven(7));
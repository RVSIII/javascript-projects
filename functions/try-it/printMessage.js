let message = "Hello, World!";

function printMessage(cow) {
   message = cow;
   console.log(message);
   return message;
}

console.log(message);

printMessage("monkey")

//printMessage();
//message = "Goodbye";
//printMessage();



/*function countToN(n) {
   let count = 1;
   while (true) {
       if (count > n) {
         console.log(count);
                  return;
       }
       console.log(count);
       count++;
   }
}

countToN(3)
*/

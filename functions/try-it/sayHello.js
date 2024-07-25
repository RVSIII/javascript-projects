function sayHello() {
   console.log()
   console.log("Hello, World!");
}
sayHello()

function sumToN(n) {
   let sum = 0;
   for (let i = 0; i <= n; i++) {
       sum += i;
   }
   console.log(sum)
//   return sum;
}

//console.log(sumToN(3));
//This isn't a great example of why the return statement is important, because replacing it within the function with console.log apparently produces the exact same result.  For all we can see, it makes return and console.log interchangeable.
sumToN(3);
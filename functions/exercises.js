



function makeLine(size) {
    let line = '';
    for (i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

/*function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += (makeLine(size)) + "\n";
    }
    return square;
}
*/

function makeSquare(size) {
  let square = '';
  for (let i = 0; i < size; i++) {
      square += (makeLine(size)) + "\n";
  }
  return square;
}

console.log(makeSquare(8));
console.log(makeLine(5))

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }
  console.log(makeRectangle(5, 3));



  /*
function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
   return rectangle.slice(0, -1);
  }
*/
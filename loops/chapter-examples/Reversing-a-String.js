/*let str = "blue";
let reversed = "";

for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
}

console.log(reversed);
*/

/*let text = "1Le2tt34er5s 6on7ly8!"
let correctText = "";
for (let i = 0; i < text.length; i++) {
if (isNaN(Number(text[i])) || text[i] === " ") {
	correctText += text[i];
}
}
console.log(correctText);
*/
/*let threePews = "";
for (let i = 1; i <= 3; i++) {
    threePews += "pew";
    if (i < 3) {
        threePews += " ";
    }
    console.log(threePews);
}
console.log(threePews);
*/

let names = ["Aldaraan", "Calrissian", "Andor", "Armorer", "Ahsoka", "Greedo", "Ackbar", "Sateen", "Amadala"];
let onlyANames = [];
for (let i = 0; i < names.length; i++) {
if (names[i][0] === "A") {
onlyANames.push(names[i]);
}
}
console.log(onlyANames);


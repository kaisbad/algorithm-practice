/* const n = 5;

let yesterday = input;
let today = input;

function occupiedBoth(yesterday, today) {
  for (yesterday in today) {
    yesterday.forEach(space) =>
}
}
occupiedBoth(); */

function getSpaces(spaces, yes, today) {
  let count = 0;

  for (let i = 0; i < spaces; i++) {
    //++ is += or x = x+1
    if (yes[i] === "C" && today[i] === "C") {
      count += 1;
    }
  }
  return count;
}
console.log(getSpaces(5, "CC..C", "C.C.C"));

/* const n = 5;

let yesterday = input;
let today = input;

function occupiedBoth(yesterday, today) {
  for (yesterday in today) {
    yesterday.forEach(space) =>
}
}
occupiedBoth(); */

/* function getSpaces(spaces, yes, today) {
  let count = 0;

  for (let i = 0; i < spaces; i++) {
    //++ is += or x = x+1
    if (yes[i] === "C" && today[i] === "C") {
      count += 1;
    }
  }
  return count;
}
console.log(getSpaces(5, "CC..C", "C.C.C")); */

//divide number by 2 until reach 0 (ignore remainder)
//take the remainders and
/* function decimalBinary(number) {
    for (let i = 0; i > 0; i++) {
        if (number % 2) 

    }
} */

//start from leftmost digit - multiply the digit by the left digit + 1
//use this product and continue

function binaryDecimal(binary) {
  let product = 0;
  let adder = 1;
  let decimalvalue = 1;
  for (let i = binary.length - 1; i > 0; i--) {
    if (binary[i] == "1") {
      product = product + adder;
      decimalvalue = product * 2 + adder;
    }
    adder = decimalvalue;
  }
  console.log(product);
}
binaryDecimal("00011");

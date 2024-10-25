function binaryDecimal(binary) {
  let decimal = 0;
  //x = binary.reverse
  //option to reverse
  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - 1 - i] === "1") {
      decimal = decimal + Math.pow(2, i);
      //decimal = decimal + 2^0 -> ^1 etc etc;
    }
  }
  return decimal;
}
console.log(binaryDecimal("1101"));
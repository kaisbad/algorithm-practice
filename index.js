for (let i = 0; i < 7; i++) {
  //i === 0
  console.log(i);
}

let x = [1, 2, 3, 4];
x.forEach((i) => console.log(i));

/* let HP = 100;
while (HP > 0) {
  console.log("select fight commadn");
  console.log("randomly select enemy command");
  console.log("subtract health");
  userFight();
  aiFight();
  calcDamage();
} */

let n = 12;
function factorialNumber(n) {
  if (n <= 0) {
    return "negative number or zero";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    //result = result * i
  }
  return result;
}

console.log(factorialNumber(5));

function newFactorial(n) {
  if (n > 0) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
      //result = result * i
    }
    return result;
  } else {
    return "something went wrong";
  }
}
DOMSelectors = { container: document.querySelector("container") };

function createBox() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div id="container"><p>Hello World</p></div>`
  );
}

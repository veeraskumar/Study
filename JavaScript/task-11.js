const sc = require("prompt-sync")({ sigint: true });

let n = sc("Enter the no.of value to Push : ");
let a = [];

for (let i = 0; i < n; i++) {
  let b = parseInt(sc("Enter the value : "));
  a.push(b);
}
console.log("Printing the arr - ", a);

let c = a.filter((x) => {
  return x % 2 == 0;
});
console.log("printing a even number - ", c);

let d = c.map((y) => {
  return y ** 3;
});
console.log("printing cube a value - ", d);

let sum = d.reduce((o, i) => {
  return o + i;
});
console.log("Add the cube numbers - ", sum);

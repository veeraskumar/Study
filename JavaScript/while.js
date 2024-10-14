let a = [36, 14444, 4325, 56, 8756, 1234];
console.log(
  a.map((c) => {
    return Math.sqrt(c, 2);
  })
);
console.log(
  a.sort((a, b) => {
    return a - b;
  })
);
console.log(
  a.reduce((o, i) => {
    return o + i;
  })
);

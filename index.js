const x = [0.17, 0.22, 0.27, 0.32];
const y = [0.1697, 0.2194, 0.2689, 0.3182];
const x1 = 0.26;
let result = y[0];
let product = 1;
const n = 4;

for (let i = 1; i < n; i++) {
  product *= x1 - x[i - 1];
  let dividedDiff = 0.0;
  for (let j = 0; j <= i; j++) {
    let term = y[j];
    for (let k = 0; k <= i; k++) {
      if (k !== j) {
        term /= x[j] - x[k];
      }
    }
    dividedDiff += term;
  }
  result += product * dividedDiff;
}

console.log(
  "The interpolation value at the point " + x1 + " is equal to " + result
);

function calculate(a, b, operation) {
  // operation = callback
  return operation(a, b);
}

console.log(
  calculate(2, 3, function (a, b) {
    return a + b;
  })
);

console.log(
  calculate(2, 3, function (a, b) {
    return a - b;
  })
);

console.log(
  calculate(2, 3, (a, b) => {
    return a ** b;
  })
);

// manfaat callback = untuk membuat fungsi lebih dinamis

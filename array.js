const numbers = [1, 2, 3, 4, 5]; // [10, 20, 30, 40, 50]
console.log(numbers);

const numbersTimes10 = numbers.map((value) => {
  return value * 10;
});

console.log(numbersTimes10);

numbersTimes10.forEach((value, index) => {
  console.log(`${index} = ${value}`);
});

const evenNumbers = numbers.filter((value) => {
  return value % 2 == 0;
});

const oddNumbers = numbers.filter((value) => {
  return value % 2 == 1;
});

console.log(oddNumbers);

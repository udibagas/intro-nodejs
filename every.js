const numbers = [11, 20, 32, 4, 52];

let isAllEven = numbers.some((el) => {
  return el % 2 == 0;
  // if (el % 2 == 0) {
  //   return true;
  // } else {
  //   return false;
  // }
});

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 1) {
//     isAllEven = false;
//     break;
//   }
// }

console.log(isAllEven);

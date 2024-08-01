const numbers = [1, 2, 3, 4, 5];
// const number1 = numbers[0];
// const number2 = numbers[1];
const [number1, , number2, ...sisanya] = numbers;

console.log(number1, number2);
console.log(sisanya);

const person = {
  name: "Bagas",
  city: "Semarang",
  children: 4,
  age: 30,
};

// const nama = person.name;
// const children = person.children;
const { name: nama, children, ...rest } = person;

console.log(nama);
console.log(children);
console.log(rest);

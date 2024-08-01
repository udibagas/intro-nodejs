const numbers = [1, 2, 3, 4, 5];
// const number1 = numbers[0];
// const number2 = numbers[1];
const [pertama, , ketiga, ...sisanya] = numbers;

console.log(pertama, ketiga);
console.log(sisanya);
numbers.reverse();
console.log(numbers);

const person = {
  name: "Bagas",
  city: "Semarang",
  children: 4,
  age: 30,
};

// const nama = person.name;
// const children = person.children;
const { name: nama, children, ...info } = person;

console.log(nama);
console.log(children);
console.log(info);

const names = ["Bagas", "Hamzah", "Putri", "Salsa"];
// const orang1 = names[0];
// const orang2 = names[1];
const [orang1, orang2, ...orang3] = names;

// console.log(orang1, orang2);
console.log(orang3.join(", "));

const people = [
  { name: "Bagas", gender: "Male" },
  { name: "Putri", gender: "Female" },
  { name: "Hamzah", gender: "Male" },
];

const [, { gender }] = people;
console.log(gender);

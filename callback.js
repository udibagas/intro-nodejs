// built in method array
// forEach (loop)

const { greet } = require("./libs/greeting");
const names = ["Bagas", "Putri", "Yasmin", "Hamzah"]; // ['BAGAS', ...]

names.forEach((name) => {
  console.log(greet(name));
});

// map
const namesCapital = names.map((name) => name.toUpperCase());
console.log(namesCapital);

function map(arr, mapper) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const newEl = mapper(arr[i]);
    result.push(newEl);
  }

  return result;
}

const names1 = map(names, (name) => {
  return name.toUpperCase();
});
console.log(names1);

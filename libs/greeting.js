// function greet(name) {
//   console.log(`Hello, ${name}`);
// }

// function test() {
//   console.log("Ini cuma test");
// }

// module.exports = {
//   greet,
//   test,
// };

// exports.greet = (name) => {
//   console.log(`Hello, ${name}`);
// };

exports.greet = function (name) {
  return `Hello, ${name}`;
};

exports.test = () => {
  console.log("Ini cuma test");
};

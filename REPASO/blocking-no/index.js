const fs = require("fs");

// const input = fs.readFileSync("input.txt", "utf-8");

// console.log(input);

const input = fs.readFile("input.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("Hola desde el codigo de js");

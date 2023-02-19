var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];
// question 1
// solution 1
const getAge = (bornOn) => {
  const date = new Date();
  return date.getFullYear() - bornOn;
};
pets = pets.map((el) => ({ ...el, age: getAge(el.bornOn) }));
console.log(pets);

// solution 2
pets = pets.map((el) => {
  return { ...el, age: getAge(el.bornOn) };
});
console.log(pets);

[
  { name: "Max", type: "dog", bornOn: 2018, age: 5 },
  { name: "Angel", type: "cat", bornOn: 2015, age: 8 },
  { name: "Jasper", type: "dog", bornOn: 2016, age: 7 },
];

// question2
var pets = [
  { name: "Max", type: "dog", bornOn: 2018, age: 5 },
  { name: "Angel", type: "cat", bornOn: 2015, age: 8 },
  { name: "Jasper", type: "dog", bornOn: 2016, age: 7 },
];

const getDogs = (arr) => arr.filter((el) => el.type === "dog");

console.log(getDogs(pets));

// question3

const getPet = (name) => {
  const pet = pets.find((el) => el.name === name);
  return `${pet.name} is ${pet.age} years old.`;
};

console.log(getPet("Max"));

//Probleme 2
const filterZero = (arr) => {
  const zero = arr.filter((el) => el === 0);
  const notZero = arr.filter((el) => el != 0);

  return [...notZero, ...zero];
};
console.log(filterZero([false, 1, 0, 4, 2, 0, 1, 3, "Hello"]));

// Probleme 3
// solution 1

const str = "Hello world from Nada";
// const splitStr = str.split('')

// console.log(splitStr.join(''))
const tab = str.split(" ");
const mapTab = tab.map((word, i) => {
  if (i % 2 === 0) {
    return word;
  } else {
    return word.split("").reverse().join("");
  }
});
console.log(mapTab.join(" "));

// solution 2

const str = "Hello world from Nada";
// const splitStr = str.split('')

// console.log(splitStr.join(''))
const reverseStr = (str) =>
  str
    .split(" ")
    .map((word, i) => (i % 2 === 0 ? word : word.split("").reverse().join("")))
    .join(" ");

console.log(reverseStr(str));

// Probleme 4

// solution 1

const changeStr = (str) => {
  const tab = str.toLowerCase().split("");
  const mapTab = tab.map((el) =>
    tab.indexOf(el) === tab.lastIndexOf(el) ? "(" : ")"
  );
  return mapTab.join("");
};

console.log(changeStr("Success"));

// solution 2
const changeStr = (str) =>
  str
    .toLowerCase()
    .split("")
    .map((el, i, arr) => (arr.indexOf(el) === arr.lastIndexOf(el) ? "(" : ")"))
    .join("");

console.log(changeStr("Success"));

const carsFromUzbekistan = [
  {
    brand: "Daewoo",
    model: "Nexia",
    year: 2021,
    color: "Blue",
  },
  {
    brand: "Daewoo",
    model: "Matiz",
    year: 2020,
    color: "Red",
  },
  {
    brand: "UzAuto",
    model: "Spark",
    year: 2022,
    color: "Silver",
  },
  {
    brand: "Daewoo",
    model: "Gentra",
    year: 2019,
    color: "Black",
  },
  {
    brand: "Mercedes",
    model: "CLS",
    year: 2022,
    color: "Gray",
  },
  {
    brand: "UzAuto",
    model: "Cobalt",
    year: 2020,
    color: "White",
  },
  {
    brand: "BMW",
    model: "M5",
    year: 2022,
    color: "White",
  },
  {
    brand: "UzAuto",
    model: "Malibu",
    year: 2020,
    color: "White",
  },
  {
    brand: "UzAuto",
    model: "Onix",
    year: 2020,
    color: "White",
  },
];

console.log(carsFromUzbekistan.year);

let year = [];

for (let i = 0; i < carsFromUzbekistan.length; i++) {
  year.push(carsFromUzbekistan[i].year);
}

let age = year.sort((a, b) => b - a);

for (let a = 0; a < age.length; a++) {
  console.log(
    `${carsFromUzbekistan[a].brand} ${carsFromUzbekistan[a].model} is ${age[a]} years old.`
  );
}

//   for (let a = 0; a < carsAges.length; a++) {
// // // // //
// // // // // }

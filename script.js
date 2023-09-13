////////////////////////////////////
// Coding Challenge #1 (Uzbek Version)

const prompt = require("prompt-sync")();
/*
Biz yangi bir dastur yozmoqchimiz. Dasturning maqsadi ikki o'quvchi orasidagi yosh farqini aniqlash. Yoshlar o'quvchilarning tug'ilgan yillaridan hisoblanadi.

O'quvchi 1ning tug'ilgan yilini "talaba1_yil" deb nomlang va qiymatini o'zgartiring.
O'quvchi 2ning tug'ilgan yilini "talaba2_yil" deb nomlang va qiymatini o'zgartiring.
Yoshlarini aniqlash uchun "yosh_farqi" deb nomlangan o'zgaruvchini yaratish va ikki o'quvchining yosh farqini shu o'zgaruvchiga saqlang.
"yosh_farqi" o'zgaruvchisini ekranga chiqaring va "Talaba 1, Talaba 2 dan ... yil katta" deb ko'rsatish.
TEST DATA:
Talaba 1, 2000 yilida tug'ilgan.
Talaba 2, 1998 yilida tug'ilgan.

MUVAFFAQIYATLAR! 😊
*/

// Siz yuqoridagi vazifani bajarishingizni va "talaba1_yil", "talaba2_yil" va "yosh_farqi" o'zgaruvchilarini to'g'ri ekranga chiqarishingizni kutamiz.

// let talaba1_yil =2000;

// let talaba2_yil =1998;

// function yosh_farqi(talaba1_yil, talaba2_yil) {

//     let yosh_farqi = Math.abs(talaba1_yil-talaba2_yil)

//   if (talaba1_yil < talaba2_yil) {
//     return `1 - talaba ${yosh_farqi} yosh katta`;
//   } else if ((talaba1_yil == talaba2_yil)) {
//     return "Yoshlar teng";
//   } else {
//     return `1 - talaba ${yosh_farqi} yosh kichik`;
//   }
// }

// console.log(yosh_farqi(talaba1_yil,talaba2_yil));

/*
const calcAgeOfCar = (currentYear, yearOfCar) => currentYear - yearOfCar;

const conditionOfCar = (carAge, limit, carName, canUseFor) => {
  return carAge > limit
    ? `I need to sell the ${carName}. Because this car is used ${canUseFor}`
    : `I can drive the ${carName} for ${canUseFor} more years`;
};

const carMatiz = (carYear, carName) => {
  // const carAge = 2023 - carYear;
  const carAge = calcAgeOfCar(2023, carYear);
  const canUseFor = 10 - carAge;

  const carCondition = conditionOfCar(carAge, 10, carName, canUseFor);
  // carAge > 10
  //   ? `I need to sell the ${carName}. Because this car is used ${canUseFor}`
  //   : `I can drive the ${carName} for ${canUseFor} more years`;

  // 10 < I need to sell the car : I can drive the car for ? amount of time

  return carCondition;
};

const myMatizCar = carMatiz(1998, 'Matiz');
console.log(myMatizCar);


const prompt = require('prompt-sync')();

// GM cars: Matiz, Spark, Lacetti
// Ford cars: Focus, Fiesta, Mondeo
// BMW cars: M3, M5, M7
// Mercedes cars: C-class, E-class, S-class

const carBrand = prompt(
  "What's your favirt car brand? (GM, Ford, BMW, Mercedes) "
);
// GM, Ford, BMW, Mercedes

if (carBrand === 'GM') {
  console.log('GM cars: Matiz, Spark, Lacetti');
} else if (carBrand === 'Ford') {
  console.log('Ford cars: Focus, Fiesta, Mondeo');
} else if (carBrand === 'BMW') {
  console.log('BMW cars: M3, M5, M7');
} else if (carBrand === 'Mercedes') {
  console.log('Mercedes cars: C-class, E-class, S-class');
} else {
  console.log('Car brand is not in the lise');
}

*/

// CODING CHALLENGE #1
///////////////////////////////////////

// We are building a small car rental company and we want to display cars of different brands to our customers. For this purpose, we have a function that takes a car brand as a parameter and logs the cars of that brand. We want to call this function 4 times with different car brands as arguments (GM, Ford, BMW, Mercedes). Refactor the code above to use the function you created.
// 1. Create a function (ourCars) that takes a car brand as a parameter and logs the cars of that brand
// 2. Call the function 4 times with different car brands as arguments (GM, Ford, BMW, Mercedes)
// 3. Refactor the code above to use the function you created

// const myInfo = (myName) => {
//   console.log(`My name is ${myName}!`);
// };

// myInfo('Rustam');
// myInfo('Abrorjon');
// myInfo('Asilbek');

let ourCars = Number(prompt(" Brands:  1. GM, 2. Ford, 3. Mercedes"));

if (ourCars === 1) {
  console.log("Gentra,Lasetti");
} else if (ourCars === 2) {
  console.log("Mustang");
} else if (ourCars === 3) {
  console.log("Mercedes bens");
} else {
  console.log("Brand nomi aniqlanmadi.");
}

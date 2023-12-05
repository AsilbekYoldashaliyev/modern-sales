// // // // // ///////////////////////////////////////
// // // // // // Looping Backwards and Loops in Loops

// // // // // // 0, 1, 2, 3, ... 7

// // // // // // 7, 6, 5, 4, ... 1

// // // // // const cars = [
// // // // //   {
// // // // //     brand: "Daewoo",
// // // // //     model: "Matiz",
// // // // //     year: 2000,
// // // // //     color: "red",
// // // // //   },
// // // // //   {
// // // // //     brand: "Chevrolet",
// // // // //     model: "Cobalt",
// // // // //     year: 2015,
// // // // //     color: "black",
// // // // //   },
// // // // //   {
// // // // //     brand: "Daewoo",
// // // // //     model: "Damas",
// // // // //     year: 2008,
// // // // //     color: "white",
// // // // //   },
// // // // //   {
// // // // //     brand: "Chevrolet",
// // // // //     model: "Malibu",
// // // // //     year: 2018,
// // // // //     color: "blue",
// // // // //   },
// // // // //   {
// // // // //     brand: "Daewoo",
// // // // //     model: "Nexia",
// // // // //     year: 2005,
// // // // //     color: "white",
// // // // //   },
// // // // // ];

// // // // // // const matiz = [
// // // // // //   "Daewoo",
// // // // // //   "Matiz",
// // // // // //   2000,
// // // // // //   "red",
// // // // // //   ["front-left", "front-right", "back-left", "back-right"],
// // // // // // ];

// // // // // // for (let i = 0; i < matiz.length; i++) {
// // // // // //   console.log(matiz[i]);
// // // // // // }

// // // // // // console.log();

// // // // // // for (let i = matiz.length - 1; i >= 0; i--) {
// // // // // //   console.log(matiz[i]);
// // // // // // }

// // // // // // carsAges array yaratilsin
// // // // // // carsAges = [23, 2, 18, ...]

// // // // // // Daewoo Matiz is 23 years old.
// // // // // // Chevrolet Cobalt is 8 years old.
// // // // // // ...

// // // // // // 1. carsAges degan bombosh array yarating
// // // // // // 2. for loopdan foydalanib cars arraydagi moshinalarni yoshini hisoblang
// // // // // // 3. shu hamma hisoblangan yoshni carsAges arrayga joylang
// // // // // // BONUS
// // // // // // 4. yan bir for loop yaratib, carsAgesni ichidagi yillardan foydalanib har bir mashinaga Daewoo Matiz is 23 years old.

// // // // // const carsAges = [];

// // // // // for (let i = 0; i < cars.length; i++) {
// // // // //   carsAges.push(2023 - cars[i].year);
// // // // // }

// // // // // console.log(carsAges);

// // // // // for (let a = 0; a < carsAges.length; a++) {
// // // // //   console.log(`${cars[a].brand} ${cars[a].model} is ${carsAges[a]} years old.`);
// // // // // }
// // // // let arr = [1, 22, 343, 566, 7];

// // // // let number = 0;

// // // // for (let i = 0; i < arr.length; i++) {
// // // //   number = number + arr[i];
// // // // }

// // // // console.log(number);

// // // // ///////////////////////////////
// // // // // CODING CHALLENGE 1#

// // // // // Array Sum
// // // // // input: [14, 6, 8, 9, 21, 5] yoki [4, 8, 19, 45, 12]
// // // // // output: 63

// // // // // 1. array, for loop, BONUS: function, if else, ternary operator

// // // // CODING CHALLENGE 1#

// // // // Array Sum
// // // // input: [14, 6, 8, 9, 21, 5] yoki [4, 8, 19, 45, 12]
// // // // output: 63

// // // // 1. array, for loop, BONUS: function, if else, ternary operator

// // // const array = [14, 6, 8, 9, 21, 5];
// // // const array2 = [4, 8, 19, 45, 12];

// // // const arraySum = (arr) => {
// // //  let result = 0;

// // //  for (let i = 0; i < arr.length; i++) {
// // //  result = result + arr[i];
// // //  }

// // //  return result;
// // // };

// // // console.log(arraySum(array));
// // // console.log(arraySum(array2));

// // // ///////////////////////////////
// // // // CODING CHALLENGE 2#

// // // // Find Maximum Value
// // // // input: [7, 8, 10, 31, 24, 78] yoki [12, 34, 88, 70, 120, 16]
// // // // output: 78 BONUS: ("Siz kiritgan arraning ichidagi eng katta son bu 78")

// // // // array, for loop, function, if else

// // let arr = [7, 5, 8, 0, 4];
// // let array = [2, 3, 5, 7, 9];

// // function max(arr) {
// //   let min = Math.min(...array);
// //   let max = Math.max(...arr);

// //   console.log(max, min);
// // }

// // console.log(max(arr));
// // console.log(max(array));
// l

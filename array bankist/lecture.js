"use strict";

 /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  // LECTURES

  //slice method ----- as same with string

// const arr = ['a', 'b', 'c', 'd', 'e']

// console.log(arr.slice(1, 3)) // same with string the second one will be ignored so here it will show 1 and 2 only 

// // splice method --- similar to slice but its mutate the original array
// console.log(arr.splice(2))
// console.log(arr) // the result of the array will be index 0 and 1 ..

// // reverse method ----------- it reverse the array and also mutate it .

// const arr2 = ['f', 'g', 'h', 'i', 'j']
// console.log(arr2.reverse())

// //concat ----- 
// console.log(arr.concat(arr2))

// // join --------
// console.log(arr2.join('&'))

// // looping through array

// //using for of loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for(const [i,mov] of movements.entries()){
//     if(mov > 0){
//         console.log(`movement ${i}: you depoisted ${mov}`)
//     }else{console.log(`movement ${i}: you withdraw ${Math.abs(mov)}`)}
// }
// console.log(`------foreach loop--------`)
// // using forEach loop
// movements.forEach((mov,i)=>{
//      if(mov > 0){
//         console.log(`movement ${i+1}: you depoisted ${mov}`)
//     }else{console.log(`movement ${i+1}: you withdraw ${Math.abs(mov)}`)}
// })
  
//   const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
//   ]);

//   currencies.forEach((value,key)=>{
//     console.log(`${key}: ${value}`)
//   })

// Test data:
//  Data 1: Julia's data , Kate's data 
//  Data 2: Julia's data , Kate's data 

// const checkDogs = (dogsJulia, dogsKate)=>{
//     dogsJulia.splice(0,1);
//     dogsJulia.splice(-2);
//     const dogs = dogsJulia.concat(dogsKate);
//     // console.log(dogs)
//     dogs.forEach((e,i)=>{
//         if(e >= 3){
//             console.log(`Dog number ${i + 1} is an adult, and is ${e} years old`)
//         }
//         else{console.log(`Dog number ${i+1} is still a puppy 🐶`)}
//     })
// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

//data transformation with map, filter and reduce methods
// const arr = [3,1,4,3,2]
// function multiply (e){
//     return e * 2;
// }

// console.log(arr.map(multiply))
// console.log(arr.filter(e => e > 2))
// console.log(arr.reduce((acc,cur,i)=>{
//     console.log( `${i}: ${acc} and ${cur}`)
//     return acc + cur;
// }))

const eurToUsd = 1.1;
// const movementsUsd = movements.map(mov=>{
//     return mov * eurToUsd;
// })
// console.log(movements)
// console.log(movementsUsd)

// const movementDesc = movements.map((mov,i) => `movement ${i+1}: you ${mov > 0 ? 'deposit': 'withdraw'} ${Math.abs(mov)}`)
// console.log(movementDesc)

// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const calAverageHumanAge = function(ages){

//  const humanAges = ages.map(age => age <=2 ? 2 * age : 16 + age * 4);
//   const adultDogs = humanAges.filter(age => age > 18)
//   const avgHumanAge = adultDogs.reduce((acc,cur)=>acc + cur,0)/adultDogs.length
//   console.log(humanAges)
//   console.log(adultDogs)
 
//   return avgHumanAge;
// }

// const avg1 = calAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2)

// const max = movements.reduce((acc,cur)=>{
//   console.log(acc,cur)
//   if(acc > cur) return acc;
//   else return cur;
  
// },0)
// console.log(max)

// const totalDeposit = movements.filter(mov=>mov>0)
// .map(mov=>mov*eurToUsd)
// .reduce((acc,mov)=>acc+mov,0)
// console.log(totalDeposit)

//coding challenge

// const calAverageHumanAge = function(ages){

//  const average =ages.map(age => age <=2 ? 2 * age : 16 + age * 4)
//   .filter(age => age > 18)
//   .reduce((acc,cur,i,arr)=>acc + cur/arr.length,0)
//   // console.log(average)
//   return average;
// }
// const avg1 = calAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2)
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

// .include check for quality 
// console.log(movements.includes(200))

// // .some check for condition 
// console.log(movements.some(e=> e > 0))

// //.every check if all satisfy the condition
// console.log(movements.every(mov=>mov > 0))

// //.flat join all item in an array into one array
// const arr = [[1,2,3],[4,5,6],7,8]
// console.log(arr.flat())

// const arrDeep = [[[1,2],3],[4,[5,6]],7,8]
// console.log(arrDeep.flat(2))

//.flatmap ..... it combine the flat and map method but when working with 2 or more level nested array we use flat 

// .sort .... rearrange the alphabetically in strings
//strings
// const owners = ['jonas', 'zach', 'Adam', 'Martha']
// console.log(owners.sort())

// // numbers
// console.log(movements)
// // console.log(movements.sort())

// // return < 0, A, B
// //return > 0, B, A
// console.log(movements.sort((a,b)=>b-a)) //ora-b a is positive and b is negative

//creating array automatically

// new Array.fill()method ... this can also we used to mutate existing arr first incate (value, from index , to index just like slice)
 
// const x = new Array(100).fill(2)
// console.log(x)

// Array.from()method ..... this take two arg the length({length: })and a function just like in map

// const y = Array.from({length: 100}, (e,i)=> i+1)
// console.log(y)

// C O D I N G     -     C H AL L E N G E

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
//   ];

//   //TASK 1
//  dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))
//  console.log(dogs)

//  //task 2
//   const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'))

//   console.log(`Sarah's dog is eating too ${sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'}.`)

//   //task 3
//   const ownerEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).map(owner => owner.owners).flat()

//   const ownerEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).map(owner => owner.owners).flat()

//   console.log(ownerEatTooMuch)
//   console.log(ownerEatTooLittle)

//   //task 4
//   console.log(`${ownerEatTooMuch.join(' and ')}'s dogs eat too much! `)
//   console.log(`${ownerEatTooLittle.join(' and ')}'s dogs eat too little! `)

//   //task 5 
//   console.log(dogs.some(dog => dog.curFood === dog.recFood))

//   //task 6
//  const okayFood = dog => dog.curFood > (dog.recFood * 0.90) && dog.curFood < (dog.recFood * 1.10)

//   console.log(dogs.some(okayFood))

//   // task 7
//   console.log(dogs.filter(okayFood))

//   //task 8 
//   const dogsCopy = dogs.slice()
//   console.log(dogsCopy)
//   const dogsSort = dogsCopy.sort((a,b)=> a.recFood - b.recFood)
//   console.log(dogsSort)


// N U M B E R 
// console.log(Math.sqrt(25))
// console.log(25 ** (1/2) ) // formular for sq root 

// console.log( Math.max(4,6,7,8,20,46))
// console.log( Math.max(4,6,7,8,'50',46)) //  max for strings num..

// console.log( Math.min(4,6,7,8,'50',46)) // min value

// console.log( Math.PI * Number.parseFloat('10px') ** 2) // area of a circle

// console.log(Math.trunc(Math.random()*6) + 1)

// // to get a value a min and max num
// const randInt = (min, max) => Math.trunc(Math.random()* (max - min) + 1 ) + min ;
// console.log(randInt(10, 20))

//R o u n d i n g --- i n t e g e r
// console.log(Math.trunc(23.3)) // round to close lower value
// console.log(Math.trunc(23.9))

// console.log(Math.round(23.3)) // round as normal ..
// console.log(Math.round(23.9))

// console.log(Math.ceil(23.3)) // round it up to the close higher value
// console.log(Math.ceil(23.9))

// console.log(Math.floor(23.3)) // round it to close lower value
// console.log(Math.floor(23.9))

// console.log(Math.trunc(-23.3)) // comparing trunc and floor in case of negative value trunc work as default but floor round to close high for -
// console.log(Math.trunc(-23.9))
// console.log(Math.floor(-23.3))
// console.log(Math.floor(-23.9))

// rounding decimal
// to fixed always return a string not num
// console.log((2.7).toFixed(0))
// console.log((2.7).toFixed(3))
// console.log((2.735).toFixed(2))
// console.log(+(2.7).toFixed(0))
// console.log(+(2.735).toFixed(2))

// r e m a i n d e r --- o p e r a t o r
// console.log(5 % 2)
// console.log(8 % 3)

// //its used to check for even and odd number
// // if rem is 0 is even and else odd
// const isEven = n => n % 2 === 0;
// console.log(isEven(4))
// console.log(isEven(23))

// b i g I n t
// console.log(45555555555555555596898498n)
// console.log(BigInt(7489999999999988))

// console.log(10000n + 10000n)
// console.log(15893766666666666666666n + 10000000006n)


// const huge = 85884343555333636663663n;
// const num = 23;

// //pass the normal num inside big int func 
// console.log(huge * BigInt(num))

// console.log(20n === 20)
// console.log(typeof 20n)
// console.log(20n == '20')

// console.log(huge + 'really big !') // it returned a string 

// // with division it returned the closest big int and also cut off dcimal part of the division

// // D A T E --- A N D ---- T I M E

// //create date 
// const now = new Date();
// console.log(now)

// console.log(new Date('December 24,2023')) // we can pass as stting to give us a date obj

// console.log(new Date(2035, 10, 19))

// console.log(new Date(0)) //begining of unit time
// console.log(new Date(3* 24 * 60 * 60 * 1000))

// working with date
// const future = new Date(2037,10,19,15,23)
// console.log(future)
// // console.log(future.getFullYear()) // th full is impportant
// // console.log(future.getMonth())
// // console.log(future.getDate())
// // console.log(future.getDay())
// // console.log(future.getHours())
// // console.log(future.getMinutes())
// // console.log(future.getSeconds())
// console.log(future.toDateString())
// console.log(future.toISOString())
// console.log(future.getTime()) //time passed since 1970
// console.log(Date.now())
// future.setFullYear(2050)
// console.log(future)
// console.log(+future)

// const calDayPassed = (date1, date2) => Math.abs(date2 - date1)/(1000*60*60*24) ;

// const day1 = calDayPassed(new Date(2023, 10, 20), new Date(2001, 5,22))
// console.log(day1)

// internationale api for datetime
// const curr = new Date;
// const options ={
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
//   day: 'numeric',
//   month: 'short',
//   year: 'numeric',
//   weekday: 'long'
// }
// const int = new Intl.DateTimeFormat('en-US', options).format(curr)
// console.log(int)

// new Intl.NumberFormat().format(what we want to format)
// const num = 23445556677;
// const options = {
//   style: 'currency',
//   currency: 'EUR',
//   unit: 'celsius'
// }

// console.log(new Intl.NumberFormat('en-US', options).format(num))
"use strict";
// data = 'ade'
// console.log(data)

// // declarative function 
// function fruit(plantain,banana) {
//     const apple =`i need ${plantain} plantain and ${banana} banana`;
//     return apple;
// }
// const ayo =fruit(19,29);
// const ade =fruit(50,90);
// console.log(ayo,ade);

// // expression function 
// const ayo2=function fruit(plantain,banana) {
//     const apple =`i need ${plantain} plantain and ${banana} banana`;
//     return apple;
// }

// arrow function 
// const ayo3= (num)=>{204-num};
// console.log(ayo3(23));

// function yearsLeft(birthYear, firstName){
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`;
// }
// console.log(yearsLeft(2001, 'ade'));

// function fruit(cutFruit) {
//     return cutFruit * 4;
// }
// function fruits(plantain, banana) {
//     const fruitPlantain = fruit(plantain);
//     const fruitBanana = fruit(banana);
//     const summary = `i need ${fruitPlantain} plantain and ${fruitBanana} banana`
//     return summary;
// }
// console.log(fruits(5, 7))

// const yearsLeft2 = function(birthYear, firstName) {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     (retirement > 0)?console.log(`${firstName} retires in ${retirement} years`):
//     console.log(`${firstName} as retired.`);
// }
// yearsLeft2('2002', 'ola')

// const avgDolphin = (score1, score2, score3)=>
// {const calAvg=(score1 + score2 + score3)/3;
// return calAvg;
// }
// const avgCowlers = (score1, score2, score3)=>
// {const calAvg=(score1 + score2 + score3)/3;
// return calAvg;
// }
// function checkWinner(a, b) {
//     if (a > b) {
//         console.log(`dolphin wins`)
//     }
//     else if (a < b) {
//         console.log(`cowlers wins`)
//     }
//     else{console.log(`its a draw`)}
// }
// let dolphin = avgDolphin(20,30,40);
// let cowlers = avgCowlers(20,30,40)
// // checkWinner(avgDolphin(20,30,40), avgCowlers(20,30,40));
// checkWinner(dolphin, cowlers);

// Arrays 
// const myFriends = ['ade', 'ayo', 'ola', 'ife', 'bayo'];
// console.log(myFriends[myFriends.length-1]);

// myFriends[2] = 'nifemi';     // change the value
// const pushed = myFriends.push('tola');       // add to the end 
// console.log(pushed);
// const unshifted = myFriends.unshift('alex');  //add to the start 
// console.log(unshifted);

// // to remove 
// // const poped = myFriends.pop()  // at the end
// // console.log(poped);
// // const shifted = myFriends.shift()
// // console.log(shifted);            // at the start

// // console.log(myFriends.indexOf('ayo'))
// // console.log(myFriends.includes('ifee'))

// // function calTip(value) {
// //     return value >= 50 <= 300 ?(value * 15)/100:
// //     (value * 20)/100;
// // }
// // const valueArr = [125, 505, 44];
// // const calTipArr = [calTip(valueArr[0]), calTip(valueArr[1]), calTip(valueArr[2])]
// // const total = [valueArr[0]+calTipArr[0], valueArr[1]+calTipArr[1], valueArr[2]+calTipArr[2]]
// // console.log(calTipArr, total);

// // objects 
// const ayoId = {
//     firstName:'ayo',
//     lastName: 'alex',
//     birthYear:1991,
//     age: 34,
//     job: 'engineer',
//     friends:['kunke', 'tee', 'zee'],
//     interest:'',
//     hasDrivingLicense:true,
//     calAge:function() {
//         this.age= 2023 - this.birthYear;
//         return this.age;
//     },
//     getSummary:function() {
//        return`${this.firstName} is a ${this.calAge()} years old ${this.job} and he ${this.hasDrivingLicense?'has a':'has no'} driving license ` 
//     }
// }
// console.log(ayoId.calAge());
// console.log(ayoId.getSummary());
// console.log(ayoId.age);

// ayoId['firstName'] = 'bayo';
// ayoId.firstName = 'layo';
// console.log (ayoId)
// console.log(ayoId.friends)
// console.log(ayoId['firstName'])
 
// const interest = prompt('whats your interest?', '');
// ayoId.interest = interest;
// console.log(ayoId.interest);

// for(let i=0; i<3; i++){
//     console.log(i)
// }

// const ageGroup = [23, 24, 25, 26, 27];
// const nameOf = []
// for(let i=0; i<ageGroup.length; i++){
//     nameOf.push(5-ageGroup[i])
// console.log(nameOf);
// }

// const ageGroup = ['25', 23,'26', 24,  true];    //for loop
// for(let i=0; i<ageGroup.length; i++){
//     if (typeof ageGroup[i] !== 'string')continue;
//     console.log(ageGroup[i], typeof ageGroup[i]);
// }

// let dice = Math.trunc(Math.random()*6)+1;
// while(dice !== 6){
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random()*6)+1;
//     (dice === 6)?console.log(`the game has ended`):null;
// }

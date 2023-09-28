"use strict";

// function calAge(birthYear){
//     const date = new Date().getFullYear()
//     const age = date-birthYear;
//     // console.log(firstName)

//     function printAge(){
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`
//         console.log(output)
//         if(birthYear > 1981 && birthYear <= 1986){
//             var millineal = true;
//             const firstName = 'olaa';
//             output = 'newOutput';
//             const str = `oh! you are millineal,${firstName}`
//             console.log(str)
//             const add = (a, b)=> {
//                 return a + b;
//             }
//         }
//         console.log(add(2,3))
//     }
//     printAge()
// }
// const firstName = 'adex'
// calAge(1984)

// hoisting

// console.log(me)
// console.log(job)
// console.log(year)

// var me = 'ade';
// let job = 'software engineer';
// const year = 2002;


// function addDecl(a, b){
//     return a+ b;
// }

// var addExp = function(a,b){
//     return a + b;
// }

// const arr = (a,b)=>{
//     return a + b;
// }

// console.log(addDecl(2,3))
// console.log(addExp(2,3))
// console.log(arr(2,3))

// if(!num)delShopingCart()
// let num =null;
// function delShopingCart() {
//     console.log(`it worked`)
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(window.x,window.y,window.z)
// console.log(window)
// console.log(this)

// const calAge = function(birthYear){
//     console.log(2023 - birthYear)
//     console.log(this)     not working for expression function
// }
// calAge(2000)

// const calAge = (birthYear)=>{
//     console.log(2023 - birthYear)
//     console.log(this)      working for arrow function (this)
// }
// calAge(2000)

// const profile ={
//     name: 'Asimi',
//     job: 'chemist',
//     year: 2000,
//     calAge: function(){
//         console.log(this)
//         console.log(2023-this.year)
//         const isMoving = ()=>{
//             console.log(this)
//             console.log(this.year)
//         }
//         isMoving()
//     },
//     greet: ()=>{
//         console.log(this)
//     }
    
// }

// // profile.calAge()
// profile.greet()

//argument keyword

// const addExp = function(a,b){
//     console.log(arguments)
//     return a + b;
// }

// addExp(2,5,7,6,2)

//primitive value

// let lastName = 'doyin';
// let oldLastName = lastName;
// lastName = 'zeee';

// console.log(lastName)
// console.log(oldLastName)

const jesica = {
    firstName: 'jesica',
    lastName: 'williams',
    age: 27

}
// const marriedJesica = jesica

// marriedJesica.lastName = 'davis'

// console.log('before marriage', jesica)
// console.log('after marriage', marriedJesica)

// copying object

// const jesica2 = {
//     firstName: 'jesica',
//     lastName: 'williams',
//     age: 27,
//     family:['bob', 'alice']
// }

// console.log(jesica2)

// const marriedJesica2 = Object.assign({},jesica2)
// console.log(jesica2)
// marriedJesica2.lastName = 'davis'
// marriedJesica2.family.push('mary')
// marriedJesica2.family.push('john')

// console.log('before marriage', jesica2)
// console.log('after marriage', marriedJesica2)
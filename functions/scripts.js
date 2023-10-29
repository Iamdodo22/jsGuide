"use strict";
// const bookings =[];

//default parameters
// const createBookings = function(flightNum, passangerNum = 1, price =199*passangerNum){
//     const booking ={
//         flightNum,
//         // passangerNum: passangerNum || 1,   default setting
//         passangerNum,
//         price,
//     }
//     console.log(booking)
//     bookings.push(booking)
// }
// createBookings('nh123')
// createBookings('nh123', 2, 3)
// createBookings('nh123',undefined ,5)

// const flight = 'lh234';
// const journals = {
//     name: 'journal smith',
//     passPort: 3245689994,

// }

//passing argument into functiions

//  function checkIn(flightNum, passanger){
//     if(passanger.passPort === 3245689994){
//         alert(`checked in`)
//     }else{alert(`wrong passport`)}
//  }
// // checkIn(flight, journals)

// const flightNum = flight;
// const passanger = journals;

// checkIn(flightNum, passanger)

// console.log(bookings)

// const passport = (person)=>{
//     person.passPort = Math.trunc(Math.random()*1e9)
//     console.log(person.passPort)
// }

// passport(journals)
// console.log(journals.passPort)

// //higher order functions
// const oneWord = (str)=>{
//     return str.replace(/ /g, '').toLowerCase()
// }
// const upperFirstWord = (str)=>{
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ')
// }
// const transformer = (str, fn)=>{
//     console.log(`the original string: ${str}`)
//     console.log(`the transformed string: ${fn(str)}`)
//     console.log(`transformed by: ${fn.name}`)
 
// }
// // transformer('JavaScript is the best', oneWord)
// transformer('JavaScript is the best', upperFirstWord)

//callback

// const highFive = ()=>{
//     console.log('👀')
// }

// document.body.addEventListener('click', highFive)

//function returning function
// const greet = (greeting)=>{
//     return function(name){
//         console.log(greeting,name)

//     }
// }
// const filterA = greet('hey')
// filterA('ayo')

// greet('hello')('nifemi')

// const greet2 = (greeting)=>(name)=>{
//     console.log(greeting,name)
// }
// greet2('hi')('adeola')

//call and apply method
// const airplane = {
//     airline: 'Lufthansa',
//     code: 'LH',
//     bookings: [],
//     book(flightNum,name){
//         console.log(`${name} booked a sit on ${this.airline} flight ${this.code} ${flightNum}`)
//         this.bookings.push({flight:`${this.code} ${flightNum}`, name})
//     }
// }
// airplane.book(239,'nifemi')

// const airplane2 = {
//     airline: 'Eurowing',
//     code: 'EW',
//     bookings:[],

// }
// const book = airplane.book
// book.call(airplane2,23,'serena')
// console.log(airplane2)



// // apply method 
// const airplane3 ={
//     airline: 'space',
//     code: 'SP',
//     bookings: []
// }
// const flightData = [583, 'george']
// book.apply(airplane3, flightData)
// book.call(airplane3, ...flightData)
// console.log(airplane3)

//bind method
// const bookEW = book.bind(airplane2);
// const bookLH = book.bind(airplane3)
// bookEW(23, 'femi');
// console.log(airplane2);
// const bookEW23 = book.bind(airplane2,25)
// bookEW23('john')
// bookEW23('max')
// console.log(airplane2)

// airplane.plane =300;

// airplane.buyPlanes = function(){
//     console.log(this)
//     this.plane++
//     console.log(this.plane)
// }
// airplane.buyPlanes()

// document.querySelector('.buy').addEventListener('click', airplane.buyPlanes)

// const addTax =function(rate, value){
//     return (value+value)*rate
// }
// const addVat = addTax.bind(null)
// console.log(addVat(23,100))
// console.log(addVat(23,200))
// console.log(addVat(23,300))

// //IIFE
// const runOnce = ()=>{
//     console.log(`this will never run again`)
// }
// runOnce();

// (()=>{
//     console.log(`this will never run again`)
//     var inscribe = 23;
//     console.log(inscribe)
// })();

// {const isPrivate = 23;
// var notPrivate = 46}
// console.log(notPrivate)

// closure 
// const secureBooking = function(){
//     let passangerCount = 0;
//     return function(){
//         passangerCount++;
//         console.log(`${passangerCount} passangers`)
//     }
// }
// const booker = secureBooking()
// booker()
// booker()
// booker()
// console.dir(booker)
// let f;
// const g = function(){
//     const a = 23;
//     f = function(){
//         console.log(a*2)
//     }
// }
// const h = function(){
//     const b = 777;
//     f = function(){
//         console.log(b*2)
//     }
// }

// g()
// h()
// f()
// g()
// f()


// const boardPassanger = function(m, wait){
//     const perGroup = m/3;
//     setTimeout((e)=>{
//         console.log(`we are now onboarding ${m} passangers`);
//         console.log(`there are 3 groups, each with ${perGroup} passangers`)
//     }, wait*1000)
//     console.log(`we start boarding in ${wait}seconds`)
// }
// boardPassanger(180, 3);

// (function(){
//     const header = document.querySelector('h1');
//     header.style.color='red';
//     document.querySelector('body').addEventListener('click', ()=>{
//         header.style.color='blue';
//     })
// })()

// work to do .......

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//     answers: new Array(4).fill(0),
//     regNewAnswer: function(){
//         const answer = Number(prompt(`${this.question} \n ${this.options.join('\n')} \n (Write option number) `))
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
//         console.log(this.answers)
//        console.log(answer)
//     },
//     displayResult(type='array'){
//         if(type === 'array'){
//             console.log(this.answers)
//         }
//         else{console.log(`poll results are ${this.answers.join(',')}`)}
//     }
//     };

// //     Test data for bonus:
// // § Data 1: [5, 2, 3]
// // § Data 2: [1, 5, 3, 9, 6, 1]
//     poll.displayResult.call({answers: [5, 2, 3]}, 'strings')
//     poll.displayResult.call({answers: [1, 5, 3, 9, 6, 1]})
//     document.querySelector('.poll').addEventListener('click', poll.regNewAnswer.bind(poll))





    // let result = poll.question + "\n";
    // for(let option of poll.options){
    //     result += option + '\n'
    // }

    // alert(prompt(result))
    // console.log(result)
    // console.log(poll.answers)
'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekDays[0]]: {open: 12, close: 22},
    [weekDays[1]]: {open: 11, close: 23},
    [weekDays[2]]: {open: 0, close: 24},
    [weekDays[3]]: {open: 7, close: 16},
}
// console.log(openingHours)

const resturant = {
    name: 'clasico-italiano',
    location: 'via angelo lavante 23, frenze,italy',
    categories: ['italian', 'prezeria', 'vegetarian', 'organic'],
    starterMenu: ['focasia', 'bruchetta', 'gardenBread', 'caspreeSalad'],
    mainMenu: ['pizza', 'pasta', 'resotto'],
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours,
}

// const [starter, main] = resturant.order(2,0)
// console.log(starter, main)


// let [main, ,secondary] =resturant.categories

//swithing variables

// main = secondary // secondar-vegeterian
// secondary=main   // main -italian ...by default
// console.log(main,secondary)
// or
// main = 'f';
// console.log(main, secondary)
//  [main, secondary] = [secondary, main]
//  console.log(main, secondary)
//  console.log(secondary, main)

// const arr = [2,3,4]
// const [x,...z] = arr

// const nested = [2,4,[5,6]]
// const [i , , j] = nested
// console.log(i,j)

// const [p=1,q=1,r=1]=[8,9]
// console.log(p,q,r)

// destruction of object 

// const {name, categories} = resturant
// console.log(name, categories)

// const {name: resturantName, categories: tags, openingHours: hours} = resturant
// console.log(resturantName, tags, hours);

let a =1;
let b =2;

let obj ={
    a: 23,
    b:27,
    c:14
}

({a,b}= obj)
console.log(a,b)
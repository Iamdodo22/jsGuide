'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekDays[0]]: {open: 12, close: 22},
    [weekDays[1]]: {open: 11, close: 23},
    [weekDays[2]]: {open: 0, close: 24},
    [weekDays[3]]: {open: 7, close: 16},
}
console.log(openingHours)

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
    orderPasta: function (ing1, ing2, ing3){
        console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
    },
    orderPizza: function(main, ...others){
        console.log(main)
        console.log(others)
        
    }
}

// const [starter, main] = resturant.order(2,0)
// console.log(starter, main)


// let [main, ,secondary] =resturant.categories;

//swithing variables

// main = secondary // secondar-vegeterian
// secondary=main   // main -italian ...by default
// console.log(main,secondary)
// or
// main = 'f';
//  [main, secondary] = [secondary, main];
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

// let a =1;
// let b =2;

// const obj ={
//     a: 23,
//     b:27,
//     c:14
// };

// ({a,b}= obj)
// console.log(a,b)
// console.log(obj)

// // nested object

// const {mon: {open: o, close: c}} = openingHours;
// console.log(o,c);

// // spread operator

// const arr = [2,3,4]
// const arr1 = [5,6,7,arr[0],arr[1],arr[2]]
// const newArr = [5,6,7,...arr]
// console.log(...newArr)

// const newMenu = [...resturant.mainMenu,'akara']
// console.log(newMenu)

// copying ARRAY

// const mainMenuCopy = [...resturant.mainMenu]
// console.log(mainMenuCopy)

// const menu = [...resturant.mainMenu,...resturant.starterMenu]
// console.log(menu)

// iteration (iteration are for arrays, strings,maps,set but object)

// const str = 'goal'
// const letters = [...str, ...'ball!']
// console.log(letters)
// console.log(`${...str}`)

// const ingredient = [prompt(`ingredient1`), prompt(`ingredient2`), prompt(`ingredient3`)]

// resturant.orderPasta(...ingredient)

//object
// const newResturant = {
//     foundedIn : 1998, ...resturant,founder: 'najimi'
// }
// console.log(newResturant)

// const resturantCopy = {...resturant}
// resturantCopy.name = 'iya oyo'
// console.log(resturantCopy)
// console.log(resturant)

// rest pattern (valid with comma)

// const arrs = [1,2,...[3,4]]
// const [l,m,...others] = arrs
// console.log(l,m,others)

// const [pizza, ,resotto, ...otherFoods] = [...resturant.starterMenu, ...resturant.mainMenu]
// console.log([...resturant.starterMenu, ...resturant.mainMenu])
// console.log(pizza, resotto,otherFoods)

// const {mon, ...othersDays} = openingHours
// console.log(mon , othersDays)

// const addFunc = function (...num){
//     let sum =0;
//     console.log(...num)
//     for(let i =0; i<num.length; i++)
//     sum+=num[i]
//     console.log(sum)
// }
// addFunc(2,3,4,5,6,7)

// const u = [23,5,7,8,9]
// addFunc(...u)

// resturant.orderPizza('row','bow', 'cow', 'sow', 'low')

// short circuiting
// or ||

// console.log(3||'jonal'||true)
// console.log(' ' || 'journals')
// console.log(true || 0)
// console.log(undefined || null)
// console.log(null || 5)
// console.log(undefined || 0 || '' || 'hello' || 23 || null)

// resturant.guestNum = 23;
// const guest1 = resturant.guestNum?resturant.guestNum:10;
// console.log(guest1)
// const guest2 = resturant.guestNum || 10;
// console.log(guest2)

// // and operator &&
// console.log(0 && 'journals')
// console.log(7 && 'journals')
// console.log(7 && null)
// console.log('hello' && 23 && null && 'journals')

// if(resturant.orderPizza){
//     resturant.orderPizza('mushroom', 'spinach')
// }

// resturant.orderPizza && resturant.orderPizza('mushroom', 'spinach')

//WORK TO DO.....

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',],['Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho', 'Gotze', ],],
//     score: '3:1',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//     },
//     };

//     const [players1,players2] = game.players
//     const [gk1, ...otherPlayer1] = [...players1]
//     const [gk2, ...otherPlayer2] = [...players2]
//     const lineUp = [...players1, ...players2]
//     const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

    // const {odds: {team1: team1Win, x: draw, team2: team2Win}} = game;

//     const [ , , , , , , , , , gnarb, lewa, , , humml] = lineUp;

//     const printGoals = ()=>{
//         console.log(`goal-one....${lewa} 1-0`)
//         console.log(`goal-two....${gnarb} 2-0`)
//         console.log(`goal-three....${lewa} 3-0`)
//         console.log(`goal-four....${humml} 3-1`)
//         console.log(`lewa'12 , gnarby'25, lewa'56, hummels'82`)
//     }
//     printGoals()


//     team1Win < team2Win && console.log(`team 1 is likely to win`); 
//     team2Win < team1Win && console.log(`team 2 is likely to win`);

    // for of loop 

//     const menu = [...resturant.mainMenu,...resturant.starterMenu]
//      for (const item of menu) {
//         console.log(item)
//      }

//      for (const item of menu.entries()) {
//         console.log(item)
//      }

//      for (const [i, el] of menu.entries()) {
//         console.log(i+1,el)
//      }

//      // optional chaining
//      if(resturant.openingHours.mon && resturant.openingHours.tue){
//         console.log(resturant.openingHours.mon)
//         console.log(resturant.openingHours.mon?.open)
//         console.log(resturant.openingHours?.mon?.open)
//      }


//      //nullish coallisense
//      for (const day of weekDays) {
//         console.log(day);
//         const opens = resturant.openingHours[day]?.open??'anytime' 
//         console.log(`on ${day} will open at ${opens}`)
//      }   // works on object

//      console.log(resturant.order?.(0,1)??'method doesnt exist') // works on function

//      const users = [{name: 'dola', email: 'dolasulaaa@gmail.com'}]
//      console.log(users[0]?.name??'no user found')// works on array

//      // looping object
    //properties of name 
//      const properties = Object.keys(openingHours) 
//      console.log(properties)
//      let openString = `we are open on ${properties.length}days`

//      for (const day of properties) {
//         openString += `${day}`
//      }
// console.log(openString)

//properties f value
 
// const value = Object.values(openingHours)

//properties of entries

// const entries = Object.entries(openingHours)
// console.log(entries)

// for (const [day,{open,close}] of entries) {
//     console.log(`on ${day} we open at ${open}, we close at ${close}`)
// }

// set 
// const otherSet = new Set(['pasta', 'pizza', 'dodo', 'lizard','pizza']);
// console.log(otherSet);
// console.log(new Set('tea'))
// console.log(otherSet.size)//size for length
// console.log(otherSet.has('bread'))
// otherSet.add('food') // are unique
// otherSet.add('food')
// otherSet.delete('pizza')
// // otherSet.clear()
// console.log(otherSet)

// for (const border of otherSet) {
//     console.log(border)
// }

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']
// const staffUnique = [...new Set(staff)]
// console.log(staffUnique)
// console.log(new Set('acadabra').size)

//WORK  TO DO 
// const goalPrint = (e,index)=>{
//     for(let i = 0; i < game.scored.length; i++){
//         console.log(`goal ${i+1}: ${game.scored[i]}`)
//     }
// }
// goalPrint()

// console.log(((team1Win + draw + team2Win)/3).toFixed(2))

// for (const [i,e] of game.scored.entries()) {
//     console.log(`goal ${i+1} : ${e}`)
// }

// const odds =  Object.values(game.odds)
// console.log(odds)
// let average=0;
// for (const e of odds) {
//    average+=e; 
// }
// average /= odds.length
// console.log(average.toFixed(2))

// for (const [team, odd] of Object.entries(game.odds)) {

//     const teamString = team === 'x'?'draw':`victory ${game[team]}`
//     console.log(`odd of ${teamString} : ${odd}`)
//     // console.log(team,odd)
// }

// //map
// const rest = new Map()
// rest.set('name', 'adio')
// rest.set(1, 'age')
// rest.set('categories', ['yam','pepper','cow','dodo']).set('open', 11).set('close', 23).set(true, 'we are opened').set(false, 'we are closed')
// console.log(rest)
// console.log(rest.get('name'))
// console.log(rest.get(true))
// console.log(rest.get(1))
// // rest.clear()
// rest.delete('name')
// console.log(rest.has('name'))
// const times = 8;
// console.log(rest.get(times>rest.get('open') && times<rest.get('close')))
// const arr = [1,2]
// rest.set(arr,'test')
// console.log(rest)

//
// const question = new Map([['question', 'whats is the best programming language'],
//  [1,'c'],
//  [2,'java'],
//  [3,'javascript'],
//  ['correct', 3],
//   [true, 'correct'],
//    [false, 'try again 🤣🤣']
// ])
// console.log(question)

// // converting object to maps

// const hoursArr = Object.entries(openingHours)
// const hoursMap = new Map(hoursArr)
// console.log(hoursMap) 

// for (const [key, value] of question) {
//     if(typeof key === 'number'){
//         console.log(`answer ${key}: ${value}`)
//     }
// }

// // converting from map to arrAy

// console.log([...question])
// console.log(question.entries())
// console.log([...question.keys()])

//work to do
// const gameEvents = new Map([
//     [17, '⚽ GOAL'],
//     [36, '� Substitution'],
//     [47, '⚽ GOAL'],
//     [61, '� Substitution'],
//     [64, '� Yellow card'],
//     [69, '� Red card'],
//     [70, '� Substitution'],
//     [72, '� Substitution'],
//     [76, '⚽ GOAL'],
//     [80, '⚽ GOAL'],
//     [92, '� Yellow card'],
//     ]);

//     gameEvents.delete(64)
//     console.log(gameEvents)

//     const minAvg = 90/gameEvents.size;
//     console.log(`an event happened every ${minAvg} minutes`)

//     for (const [key,value] of gameEvents) {
//         const half = key < 45 ?`first half ${key} : ${value}` :`second half ${key} : ${value}`;
//         console.log(half)
//     }

//strings

// const airLine = 'TAP Air Portugal'
// const plane = 'A832'
// console.log(airLine[4])
// console.log(plane[2])
// console.log('b737'[0])
// console.log(airLine.length)
// console.log(airLine.indexOf('r'))
// console.log(airLine.lastIndexOf('r'))
// console.log(airLine.indexOf('Air'))
// console.log(airLine.slice(4))
// console.log(airLine.slice(4,7))
// console.log(airLine.slice(0,airLine.indexOf(' ')))
// console.log(airLine.slice(airLine.lastIndexOf(" ")))
// console.log(airLine.slice(-2))
// console.log(airLine.slice(1,-2))
// function middleSet(seat) {
//     const x = seat.slice(-1)
//     if(x === 'B' || x === 'E'){
//         console.log(`you got the middle seat`)
//     }else{console.log(`you got the back seat`)}
// }

// middleSet('11B')
// middleSet('23C')
// middleSet('2E')

// console.log(new String('rhoda'))
// console.log(typeof new String('rhoda'))
// console.log(typeof new String('rhoda').slice(1))
// console.log(airLine.toLowerCase())

// const passanger = 'lAvIaChelsea' 
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1)
// console.log(passangerCorrect)
// const email ='adeoluwa511@gmail.com'
// const loginEmail =  'Adeoluwa511@gmail.Com \n' 
// const lowerEmail = loginEmail.toLowerCase();
// const trimnedEmail = lowerEmail.trim()
// console.log(email === trimnedEmail)
// console.log(email === lowerEmail)
// const normEmail = loginEmail.toLowerCase().trim()
// console.log(email === normEmail)

// const priceGiving = '288,97$Ç'
// const priceChange = priceGiving.replace('Ç', '#').replace(',', '.')
// console.log(priceChange)

// const annoucement = 'all passanger come to folding door . folding door 23'
// const annoucementChange = annoucement.replace('door', 'gate').replace('door','gate')
// console.log(annoucement.replace(/door/g,'gate'))
// console.log(annoucementChange)


// const planes ='Airbus A320neo'
// console.log(planes.includes('A320'))
// console.log(planes.includes('Bu'))
// console.log(planes.startsWith('Airb'))
// console.log(planes.endsWith('neo'))
// if(planes.startsWith('Airbus') && planes.endsWith('neo')){
//     console.log(`its a family of airbus`)
// }

// const checkBack =(items)=>{
//     const back = items.toLowerCase()
//     if(back.includes('knife') || back.includes('gun')){
//         console.log(`you are not allowed on board`)
//     }else{console.log('welcome on board')}
// }

// checkBack('i have a laptop, some food and a pocket knife')
// checkBack('source and camera')
// checkBack('got some snacks and a gun for protection')

//split and join

// console.log('a+very+nice+string'.split('+'))
// console.log('Adelabu timehin'.split(' '))
// const [firstName, lastName] = 'Adelabu timehin'.split(' ');
// console.log(firstName)

// const newName = ['Mr.', firstName].join('')+' '+lastName
// console.log(newName)
// const capitalizedName = function(name){
//     const names = name.split(' ')
//     const namesUpper =[]
//     for (const n of names) {
//         // namesUpper.push(n[0].toUpperCase() + n.slice(1))
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//     }
//     console.log(namesUpper)
//     console.log(namesUpper.join(' '))
// }
// capitalizedName('jesica and smith')

//padding
// const message = 'go to gate 23!';
// console.log(message.padStart(20,'+').padEnd(35,'+'))

// const markCreditCard =(number)=>{
//     const str = number+""
//     const last = str.slice(-4 )
//     console.log(str,last)
//     // console.log(str)
//     return last.padStart(str.length,'*')
// }
// console.log(markCreditCard(3266784873))

// console.log(markCreditCard('3266784873'))

//repeat
// const message2 = 'bad weather .......... all departure delayed'
// console.log(message2.repeat(5))

// const planeInline = (n)=>{
// console.log(`there are ${n} planes in the lines${'✈'.repeat(n)}`)
// }
// planeInline(5)
// planeInline(3)
// planeInline(12)

//work to do
// const textArea = document.body.appendChild(document.createElement('textarea'));
//  const btn = document.body.appendChild(document.createElement('button'));
// console.log(textArea)

 const arr =[];
 arr.push('underscore_case',
    'first_name',
    'Some_Variable',
    ' calculate_AGE',
    'delayed_departure')

    let result='';

    let count = 1;
    for(const i of arr){
      let splited = i.split('_')
     const [first,second] = splited;
     for (const c of second.split()) {
        const camel = c[0].toUpperCase() + second.slice(1);
        const camelCase = (first+camel).trim();
        let padding = camelCase.padEnd(19, ' ')  
        let s = '✅';
         result += padding.split() + s.repeat(count) + '\n';
       count++;
        
     }
   
    }
    console.log(result)
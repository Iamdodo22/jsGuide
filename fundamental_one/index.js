// const markMass = 78;
// const markHeight =1.69;
// markBmi= markMass/markHeight**2;

// const johnMass=92;
// const johnHeight=1.95;
// johnBmi= johnMass/johnHeight*johnHeight;

// const markHigherValue= markBmi>johnBmi;
// const johnHigherValue= johnBmi>markBmi;
// if (markBmi>johnBmi){
//  console.log(`mark bmi (${markBmi}) is higher than john bmi (${johnBmi})`)
// }
// else{
//     console.log(`john bmi (${johnBmi}) is higher than mark bmi (${markBmi})`)
//    }

// // another method 
// markHigherValue? console.log(`mark bmi (${markBmi}) is higher than john bmi (${johnBmi})`): console.log(`john bmi (${johnBmi}) is higher than mark bmi (${markBmi})`);

// console.log(johnBmi,johnBmi,markHigherValue);

// const mark=`mark has a ${markBmi} BMI,`;
// console.log(mark);

// const nameOfAnimal='100';
// console.log(typeof nameOfAnimal);
// console.log(Number(nameOfAnimal)+100);
// console.log(typeof NaN)
// console.log(String(100));


// const fav = (prompt('Whats your favourite number?',''));
// if(fav==='23'){
//    console.log(`Its 23`); 
// }
// else if(fav==='5'){
//     console.log(`its 5`);
// }
// else{console.log(`i dont know`);}

// const dolphin=(95+112+120)/3;
// const cowlers=(109+95+50)/3;
// console.log(dolphin,cowlers);
// if(dolphin>cowlers&&(dolphin||cowlers)>100){
//     console.log(`dolphin is the winner`);
// }
// else if(cowlers>dolphin&&(cowlers||dolphin)>100){
//     console.log(`cowlers is the winner`);
// }
// else if (dolphin===cowlers&&(cowlers|| dolphin)>100){
//     console.log(`the match is drawn`);
// }
// else{console.log(`no team wins`);}

// const day= 'sunda'
// switch (day) {
//     case 'sunday':
//         console.log(`today is the first day of the week`)
//         break;

//         case 'monday':
//             console.log(`today is the second day of the week`)
//             break;

//             case 'tuesday':
//                 console.log(`today is the third day of the week`)
//                 break;

//                 case 'wednesday':
//                     console.log(`today is the fourth day of the week`)
//                     break;

//                     case 'thursday':
//                         console.log(`today is the fifth day of the week`)
//                         break;

//                         case 'friday':
//                             console.log(`today is the sixth day of the week`)
//                             break;

//                             case 'saturday':
//                                 console.log(`today is the last day of the week`)
//                                 break;
//     default:
//         console.log(`invalid!`)
//         break;
// }

// TENARY OPERATORS 
const myAge=23;
const drink=myAge>=18?`wine🍷`:`water💦`;
console.log(drink)
console.log(`i am (${myAge}) years old, I drink (${drink})`)

const bill=Number(prompt('whats your bill?'));
const tip= bill>=50<=300?bill*15:bill*20;
console.log(`the bill was ${bill}, the tip was ${tip}, the total value is ${bill+tip}`)
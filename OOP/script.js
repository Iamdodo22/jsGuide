"use strict";
/* oop means object oriented programming .... it help us create a blue print kind to create different object*/ 

// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// const jamie = new Person('jamie', 'lukas', 24)
// const lius = new Person('lius', 'aviaro', 25)
// // console.log(jamie)
// Person.prototype.fullName = function() {
//    return (this.firstName + ' ' + this.lastName)
// }
// console.log(jamie.fullName())
// console.log(lius.fullName())
// console.log(Person.prototype)

// c o d i n g --- c h a l l e n g e
// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }
// // const car1 = new Car('BMW', 120)
// // console.log(car1)
// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }
// // // console.log(car1.accelerate())
// Car.prototype.brake = function() {
//    this.speed -= 5;
//    console.log(`${this.make} is going at ${this.speed} km/h`)
// }
// // console.log(car1.brake())

// const car2 = new Car('Mercedes', 95);
// car1.brake()
// car1.brake()
// car1.brake()
// car2.brake()
// car2.accelerate()


// es6 class....
// class Person {
//     constructor(fullName, birthYear){
//         this.fullName= fullName;
//         this.birthYear = birthYear;
//     }
//     //method will be added to prototype property
//     //instance method
//     calAge() {
//         console.log(2037 - this.birthYear)
//     }

//     greet() {
//         console.log(`hey! ${this.firstName}`)
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     //when setting name that already exist use _
//     set fullName(name) {
//         if(name.includes(' '))this._fullName = name;
//         else alert(`${name} is not a full name`)
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     //static method
//     static hey() {
//         console.log('heyyyyyyyyyyyyyyyyy')
//     }
// }
// const jessica = new Person('jessica Davis', 1996);
// // console.log(jessica);
// // jessica.calAge()
 
// // console.log(jessica.age)
// console.log(jessica)

// Person.hey()
// Person.prototype.greet = function() {
//     console.log(`hey! ${this.firstName}`)
// }

// jessica.greet()

// class arent hoisted i.e we cant use them efore they are declared
// class are first time citizen
// class are executed in strict mode

//getter and setter
// const account = {
//     owner: 'jonas',
//     movements: [200, 400, 500, 750],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov)
//     }
// }
// console.log(account.latest)

//object.create()
// const Personproto = {
//     calAge() {
//         console.log(2037 - this.birthYear)
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(Personproto)
// console.log(steven)
// steven.name = 'steven';
// steven.birthYear = 2002;
// steven.calAge();

// const sarah = Object.create(Personproto)
// sarah.init('sarah', 1988)
// sarah.calAge()

// c o d i n g --- c h a l l e n g e --- 2
// class Car{
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed +=10;
//         console.log(`${this.make} is currently at ${this.speed} km/h`)
//     }

//     brake() {
//         this.speed -=5;
//         console.log(`${this.make} is currently at ${this.speed} km/h`)
//     }

//     get speedUS() {
//         return this.speed/1.6
//     }

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }
// const ford = new Car('ford', 120)

// ford.accelerate()
// ford.brake()
// ford.speedUS = 50;
// console.log(ford)

//inheritance btw classes : constructor function..
// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };
// Person.prototype.calAge = function() {
//     console.log(2037 - this.birthYear);
// }

// const Student = function(firstName, birthYear, course) {
//     // this.firstName = firstName;
//     // this.birthYear = birthYear;
//     Person.call(this, firstName, birthYear)
//     this.course = course;
// }

// // linking prototype
// Student.prototype =Object.create(Person.prototype)

// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }
// const mike = new Student('mike', 2020, 'Computer Science');
// mike.introduce()
// mike.calAge()
// // console.log(mike instanceof Student)
// Student.prototype.constructor = Student;
// console.log(mike.__proto__)

//c h a l l e n g e ----- 3

// const EV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }



// EV.prototype = Object.create(Car.prototype)

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// }
// EV.prototype.accelerate = function() {
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`)
// }

// const tesla = new EV('tesla', 120, 23)
// tesla.chargeBattery(78);
// console.log(tesla)
// tesla.accelerate()
// tesla.accelerate()

//es6 class inheritance
// class Person {
//     constructor(fullName, birthYear){
//         this.fullName= fullName;
//         this.birthYear = birthYear;
//     }
//     //method will be added to prototype property
//     //instance method
//     calAge() {
//         console.log(2037 - this.birthYear)
//     }

//     greet() {
//         console.log(`hey! ${this.firstName}`)
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     //when setting name that already exist use _
//     set fullName(name) {
//         if(name.includes(' '))this._fullName = name;
//         else alert(`${name} is not a full name`)
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     //static method
//     static hey() {
//         console.log('heyyyyyyyyyyyyyyyyy')
//     }
// }

// class Student extends Person{
//     constructor(fullName, birthYear, course){
//         //needs to happen first
//         super(fullName, birthYear)
//         this.course = course;
//     }

//     introduce = function() {
//             console.log(`My name is ${this.fullName} and I study ${this.course}`)
//         }

//     calAge() {
//         console.log(`I'm ${2037 - this.birthYear} years old, but I feel more like ${2037 - this.birthYear + 10}`)
//     }    
// }

// const james = new Student('james hilda', 2012, 'Agric Science');

// console.log(james)
// james.introduce()
// james.calAge()

// object.create()
// const Personproto = {
//     calAge() {
//         console.log(2037 - this.birthYear)
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }

// const steven = Object.create(Personproto)
// console.log(steven)
// steven.name = 'steven';
// steven.birthYear = 2002;
// steven.calAge();

// const sarah = Object.create(Personproto)
// sarah.init('sarah', 1988)
// sarah.calAge()

// const student = Object.create(Personproto)
// student.init = function(firstName, birthYear, course) {
//     Personproto.init.call(this, firstName,birthYear);
//     this.course = course;
// }
// student.introduce = function() {
//    console.log(`My name is ${this.firstName} and I study ${this.course}`)
// } 
// const jay = Object.create(student)
// jay.init('jay', 2010, 'health Science')
// jay.introduce()
// jay.calAge()

//public fields
//private fields
//public methods
//private methods



// class Account{
//     //public fields (instances)
//     locale = navigator.language;
//     // _movements = [];

//     //private fields 
//     #movements = [];
//     #pin;

    //public methods



    // constructor(owner, currency, pin){
    //     this.owner = owner;
    //     this.currency = currency;
    //     this.#pin = pin;
    //     this.#movements = [];
    //     this.locale = navigator.language;
    // }

    // //public interface
    // getMovements() {
    //    return this.#movements; 
    // }


    // deposit(val) {
    //     this.#movements.push(val)
    //     return this;
    // }

    // withdraw(val) {
    //     this.deposit(-val)
    //     return this;
    // }

    

    // requestLoan(val) {
    //     if(this.#approveLoan(val)) {
    //         this.deposit(val);
    //         console.log('loan approved');
    //         return this;
    //     }
    // }

    //private methods
//     #approveLoan(val) {
//         return true;
//     }
// }

// const acc1 = new Account('jonas', 'EUR', 1111);
// acc1.deposit(240);
// acc1.withdraw(180);
// acc1.requestLoan(10000);
// console.log(acc1);

// //chaining
// acc1.deposit(300).deposit(300).withdraw(500).deposit(900).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements())

// c o d i n g -- c h a l l e n g e ....4
class Car{
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    get speedUS() {
                return this.speed/1.6
            }
        
    set speedUS(speed) {
                this.speed = speed * 1.6;
            }
}

class EV extends Car{
    #charge;

    constructor(make,speed, charge){
    super(make, speed);
    this.#charge = charge; 
    }
    
    accelerate() {
        this.speed += 20;
        this.#charge--
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`)
        return this;
    }

    brake() {
        super.brake()
        return this;
    }

    chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
}
}
const rivian = new EV('Rivian', 120, 23)
rivian.accelerate().brake().brake().brake().brake().brake().brake().accelerate().accelerate().chargeBattery(50).accelerate().brake().accelerate().brake()
console.log(rivian.speedUS);
const st = {
    name : "nikhil",
    age : 25,
    marks : 96,
}

// Object Oriented Programming
//Prototype


// let arr1 = [1,2,3];
// let arr2 = [1,2,3];

// arr1.sayhello = () =>{
//     console.log("hello , i am arr");
    
// }

// arr2.sayhello = () =>{console.log("hello i am arr");
// }/

// Factory Function
// A function that creates objects

// function PersonMaker(name,age){
//     const person = {
//         name:name,
//         age: age,
//         talk(){
//             console.log(`Hi , my name is ${this.name}`);
            
//         },
//     };
//     return person;
// }

// New Operator
// Constructors - doesn't return anything & start with capital

// function PersonMaker(name,age){
//     this.name = name;
//     this.age = age;
// }

// PersonMaker.prototype.talk = function (){
//     console.log(`hi , my name is ${this.name}`);
    
// }

// let p1 = new PersonMaker("nikhil",25);
// let p2 = new PersonMaker("kannu", 23);



// Classes 
// classes are a template for creating objects


// The constructor method is a special method of a class for creating and initializing an object instance of tha class.

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;

    }
    talk(){
        console.log(`he , my name is ${this.name}`);
        
    }
}

let p1 = new Person("nikhil",25);
let p2 = new Person("kannu", 23);


// Inheritance

class Student {
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    talk(){
        console.log(`he i am ${this.name}`);
        
    }
}

let stu1 = new Student("adam", 25,95);

class Teacher {
    constructor(name,age,subject) {
        this.name = name;
        this.age =age;
        this.subject = subject;
        
    }
    talk(){
        console.log(`he, i am ${this.name}`);
        
    }
}
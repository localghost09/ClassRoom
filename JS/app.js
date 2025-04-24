// let todo = [];

// while(true){
//     let req = prompt('enter your request');
   
//     if(req == 'quit'){
//         console.log("exit the game ");
//         break;
//     }

//     else if(req == 'list'){
//         console.log('-------------');
//       for(let i=0; i<todo.length; i++){
//            console.log(todo[i]);  
//       }
//         console.log('--------------');
//     }
   

//     else if(req =='add' ){
        
//         let task = prompt('plese enter the task you want to add');
//         todo.push(task);
//         console.log('task was added ');
//     }

//     else if(req == 'delete'){
//         let idx = prompt("enter the index you want to delete");
//         todo.splice(idx,1);
//         console.log("task was deleted")
//     }
   
   
// }



// let num = 22378;

// let count = 0;

// while(num!=0){
//     num = Math.floor(num/10);
//     count++;
// }


// console.log(count);


// object literals 

// let students = {
//     name :'nikhil',
//     age :23,
//     marks : 99

// };


// let Post = {
//     username : 'localhost002',
//     content : 'this is my name and you are you and i am tha leader ',
//     likes : 22,

// }

// let car ={
//     name : 'Bmw',
//     model: 'r5',
//     color : 'blue'  
// };

// car.name = 'audei';

// function print(){
//     console.log('hello');
// }

// print();


// function CalcAvg( a,b,c)  {
//     let sum = (a+b+c)/3;
//     console.log(`average of three number ${sum}'s`);
// }

// CalcAvg(4,400,4);

// function Table(n){
//     for(let i=n; i<=n*10; i=i+n){
//             console.log(i);
//     }
// }

// Table(7);


// function Sum(n){
//     let num = 0;
//     for(let i=1; i<=n; i++){
//         num = num +i;
//     }
//     return num;
// }


const Calc = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}
// forEach 

// let arr = [1,2,3,4,5];

// arr.forEach((el)=>{
//     console.log(el);
    
// });

// let arr = [{
//     name:'nikhil',
//     age:20,
// },
// {
//     name:'aditi',
//     age:18,
// },
// {
//     name:'kannu',
//     age:24,
// }];

// arr.forEach((students =>{
//     console.log(students.age);
    
// }));


//Map

// let num = [1,2,3,4];

// let double = num.map((el)=>{
//     return el * 2;
// })

//Filter 

// let nums = [1,2,3,4,7,8,2,9,10,12,11];

// let ans = nums.filter((el)=>{
//     return el % 2 ==0;
// });


// Every 
//Return true if every element of array gives true for some function . Else return false

// let arr = [1,2,3,4]

// arr.every((el) =>{
//     el%2==0;
// })


//Reduce 
//Reduce the array to a single value


// let nums  = [1,2,3,4];

// let finalVal = nums.reduce((res,el)=>{
//     return res+el;
// })

// console.log(finalVal);
// output 10 

// MAX VALUE IN ARRAY

// let arr = [1,2,3,4,77,9];

// let max = arr.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     } else{
//         return max;
//     }
// });

// console.log(max);

// CHECK IF ALL  NUMBER IN ARRAY ARE MULTIPLE OF 10 
// let  nums = [10,20,9,40];

// let ans = nums.every((el)=> el %10 == 0
// )

// console.log(ans);

//FIND MIN NUMBER IN A ARRAY

// let arr = [11,33,2,5];

// let min = arr.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }else{
//         return min;
//     }
// })

// console.log(min);


//Giving a default value to the arguments

// function sum(a,b=4){
//     return a + b;
// }

// SPREAD
//Expands an iterable into multiple values

// const arr = [1,3,4,4,5];
// console.log(...arr);


// SPREAD Array literals

// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);


//SPREADM WITH OBJECT LITERALS

// let data = {
//     email:'nikhil@gmail.com',
//     password:'ghost',
// }

// let dataCopy = {...data,id:123,country:'india'};

//REST 
// allows a function to take an indentifies number of arguments and bundle them in array

// function sum(...args){
//     //arguments
//     for(let i=0; i<args.length; i++){
//         console.log('you gave us ', args[i]);
        
//     }
// }

// console.log(sum(1,2,3,4,5));

//Destructuring 
//Storing values of array into multiple variables

// let names = ['tony','bruce','steve','peter'];
// let [winner, runnerup] = names;
// console.log(winner,runnerup);

//Destrucuring Objects

// const students = {
//     name:'nikhil',
//     age:22,
//     class:9,
//     subjects:['hindi', 'math','science'],
//     username:'nikhilprataps66@gmail.com',
//     password:'abcde',
// };

// let {username,password} = students;

//PRACTICE QUESTIONS 
//Qs1.Squareandsumthearrayelementsusingthearrowfunctionandthenfindtheaverageofthearray.


// let nums=[1,2,3,4,5];
// const square=nums.map((num)=>num*num);
// console.log(square);
// let sum=square.reduce((acc,cur)=>acc+cur,0);
// console.log(sum);

// let avg=sum/nums.length;
// console.log(avg)

//Create a new array using the map function whose each element is equal to the original element plus 5

// const numbers = [1,2,3,4];

// const num = numbers.map((num)=> num+5);

// console.log(num);

// Qs3.Create a new array whose elements are in uppercase of words present in the original array

// const string = ['nikhil','aditi','kannu', 'annu','raju'];

// console.log(string.map((strings)=> strings.toUpperCase()));






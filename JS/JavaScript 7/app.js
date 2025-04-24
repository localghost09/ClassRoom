// try & catch
// the try statements allows you to define a block of code to be tested for errors while it is being executed

// the catch allows you to define a block of code to be executed , if an error occurs in the try block 


// try{
//     console.log(a);
    
// }catch(error){
//     console.log('caught an error a is not defined');
//     console.log(error);
    
// }


// Arrow Functions


// const sum = (a,b) =>{
//     console.log(a+b);
    
// }

// implicit return

const mul = (a,b) => a*b;


// Set Timeout

// console.log("he there");

// // setTimeout(() =>{
// //     console.log('apna college');
    
// // },400);

// console.log('welcome to ');

// // Set Intervals

// const id = setInterval(()=>{
//     console.log('tech nikhil');
    
// },2000)

// console.log(id);
// clearInterval(id);


// const square=(n) => n*n;

// const id = setInterval(()=>{
//     console.log("hello nikhil");
    
// },2000)

// setTimeout(()=>{
//     clearInterval(id);
// },10000)



//WriteanarrowfunctionnamedarrayAveragethatacceptsanarrayofnumbersandreturnstheaverageofthosenumbers.
// const arr = [1,2,3,4,5];

// const length = arr.length;
// console.log(length);


// const arrayAverage = (arr) =>{
//     let total = 0;
//     for(let numbers of arr){
//         total +=numbers;
//     } 

//     return total/length
// }

// console.log(arrayAverage(arr));



//Qs2.WriteanarrowfunctionnamedisEven()thattakesasinglenumberasargumentandreturnsifitisevenornot
// const isEven = (n) =>{
//     return n%2==0?"even":"odd";
// }

//Whatistheoutputofthefollowingcode

const objects = {
    message :'hellow , world!',

    logMessage() {
        console.log(this.message);
        
    }
};

setTimeout(objects.logMessage,1000);
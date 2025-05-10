// visualization of call stack

function one(){
    return 1;
}

function two(){
    return one() + one();

}

function three(){
    let ans = two() + one();
    console.log(ans);
    
}

//three();

// using breakpoint in source we can see how a function call another function and also we can see the call stack


//Js is single threaded

// setTimeout(()=>{
//     console.log("hey");
    
// },2000);

// console.log("happy birthday adi");

// h1 = document.querySelector("h1"); // Using Promises

// function changeColor(color,delay){

//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//         h1.style.color= color;
//         resolve("color changed");
        
//     },delay);
//     });
    
// }

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was changed");
//     return changeColor("orange", 1000);
// })
// .then(()=>{
//     console.log("orange color was changed");
//     return changeColor("blue",1000);    
// })
// .then(()=>{
//     console.log("blue color was chaged");
    
// })


// changeColor("red",1000,()=>{
//     changeColor("orange", 1000,()=>{
//         changeColor("green", 1000, ()=>{
//             changeColor("yellow", 1000, ()=>{
//                 changeColor("blue", 1000);
//             })
//         })
//     })
// })

// callback nesting -> callback hell


//Promises
// the promises object represent the eventual completion (or failure) of an asynchronization operation and its resulting value .


// function savetoDb(data){
//     let intSpeed = Math.floor(Math.random()*10)+1;
//     if(intSpeed>4){
//         console.log("your data was saved",data);
        
//     }else{
//         console.log("weak connection your data was not saved");
        
//     }
// }


// function savetoDb(data){
//     return new Promise((resolve,reject) =>{
//         let intSpeed =  Math.floor(Math.random()*10)+1;
//         if(intSpeed>4){
//             resolve("sucess: data was saved");
//         }else{
//             reject("failure: weak connection data was not saved");
//         }
//     });
// }

// let request = savetoDb("apna college") // req = promise object
// .then(()=>{
//     console.log("Data 1 was saved : promise was resolved");
//     savetoDb("kannu")
//     .then(()=>{
//         console.log("data 2 was saved");
        
//     })
// })
// .catch(()=>{
//     console.log("Promise was rejected");
    
// })
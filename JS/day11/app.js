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

// h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color= color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }


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
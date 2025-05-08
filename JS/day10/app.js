//DOM Events 
//events are signals that something has occured. (user inputs/actions)

// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = function(){
//         console.log('you clicked a button');
        
//     }
//     btn.onmouseenter = function(){
//         console.log('you enterd a button');
        
//     }
// }


//Event Listener
//JavaScript's event listener function allows you to create custom responses to events like mouse clicks, keyboard clicks, and window resizing

// for(btn of btns){
//     btn.addEventListener('click',sayhello);
//     btn.addEventListener('click',sayname);
// }

// function sayhello(){
//     alert('hello');
    
// }

// function sayname(){
//     alert('nikhil');
    
// }



//Activity 

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3 = document.querySelector('h3');
//     let randomColor = getRandom();
//     h3.innerText=randomColor;

//     let div = document.querySelector('div');
//     div.style.backgroundColor=randomColor;

    
// })

// function getRandom(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }



//Event Listner For elements 

// let pr = document.querySelector("p");

// pr.addEventListener("click", function(){
//     alert('try to copy ');
// })



// this is Event Listeners 
// when this is used in a callback of event handler of something, it refers to that something

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click", changeColor);




//keyboard Events 

// let input = document.querySelector("input");

// input.addEventListener("keydown", function(){
//     console.log("You Pressed a key");
    
// })

// input.addEventListener("keydown", function(e){
//     console.log("code = ", e.code);
//     if(e.code == "ArrowUp"){
//         console.log("char move forward");
        
//     }
//     else if(e.code == "ArrowDown"){
//         console.log("char is move backward");
        
//     }
//     else if(e.code == "ArrowLeft"){
//         console.log("char is move left");
        
//     }
//     else if(e.code == "ArrowRight"){
//         console.log("char is move right");
        
//     }
    
// })


// Form Events 

// let form = document.querySelector("form");

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     alert("form was submited");
// });

//Extracting Form Data

// let form = document.querySelector("form");

// form.addEventListener("submit", function(e){
//     e.preventDefault();

//     let inp = document.querySelector('input');
//     console.log(inp);
    
// })


// let form = document.querySelector("form");

// form.addEventListener("submit", function(e){
//     e.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);
    

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`)
    
// });



//More Events 
//change event 
// the event occurs when the value of an element has been changed (only works on <input>, <textarea> and and <select> elements);
const iE = document.querySelector("#user");

iE.addEventListener("change", function(){
   
    console.log("Changed on screen");
    
})

// input event 
// the input event fires when the value of an <input>, <select> , or <textarea> element has been changed.


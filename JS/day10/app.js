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

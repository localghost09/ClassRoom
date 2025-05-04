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
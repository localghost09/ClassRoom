// event bubling

// let div = document.querySelector("div");
// let ul  = document.querySelector("ul");
// let li = document.querySelectorAll("li");


// div.addEventListener("click", function(){
//     console.log("div was clicked");
    
// })

// ul.addEventListener("click", function(e){
//     e.stopPropagation(); // to avoid event bubling
//     console.log("ul was clicked");
    
// })

// for(li of li){
//     li.addEventListener("click", function(e){
//          e.stopPropagation(); // to avoid event bubling
//         console.log("li was clicked");
        
//     })
// }


//ToDo App

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// let input = document.querySelector("input");

// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = input.value;
//     let delBtns = document.createElement("button");
//     delBtns.innerText = "Delete";
//     delBtns.classList.add("delete");
//     item.appendChild(delBtns);
//     ul.appendChild(item); // add the item value in ul as a child
    
//     input.value="";
    
// })


// ul.addEventListener("click", function(event){
//    if(event.target.nodeName=="BUTTON"){
//     let listItem = event.target.parentElement;
//     listItem.remove();
//     console.log(delte);
    
//    }

    
// })

// let debtns = document.querySelectorAll(".delete");

// for(debtns of debtns){
//     debtns.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
        
//     });
// }


// Simon Says Game

let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started = true;
        
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },100);
   
}


function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    btnFlash(randbtn);
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
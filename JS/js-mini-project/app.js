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


// Selecting Elements

// getElementById
// returns the element as an object or null(if not found)
// document.getElementById("description");
// const obj = document.getElementById("description");
// console.log(obj);

// console.dir(obj);


//getElementByClassName
//returns the elements as an HTML collection or empty collection (if not found)


// console.log(document.getElementsByClassName("oldImg"));
// // give the value of first image 
// console.log(document.getElementsByClassName("oldImg")[0]);

// getElementByTagName
// Returns the element as an HTML collection or empty collection (if not found)

// document.getElementsByTagName("p");

//Query Selectors 
//Allow us to use any CSS selector

//select single element those identify first
// document.querySelector("p");

// // for selecting all css selector

// console.dir(document.querySelectorAll("p"));

//Using Properties & mehtods

//innerText
// shows the visible text contained in a node
// let para = document.querySelector('p');
// console.log(para.innerText);


// //textContent
// //Shows all the full text
// para.textContent;
// console.log(para.textContent);

// //innerHTML
// //shows the full markup
// para.innerHTML
// console.log(para.innerHTML);

//Manipulating Attributes
// let Image = document.querySelector('img');
// Image.getAttribute('id')
// Image.setAttribute('id' , 'mainHFS');


//Manipulating Style(with style attribute)
// let heading = document.querySelector('h1');
// heading.style.color = 'red';
// it changes the color of h1 heading 

// changes the color of all links into pink color

// let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++){
//     links[i].style.color = 'pink';
// }



//Manipulating Style (using classList)

//classList.add() to add new classes
//classList.remove() to remove classes
//classList.contains() to check if class exists
//classList.toggle() to toggle btw add and remove

// let heading = document.querySelector('h1');

// heading.classList.add('green');

//Navigation

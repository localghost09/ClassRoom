//DOM Events 
//events are signals that something has occured. (user inputs/actions)

let btn = document.querySelector("button");
console.dir(btn);
btn.onclick = function(){
    console.log('button was clicked');
    
}
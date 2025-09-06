// let btn=document.querySelectorAll("button");
// for(btns of btn){
//     btns.onclick=sayHello;
// }
// for(btns of btn){
//     btns.onmouseenter=sayLike;
// }

// for(btns of btn){
//     btns.addEventListener("click",sayHello);
//      btns.addEventListener("click",sayLike);
// }

// function sayHello(){
//     prompt("welcome Vaishu!");
// }
// function sayLike(){
//     prompt("vaishu! YOu like thid reel!");
// }


// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
// btn.style.backgroundColor="blue";
// btn.style.borderRadius="50%";

// console.log("color was changed");

// });
// btn.addEventListener("dblclick",function(){
//     btn.style.backgroundColor="gray";
//     btn.style.borderRadius="0";
// })
// let ip=document.querySelector("input");
// ip.addEventListener("keydown",function(event){
//     console.log("code:",event.code);
//     if(event.code=="ArrowUp"){
//         console.log("you moves up");
//     }
//     else if(event.code=="ArrowDown"){
//         console.log("you moves back");
//     }
//     else if(event.code=="ArrowLeft"){
//         console.log("you moves left");
//     }
//     else if(event.code=="ArrowRight"){
//         console.log("You move Right");
//     }
// })
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let li=document.querySelector("li");
// div.addEventListener("click",function(){
//     console.log("div was clicked");
// });
// ul.addEventListener("click",function(event){
//     console.log("ul was clicked");
//       event.stopPropagation();
// });
// li.addEventListener("click",function(event){
//     console.log("li was clicked");
//     event.stopPropagation();
// });



let btn=document.querySelector("button")
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    // let li=document.querySelector("li");
    let item=document.createElement("li");
    item.innerText=inp.value;
    
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
})
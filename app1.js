// // let gameSeq=[];
// // let userSeq=[];
// // let started=false;
// // let btns=["red","yellow","green","blue"];
// // let level=0;
// // let h2=document.querySelector("h2");
// // document.addEventListener("keypress",function(){
// //     if(started==false){
// //         console.log("game started");
// //         started=true;
// //         levelUp();
// //     }
// // });
// // function gameFlash(btn){
// //     btn.classList.add("flash");
// //     setTimeout(function(){
// //         btn.classList.remove("flash");
// //     },250);
// // }

// // function userFlash(btn){
// //     btn.classList.add("userflash");
// //     setTimeout(function(){
// //         btn.classList.remove("userflash");
// //     },250);
// // }

// // function levelUp(){
// //     level++;
// //     h2.innerText=`level ${level}`;
// //     let radIdx=Math.floor(Math.random()*3);
// //     let randColor=btns[radIdx];
// //     let randBtn=document.querySelector(`.${randColor}`);
// //     gameFlash(randBtn);
    
// //     gameSeq.push(randColor);
// //     console.log(gameSeq);
// //     // console.log(randBtn);
// //     // console.log(randColor);
// // }



// // function btnpress(){
// //     console.log(this);
// //    let btn=this;
// //    userFlash(btn);

// // let usercolor=btns.getAttribute("id");
// // console.log(usercolor);
// // let allbtns=document.querySelectorAll(".btn");
// // for(btns of allbtns){
// //     btns.addEventListener("click",btnpress);
// // }
// // }


// let gameSeq = [];
// let userSeq = [];
// let started = false;
// let btns = ["red", "yellow", "green", "blue"];
// let level = 0;
// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     if (!started) {
//         console.log("game started");
//         started = true;
//         levelUp();
//     }
// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(() => btn.classList.remove("flash"), 250);
// }

// function userFlash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(() => btn.classList.remove("userflash"), 250);
// }

// function levelUp() {
//     userSeq = []; // reset user sequence for new level
//     level++;
//     h2.innerText = `Level ${level}`;

//     let radIdx = Math.floor(Math.random() * 4);
//     let randColor = btns[radIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameFlash(randBtn);

//     gameSeq.push(randColor);
//     console.log("Game Seq:", gameSeq);
// }

// function checkAns(idx) {
//     if (userSeq[idx] === gameSeq[idx]) {
//         console.log("Correct so far");

//         if (userSeq.length === gameSeq.length) {
//             // move to next level after small delay
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerText = `Game Over!your score was ${level} Press any key to start`;
//         console.log("Wrong input. Restarting...");
//         document.querySelector("body").style.backgroundColor="red";
//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor="white";},150);
//         }

//         resetGame();
//     }


// function btnpress() {
//     let btn = this;
//     userFlash(btn);

//     let usercolor = btn.getAttribute("id");
//     console.log("User pressed:", usercolor);

//     userSeq.push(usercolor);
//     console.log("User Seq:", userSeq);

//     // check latest input
//     checkAns(userSeq.length - 1);
// }

// function resetGame() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }

// // attach listeners once
// let allbtns = document.querySelectorAll(".btn");
// for (let btn of allbtns) {
//     btn.addEventListener("click", btnpress);
// }




let gameSeq = [];
let userSeq = [];
let started = false;
let btns = ["red", "yellow", "green", "blue"];
let level = 0;
let h2 = document.querySelector("h2");
let h3=document.querySelector("h3");
let highscore=0;

// Start game on keypress
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 250);
}

function levelUp() {
    userSeq = []; // reset user sequence for new level
    level++;
    h2.innerText = `Level ${level}`;

    let radIdx = Math.floor(Math.random() * 4);
    let randColor = btns[radIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);

    gameSeq.push(randColor);
    console.log("Game Seq:", gameSeq);
}

function btnpress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1); // check last move
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            // level complete
            setTimeout(levelUp, 1000);
        }
    } else {
        // Game over
        if(level-1>highscore){
            highscore=level-1;
        }
        h2.innerHTML= `Game Over! your score was ${level}  Press any key to restart`;
        h3.innerText=`highest score is: ${highscore}`;
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 200);

        resetGame();
    }
}

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// attach listeners once
let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

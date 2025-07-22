let buttons=document.querySelectorAll(".button");
let restart=document.querySelector(".restart");
let reset=document.querySelector(".reset");
let msg=document.querySelector("#msg");
let round2=document.querySelector(".round2");
let turnO=true;
let winnerarr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            button.innerText="O";
            turnO=false;
        }else{
            button.innerText="X";
            turnO=true;
        }
        button.disabled=true;
        checkwinner();
    })
});
const rematch=()=>{
    turnO=true;
    enable();
    round2.classList.add("hide");
}
const disable=()=>{
    for(let button of buttons){
        button.disabled=true;
    }
}
const enable=()=>{
    for(let button of buttons){
        button.disabled=false;
        button.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulations, winner is ${winner}`;
    round2.classList.remove("hide");
}
const checkwinner=()=>{
    for(let pattern of winnerarr){
     let val1=buttons[pattern[0]].innerText;
     let val2=buttons[pattern[1]].innerText;
     let val3=buttons[pattern[2]].innerText;

    if(val1!=="" && val2!=="" && val3!==""){
        if(val1===val2 && val1===val3){
            console.log(`winner is ${val1}`);
            disable();
            showWinner(val1);
        }
     }
    
    }
}
reset.addEventListener("click",rematch);
restart.addEventListener("click",rematch);
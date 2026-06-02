let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnx = true;   //aage isi vajah se x and o print karenge 

const pattern = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
];


const resetGame = () => {
    turnx = true;
    enableButtons();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{  //click kerenge to object me kya change aayega
        if (turnx){  //agar player turnx == true hai to ye
            box.innerText = "X";
            turnx = false;   //false karna padega kyuki false rahega tabhi na X ke baad O aayega
            //button ko agar dubara click karenge to x cnange hoke y ban jayega 
        }else{
            box.innerText = "O";
            turnx = true;        
        }
        //
        box.disabled = true //disable the currount button
        //so if user click again on tha same button then button will not tranform
        //because it was desabled after first click
        
        checkWinner();
    })
})

const disableButtons = () => {
    for (let box of boxes){
        box.disabled = true
    }
}

const enableButtons = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation's winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disableButtons();
}

const checkWinner = () => {
    for (let i of pattern) {
        let pos1 =  boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;
        
        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner", pos1)
                showWinner(pos1);
            }
        }
    }
}

newGame.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)
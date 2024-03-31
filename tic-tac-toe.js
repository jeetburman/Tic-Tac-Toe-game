alert("Play Game:\n Player-X \n Player-O")
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgCont = document.querySelector(".msg");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true
    enableBoxes();
    msgCont.classList.add("hidden");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0 == true){
            box.innerText="X";
            turn0 = false;
        }else{
            box.innerText="O";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText =`Bingo! Winner is PLayer-${winner}`;
    msgCont.classList.remove("hidden");
};
const checkWinner = () => {
    for(pattern of winPatterns){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
    
            if(pos1 !="" && pos2 !="" && pos3 != ""){
                if(pos1 === pos2 && pos2 === pos3){
                    console.log("Winner is Player-",pos1);

                    showWinner(pos1);
                }
            }
        }   
    }

    newgame.addEventListener("click",resetGame);
    reset.addEventListener("click",resetGame);
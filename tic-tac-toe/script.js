let boxes = document.querySelectorAll(".cell");
let resetBtn = document.querySelector(".restart-btn");
let statusOfGame = document.querySelector(".status");
let turnO = true; // true => O's turn, false => X's turn

const winCondition = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6], // fixed diagonal condition
  [3, 4, 5],
  [6, 7, 8],
];

// ✅ Update status text
const updateTurnText = () => {
  statusOfGame.innerText = turnO ? "Player O's Turn" : "Player X's Turn";
};

// Initialize
updateTurnText();

boxes.forEach((box) => {
  box.addEventListener("click", () => {
   if (turnO) {
     box.innerText = "O";
     box.classList.add("o");
     turnO = false;
   } else {
     box.innerText = "X";
     box.classList.add("x");
     turnO = true;
   }

    box.style.pointerEvents = "none"; // disables further clicks on this cell
    checkWinner();
    updateTurnText(); // show whose turn next
  });
});

let winnerBox = document.querySelector(".winner"); // DOM element

const showWinner = (player) => {
  winnerBox.innerText = `🎉 Congratulations! Winner is ${player}`;
};

const checkWinner = () => {
  for (let condition of winCondition) {
    let val1 = boxes[condition[0]].innerText;
    let val2 = boxes[condition[1]].innerText;
    let val3 = boxes[condition[2]].innerText;

    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        statusOfGame.innerText = `🎉 Player ${val1} Wins!`;
        // stop further moves
        boxes.forEach((b) => (b.style.pointerEvents = "none"));
        showWinner(val1);
        
      }
    }
  }
};

// reset game 
const reset = ()=>{
    turnO = true;
    updateTurnText();

    boxes.forEach((box)=>{
        box.innerText = "";
        box.style.pointerEvents = "auto";
    })
    winnerBox.innerHTML= "";
}

resetBtn.addEventListener("click" , reset)

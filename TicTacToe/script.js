let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rst-button");
let newgamBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {

        box.classList.add("x-mark");
        box.innerText = "X";
      
        turnO = false;
    } else {
        box.classList.add("o-mark");
        box.innerText = "O";
        turnO = true;
    }
    box.disabled = true;
    checkDraw();
    checkWinner();
  });
});

const resetGame = () => {
  
  enableBoxes();
  turnO = true;
  msgContainer.classList.add("hide");
  
  winnerDeclared = false; // Reset winner flag
  
};
const enableBoxes = () => {
    for (let cleanBox of boxes) {
      cleanBox.disabled = false;
      cleanBox.innerText = "";
      cleanBox.classList.remove("x-mark"); // Remove any existing marks
      cleanBox.classList.remove("o-mark");
    }
  };
  

let winnerDeclared = false; // Flag to track winner status

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let postVal1 = boxes[patterns[0]].innerText;
    let postVal2 = boxes[patterns[1]].innerText;
    let postVal3 = boxes[patterns[2]].innerText;

    if (postVal1 !== "" && postVal2 !== "" && postVal3 !== "") {
      if (postVal1 === postVal2 && postVal2 === postVal3) {
        winnerDeclared = true; // Set flag if winner found
        showWinner(postVal1);
        disableBoxes();
        
      }
    }
  }
};

const checkDraw = () => {

        
  // Check if all boxes are filled but no winner is found
  let allFilled = true;
  for (let box of boxes) {
    if (box.innerText === "") {
      allFilled = false;
      break; // Exit the loop if an empty box is found
    }
  }

  if (winnerDeclared) {
    return; // Exit early if winner is known
  }

  if (allFilled === true) {
    msg.innerText = "Sorry Its A Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
    turnO=true;
    box.classList.add("x-mark")
  }

};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations,The Winners! ${winner}`;
  msgContainer.classList.remove("hide");
};

newgamBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

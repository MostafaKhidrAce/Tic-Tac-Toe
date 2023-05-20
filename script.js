let turn = "x";
let title = document.querySelector(".title");
let box = [];

function end(num1, num2, num3) {
  title.innerHTML = `Player ${box[num1]} Winner`;
  document.getElementById("box" + num1).style.background = "#fa0";
  document.getElementById("box" + num2).style.background = "#fa0";
  document.getElementById("box" + num3).style.background = "#fa0";

  setInterval(() => {
    title.innerHTML += ".";
  }, 300);
  setTimeout(() => {
    location.reload();
  }, 900);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    box[i] = document.getElementById("box" + i).innerHTML;
  }
  if (box[1] == box[2] && box[2] == box[3] && box[1] != "") {
    end(1, 2, 3);
  } else if (box[4] == box[5] && box[5] == box[6] && box[4] != "") {
    end(4, 5, 6);
  } else if (box[7] == box[8] && box[8] == box[9] && box[7] != "") {
    end(7, 8, 9);
  } else if (box[1] == box[4] && box[4] == box[7] && box[1] != "") {
    end(1, 4, 7);
  } else if (box[2] == box[5] && box[5] == box[8] && box[2] != "") {
    end(2, 5, 8);
  } else if (box[3] == box[6] && box[6] == box[9] && box[3] != "") {
    end(3, 6, 9);
  } else if (box[1] == box[5] && box[5] == box[9] && box[1] != "") {
    end(1, 5, 9);
  } else if (box[3] == box[5] && box[5] == box[7] && box[3] != "") {
    end(3, 5, 7);
  } else if (
    box[1] &&
    box[2] &&
    box[3] &&
    box[4] &&
    box[5] &&
    box[6] &&
    box[7] &&
    box[8] &&
    box[9] != ""
  ) {
    document.getElementById("box" + 1).style.background = "rgb(209, 0, 0)";
    document.getElementById("box" + 2).style.background = "rgb(209, 0, 0)";
    document.getElementById("box" + 3).style.background = "rgb(209, 0, 0)";
    document.getElementById("box" + 4).style.background = "rgb(209, 0, 0)";
    document.getElementById("box" + 5).style.background = "rgb(209, 0, 0)";
    document.getElementById("box" + 6).style.background = "rgb(209, 0, 0)";
    document.getElementById("box" + 7).style.background = "rgb(209, 0, 0)";
    document.getElementById("box" + 8).style.background = "rgb(209, 0, 0)";
    document.getElementById("box" + 9).style.background = "rgb(209, 0, 0)";
    title.innerHTML = `DRAW`;
    setInterval(() => {
      title.innerHTML += ".";
    }, 300);
    setTimeout(() => {
      location.reload();
    }, 900);
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "o";
    title.innerHTML = " O's TURN";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    title.innerHTML = " X's TURN";
  }
  winner();
}

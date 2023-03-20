/* <div class="square"></div> */

const levelform = document.getElementById("levelform");
levelform.addEventListener("submit", play);

//Seleziona il livello
function drawsquare(content, sidenumsquare) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.width = ` 
  calc(100% / ${sidenumsquare})`;
  square.style.height = square.style.width;
  square.innerHTML = content;
  return square;
}
//funzione per generare l'array delle bombe
function generatebombs(bombsnum, numsquare) {
  const bombs = [];
  while (bombs.length <= 16) {
    const bomb = getrndNumber(1, numsquare);
    if (bombs.indexOf(bomb) === -1) {
      bombs.push(bomb);
    }
    return bombs;
  }
}

function play(e) {
  e.preventDefault();
  const playground = document.getElementById("playground");
  playground.innerHTML = "";
  const NUM_BOMBS = 16;
  //prendo il livello
  const level = document.getElementById("level").value;
  console.log(level);

  //imposto il numero di celle a seconda del livello
  let squarenumbers;

  switch (level) {
    case "Easy":
      squarenumbers = 100;
      break;
    case "Medium":
      squarenumbers = 81;
      break;
    case "Hard":
      squarenumbers = 49;
      break;
  }
  console.log(squarenumbers);

  //determino il numero di celle per lato
  let squarerow = Math.sqrt(squarenumbers);
  console.log(squarerow);
  const bombs = generatebombs(NUM_BOMBS, squarenumbers);
  //per il numero di celle genero la cella
  for (let i = 1; i <= squarenumbers; i++) {
    const square = drawsquare(i, squarerow);
    square.addEventListener("click", function () {
      square.classList.add("safe");
    });
    playground.appendChild(square);
  }
}

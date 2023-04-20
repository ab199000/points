const body = document.querySelector(".field");

let motion = 0;


let massPaints = []
let field = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

// for (let i = 0; i < 25; i++) {
//   let line = document.createElement("div");
//   line.classList.add(".line");
//   for (let j = 0; j < 25; j++) {
//     let btn = document.createElement("button");
//     btn.id = `${i}n${j}`;
//     line.append(btn);
//     body.append(line);
//   }
// }

body.addEventListener("click", (event) => {
  let point = event.target;
  if (point.tagName != "BUTTON") {
    return;
  }
  putPoint(point);
  console.log(motion)
  
});

function putPoint(point) {
  if (point.classList.value != "") {
    return;
  }
  if (motion) {
    point.classList.add("secondPlayer");
    // field[coordinatesPoint(point).str][coordinatesPoint(point).col] = motion
    field2[coordinatesPoint(point).str][coordinatesPoint(point).col].player =
      motion;
    giveAllPaints(coordinatesPoint(point).str, coordinatesPoint(point).col, motion)
    motion = 0;
    console.log(massPaints)
    return;
  }
  point.classList.add("firstPlayer");
  // field[coordinatesPoint(point).str][coordinatesPoint(point).col] = motion
  field2[coordinatesPoint(point).str][coordinatesPoint(point).col].player =
    motion;
    giveAllPaints(coordinatesPoint(point).str, coordinatesPoint(point).col, motion)
  motion = 1;
  console.log(massPaints)
}

function coordinatesPoint(point) {
  let str = point.id.slice(0, point.id.indexOf("n"));
  let col = point.id.slice(point.id.indexOf("n") + 1);

  return { str, col };
}

function checkPoints(str, col, player) {}

let field2 = [
  [
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
  ],
  [
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
  ],
  [
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
  ],
  [
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
  ],
  [
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
  ],
  [
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
  ],
  [
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
    { player: "", statusChek: 0 },
  ],
];

const squer = document.querySelector(".field2");

for (let i = 0; i < field2.length; i++) {
  let line = document.createElement("div");
  line.classList.add(".line");
  for (let j = 0; j < field2[i].length; j++) {
    let btn = document.createElement("button");
    if (field2[i][j].player !== "") {
      if (field2[i][j].player) {
        btn.classList.add("firstPlayer");
      } else {
        btn.classList.add("secondPlayer");
      }
    }
    btn.id = `${i}n${j}`;
    line.append(btn);
    body.append(line);
  }
}



function giveAllPaints(str, col, player) {
    console.log(str, col, player);

  console.log(massPaints);
  let peremForPush = false;

  if (field2[str][col].statusChek == 1 || field2[str][col].player === player) {
    
    return;
  }

  for (let i = 0; i < massPaints.length; i++) {
    if (massPaints[i].str == str && massPaints[i].col == col) {
      peremForPush = true;
    }
  }

  if (peremForPush) {
    massPaints.push({ str, col, player, statusChek: 1 });
  }

  field2[str][col].statusChek = 1;

  if (
    field2[str - 1][col - 1].player === player &&
    field2[str - 1][col - 1].statusChek === 0
  ) {
    console.log(massPaints);
    massPaints.push({ str: str - 1, col: col - 1, player, statusChek: 0 });
  }
  if (field2[str - 1][col].player === player && field2[str - 1][col].statusChek === 0) {
    console.log(massPaints);
    massPaints.push({ str: str - 1, col: col, player, statusChek: 0 });
  }
  if (
    field2[str - 1][col + 1].player === player &&
    field2[str - 1][col + 1].statusChek === 0 &&
    checkOnPush(str - 1, col + 1, massPaints)
  ) {
    console.log(massPaints);
    massPaints.push({ str: str - 1, col: col + 1, player, statusChek: 0 });
    console.log(1);
  }

  if (
    field2[str][col - 1].player === player &&
    field2[str][col - 1].statusChek === 0 &&
    checkOnPush(str, col - 1, massPaints)
  ) {
    console.log(massPaints);
    massPaints.push({ str: str, col: col - 1, player, statusChek: 0 });
  }
  if (
    field2[str][col + 1].player === player &&
    field2[str][col + 1].statusChek === 0 &&
    checkOnPush(str, col + 1, massPaints)
  ) {
    console.log(massPaints);
    massPaints.push({ str: str, col: col + 1, player, statusChek: 0 });
  }

  if (
    field2[str + 1][col - 1].player === player &&
    field2[str + 1][col - 1].statusChek === 0 &&
    checkOnPush(str + 1, col - 1, massPaints)
  ) {
    console.log(massPaints);
    massPaints.push({ str: str + 1, col: col - 1, player, statusChek: 0 });
  }
  if (
    field2[str + 1][col].player === player &&
    field2[str + 1][col].statusChek === 0 &&
    checkOnPush(str + 1, col, massPaints)
  ) {
    console.log(massPaints);
    massPaints.push({ str: str + 1, col: col, player, statusChek: 0 });
  }
  if (
    field2[str + 1][col + 1].player === player &&
    field2[str + 1][col + 1].statusChek === 0 &&
    checkOnPush(str + 1, col + 1, massPaints)
  ) {
    console.log(massPaints);

    massPaints.push({ str: str + 1, col: col + 1, player, statusChek: 0 });
    console.log(checkOnPush(str + 1, col + 1, massPaints));
  }
  console.log(massPaints);
  for (let i = 0; i < massPaints.length; i++) {
    if (massPaints[i].statusChek || massPaints[i].player !== player) {
      continue;
    }
    massPaints[i].statusChek = 1;
    return giveAllPaints(massPaints[i].str, massPaints[i].col, player);
  }
}

function checkOnPush(strCheck, colCheck, massPaints) {
  if (massPaints.length === 0) {
    return;
  }
  for (let i = 0; i < massPaints.length; i++) {
    if (
      massPaints[i].str == strCheck &&
      massPaints[i].col == colCheck &&
      (massPaints[i].statusChek === 1 || massPaints[i].statusChek === 0)
    ) {
      if (massPaints[i].statusChek === 0) {
        console.log("yes"); //написать цифры и покрасить точки
      }

      return false;
    }
  }
  console.log("no");
  return true;
}



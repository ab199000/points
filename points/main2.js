let body = document.querySelector(".field")

// for(let i = 0; i < 5;i++){
// let str = document.createElement("div")
// for(let j = 0; j < 5; j++){
// let btn = document.createElement("button")
// str.append(btn)
// }
// body.append(str)
// }

// body.addEventListener("click", (event)=>{

// })

let mass = [
[
{player: '',statusChek:0},{player: '',statusChek:0},{player: 0,statusChek:0},{player: 0,statusChek:0},{player: '',statusChek:0}
],[
{player: '',statusChek:0},{player: 0,statusChek:0},{player: 1,statusChek:0},{player: '',statusChek:0},{player: '',statusChek:0}
],[
{player: '',statusChek:0},{player: 1,statusChek:0},{player: 0,statusChek:0},{player: 1,statusChek:0},{player: '',statusChek:0}
],[
{player: '',statusChek:0},{player: '',statusChek:0},{player: 1,statusChek:0},{player: '',statusChek:0},{player: '',statusChek:0}
],[
{player: '',statusChek:0},{player: '',statusChek:0},{player: '',statusChek:0},{player: '',statusChek:0},{player: '',statusChek:0}
]]

function creatField(){
for(let i = 0; i < mass.length;i++){
let str = document.createElement("div")
for(let j = 0; j < mass[i].length; j++){
let btn = document.createElement("button")
if(mass[i][j].player){
btn.classList.add("red")
}
if(mass[i][j].player === 0){
btn.classList.add("blue")
}

str.append(btn)
}
body.append(str)
}
}

creatField()

let massPaints = []
function giveAllPaints(str, col, player){
let newMass = [...mass]

// if(massPaints.length){
//     for(let i = 0; i < massPaints.length;i++){
//         if(massPaints[i].statusChek){
//             return
//         }
//     }
// }

if(newMass[str][col].statusChek){
    return
}


massPaints.push({str,col,player,statusChek:1})
newMass[str][col].statusChek = 1

if(newMass[str-1][col-1].player === player){
massPaints.push({str:str-1,col:col-1,player,statusChek:0})
}
if(newMass[str-1][col].player === player){
massPaints.push({str:str-1,col:col,player,statusChek:0})
}
if(newMass[str-1][col+1].player === player){
massPaints.push({str:str-1,col:col+1,player,statusChek:0})
}


if(newMass[str][col-1].player === player){
massPaints.push({str:str,col:col-1,player,statusChek:0})
}
if(newMass[str][col+1].player === player){
massPaints.push({str:str,col:col+1,player,statusChek:0})
}


    if(newMass[str+1][col-1].player === player){
        massPaints.push({str:str+1,col:col-1,player,statusChek:0})
    }
    if(newMass[str+1][col].player === player){
massPaints.push({str:str+1,col:col,player,statusChek:0})
}
if(newMass[str+1][col+1].player === player){
massPaints.push({str:str+1,col:col+1,player,statusChek:0})
}
console.log(massPaints)
for(let i = 0; i<massPaints.length;i++){
if(massPaints[i].statusChek){
continue
}
console.log(1)
massPaints[i].statusChek = 1
return giveAllPaints(massPaints[i].str,massPaints[i].col,player)
}
console.log(massPaints)

}
giveAllPaints(2,3,1)
const body = document.querySelector('.field')

let motion = 0

let field = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]

for(let i = 0;i<25;i++){
    let line = document.createElement("div")
    line.classList.add(".line")
    for(let j = 0; j <25;j++){
        let btn = document.createElement('button')
        btn.id = `${i}n${j}`
        line.append(btn)
        body.append(line)
    }
}

body.addEventListener("click",(event)=>{
    let point = event.target
    if(point.tagName != "BUTTON"){
        return;
    }
    putPoint (point)
    checkPoints(coordinatesPoint(point).str,coordinatesPoint(point).col,motion)
    check(coordinatesPoint(point).str,coordinatesPoint(point).col,motion)
})

function putPoint (point) {
    if(point.classList.value != ''){
        return
    }
    if(motion){
        point.classList.add("secondPlayer")
        // field[coordinatesPoint(point).str][coordinatesPoint(point).col] = motion
        field2[coordinatesPoint(point).str][coordinatesPoint(point).col].player = motion
        motion = 0
        return;
    }
    point.classList.add("firstPlayer")
    // field[coordinatesPoint(point).str][coordinatesPoint(point).col] = motion
    field2[coordinatesPoint(point).str][coordinatesPoint(point).col].player = motion
    motion = 1
}


function coordinatesPoint(point){
    let str = point.id.slice(0,point.id.indexOf('n'))
    let col = point.id.slice(point.id.indexOf('n')+1)

    return {str,col}
}

function checkPoints(str,col,player){

}


let field2 = [
    [{player: ''},{player: ''},{player: ''},{player: ''},{player: ''},{player: ''},{player: ''}],
    [{player: ''},{player: ''},{player: 0},{player: ''},{player: ''},{player: ''},{player: ''}],
    [{player: ''},{player: 0},{player: 1},{player: 0},{player: ''},{player: ''},{player: ''}],
    [{player: ''},{player: ''},{player: 0},{player: ''},{player: ''},{player: ''},{player: ''}],
    [{player: ''},{player: ''},{player: ''},{player: ''},{player: ''},{player: ''},{player: ''}],
    [{player: ''},{player: ''},{player: ''},{player: ''},{player: ''},{player: ''},{player: ''}],
    [{player: ''},{player: ''},{player: ''},{player: ''},{player: ''},{player: ''},{player: ''}]]

const squer = document.querySelector(".field2")

for (let i = 0; i < field2.length;i++) {
    let line = document.createElement("div")
    line.classList.add(".line")
    for(let j = 0; j <field2[i].length;j++){
        let btn = document.createElement('button')
        if(field2[i][j].player !== ''){
            if(field2[i][j].player){
                btn.classList.add("firstPlayer")
            } 
            else {btn.classList.add("secondPlayer")}
        }
        btn.id = `${i}n${j}`
        line.append(btn)
        body.append(line)
    }
}

function check(str,col,motion){

    let field2Copy = [...field2]

    let positionsForChek = {str: -1}

    console.log(1+positionsForChek.str )

    let massPointsForChek = []
    // while(false){
        // field2Copy[str-1][col-1] == motion ? massPointsForChek.push({str : str-1,col :col-1}): ''
        // field2Copy[str-1][col] == motion ? massPointsForChek.push({str : str-1,col :col-1}): ''
        // field2Copy[str-1][col+1] == motion ? massPointsForChek.push({str : str-1,col :col-1}): ''
        // field2Copy[str][col-1] == motion ? massPointsForChek.push({str : str-1,col :col-1}): ''
        // field2Copy[str][col+1] == motion ? massPointsForChek.push({str : str-1,col :col-1}): ''
        // field2Copy[str+1][col-1] == motion ? massPointsForChek.push({str : str-1,col :col-1}): ''
        // field2Copy[str+1][col] == motion ? massPointsForChek.push({str : str-1,col :col-1}): ''
        // field2Copy[str+1][col+1] == motion ? massPointsForChek.push({str : str-1,col :col-1}): ''
    // } 

    console.log(field2Copy)
}











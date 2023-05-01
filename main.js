let boxes = document.getElementById('gameBoard')
let restart = document.getElementById('restart')
let newGame = document.getElementById('newGame')
let message = document.getElementById('message')
let xScore = document.getElementById('xScore')
let oScore = document.getElementById('oScore')

let boxesList = Array.from(boxes.children)
let lastSelection = 'O', nextSelection = 'X'

message.innerHTML = "it's player "+nextSelection+"'s turn"


boxesList.forEach(box => {
    box.addEventListener('click', showXO)
})

function showXO(e){
    let selectedBox = e.target
    
    if(lastSelection === 'X'){
        selectedBox.innerText = 'O'
        lastSelection = 'O'
        nextSelection = 'X'
        selectedBox.removeEventListener('click', showXO)
        message.innerHTML = "it's player "+nextSelection+"'s turn"
        

    }else{
        selectedBox.innerText = 'X'
        lastSelection = 'X'
        selectedBox.removeEventListener('click', showXO)
        nextSelection = 'O'
        message.innerHTML = "it's player "+nextSelection+"'s turn"
        
    }
    matchBoxes()
    
}

function matchBoxes(a){
    //xxxxx
    match(0, 1, 2, 'X')
    match(3, 4, 5, 'X')
    match(6, 7, 8, 'X')
    match(0, 3, 6, 'X')
    match(2, 5, 8, 'X')
    match(0, 4, 8, 'X')
    match(2, 4, 6, 'X')
    match(1, 4, 7, 'X')

    //oooo
    match(0, 1, 2, 'O')
    match(3, 4, 5, 'O')
    match(6, 7, 8, 'O')
    match(0, 3, 6, 'O')
    match(2, 5, 8, 'O')
    match(0, 5, 8, 'O')
    match(2, 5, 6, 'O')
    match(1, 4, 7, 'O')
    
}

function match(x, y, z, value){
    if(boxesList[x].innerText === value && boxesList[y].innerText === value && boxesList[z].innerText === value){
                if(value === 'X'){
                    message.innerHTML = "player X wins the game"
                    xScore.innerHTML = Number(xScore.innerHTML)+1
                }else{
                    message.innerHTML = "player O wins the game"
                    oScore.innerHTML = Number(oScore.innerHTML)+1
                }
                
                boxesList.forEach(box => {
                    box.removeEventListener('click', showXO)
                })
                boxesList[x].classList.add('wins')
                boxesList[y].classList.add('wins')
                boxesList[z].classList.add('wins')
    }
}

newGame.addEventListener('click', newG)

function newG(){
    boxesList.forEach(box => {
        box.innerHTML = ''
        box.addEventListener('click', showXO)
        box.classList.remove('wins')
    })
}

restart.addEventListener('click', restartGame)

function restartGame(){
    let sure = confirm('Are you sure you want to restart, all scores will be lost')
    if(sure){
        xScore.innerHTML = 0
        oScore.innerHTML = 0
        boxesList.forEach(box => {
            box.innerHTML = ''
            box.addEventListener('click', showXO)
            box.classList.remove('wins')
        })
    }
    
}




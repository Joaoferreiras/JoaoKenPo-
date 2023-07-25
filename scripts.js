const result = document.querySelector('.result')
const myScore = document.querySelector('#myScoreSpan')
const machineScore = document.querySelector('#scoreMachineSpan')

let myCounter = 0
let machineCounter = 0

const humanChoice = (humanChoice) => {
    playTheGame(humanChoice, machineChoice())
}

const machineChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]

}

playTheGame = (humanChoice, machineChoice) => {
    console.log('Você: '+ humanChoice +' | Máquina: ' + machineChoice)
    if (humanChoice === machineChoice) {
        result.innerHTML = "Deu empate!"
    } else if (humanChoice === 'rock' && machineChoice === 'scissors' ||
        humanChoice === 'scissors' && machineChoice === 'paper' ||
        humanChoice === 'paper' && machineChoice === 'rock') {
        result.innerHTML = "Você venceu!"
        myCounter++
        myScore.innerHTML = myCounter
    } else {
        result.innerHTML = "Você perdeu!"
        machineCounter++
        machineScore.innerHTML = machineCounter
    }


}
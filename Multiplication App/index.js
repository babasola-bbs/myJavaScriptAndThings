const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)
const question = document.getElementById("question")
const form = document.getElementById("form")
const input = document.getElementById("input")
let score = JSON.parse(localStorage.getItem("score"))
let userScore = document.getElementById("score")

if(!score){ score = 0 }
userScore.innerText = `Score: ${score}`;


question.innerText = `What Is ${num1} Multiplied-By ${num2}`

const correctAnswer = num1 * num2

form.addEventListener("submit", (e) => {
    // e.preventDefault()
    // userAnswer = parseInt(input.value)

    userAnswer = +input.value
    console.log(userAnswer, typeof userAnswer)

    if(userAnswer === correctAnswer){
        score++
        console.log(score)
        updateLocalStorage()
    }
    else{
        score--
        console.log(score)
        updateLocalStorage()
    }

})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}


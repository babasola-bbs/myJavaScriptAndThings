const containerElem = document.querySelector(".container")

const careers = ["Software Engineer", "Web Developer", "Freelancer", "Instructor", "Entrepreneur"]

let careerIndex = 0
let charIndex = 0

updateText()

function updateText(){
    charIndex++
    containerElem.innerHTML = `<h1>
I Am ${careers[careerIndex].slice(0,1).toLowerCase().match(/a|e|i|o|u/g) ? "An" : "A"} ${careers[careerIndex].slice(0, charIndex)}</h1>`


if(charIndex === careers[careerIndex].length){
    careerIndex++
    charIndex = 0
}

if(careerIndex === careers.length){
    careerIndex = 0
}
setTimeout(updateText, 400)
}


const containerElem = document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const colourContainerElem = document.createElement("div");

    colourContainerElem.classList.add("colour-container")

    containerElem.appendChild(colourContainerElem)
}

const allTheColourContainerElems = document.querySelectorAll(".colour-container")

function generateColours(){
    allTheColourContainerElems.forEach((each) => {
        const newColorCode = randomColour()
        each.style.backgroundColor = "#" + newColorCode

        each.innerText = "#" + newColorCode
    })
}

function randomColour(){
    const chars = "0123456789abcdef"
    const colourCodeLength = 6
    let colourCode = ""

    for (let index = 0; index < colourCodeLength; index++) {

        const randomNumber = Math.floor(Math.random() * chars.length)

        colourCode += chars.substring(randomNumber, randomNumber + 1)
    }

    return colourCode
}

generateColours()
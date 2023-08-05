const inputElem = document.querySelector(".input")
const bodyElem = document.querySelector("body")

inputElem.checked = JSON.parse(localStorage.getItem("mode"))

function updateBody(){
    if(inputElem.checked){
        bodyElem.style.backgroundColor = "black"
    }
    else{
        bodyElem.style.backgroundColor = "white"
    }
}

inputElem.addEventListener("click", () => {
    updateBody()
    updateLocalStorage()
})

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputElem.checked))
}
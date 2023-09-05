const btnElem = document.querySelector(".btn")
const closeIconElem = document.querySelector(".close-icon")
const trailerContainerElem = document.querySelector(".trailer-container")
const videoElem = document.querySelector("video")


btnElem.addEventListener("click", () => {
    trailerContainerElem.classList.remove("inactive")
})

closeIconElem.addEventListener("click", () => {
    trailerContainerElem.classList.add("inactive")

    videoElem.pause()
    videoElem.currentTime = 0
})
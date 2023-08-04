const closeIconElem = document.querySelector(".close-icon")
const containerElem = document.querySelector(".container")
const btnElem = document.querySelector(".btn")
const popupContainerElem = document.querySelector(".popup-container")


btnElem.addEventListener("click", () => {
    containerElem.classList.add("inactive")
    popupContainerElem.classList.remove("inactive")
})

closeIconElem.addEventListener("click", () => {
    containerElem.classList.remove("inactive")
    popupContainerElem.classList.add("inactive")
})


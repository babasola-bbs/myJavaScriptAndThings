const bodyElem = document.querySelector("body")

bodyElem.addEventListener("mousemove", (event) => {
    const xPosition = event.offsetX
    const yPosition = event.offsetY

    const spanElem = document.createElement("span")
    spanElem.style.left = xPosition + "px"
    spanElem.style.top = yPosition + "px"
    bodyElem.appendChild(spanElem)

    const size = Math.random() * 100
    spanElem.style.width = size + "px"
    spanElem.style.height = size + "px"


    setTimeout(() => {
        spanElem.remove()
    }, 2000)
})
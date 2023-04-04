const button = document.querySelector(".btn")

button.addEventListener("mouseover", (event) => {
    // console.log(event.pageY - button.offsetTop)
    // console.log(event.pageX - button.offsetLeft)

    const y = (event.pageY - button.offsetTop)
    const x = (event.pageX - button.offsetLeft)

    button.style.setProperty("--xPosition", x +"px")
    button.style.setProperty("--yPosition", y +"px")
})
const bgImageElem = document.getElementById("bg-image")

window.addEventListener("scroll", () => {
    updateImage()
})

function updateImage(){
    bgImageElem.style.opacity = 1 - window.pageYOffset/800

    bgImageElem.style.backgroundSize = 160 - window.pageYOffset/12 + "%"
}
const imageContainerElem = document.querySelector(".image-container")
const nextElem = document.querySelector(".next")
const prevElem = document.querySelector(".prev")
const allImages = document.querySelectorAll("img")


let currentImage = 1
let timeout;

nextElem.addEventListener("click", () => {

        currentImage++
        clearTimeout(timeout)
        updateImage()
})

prevElem.addEventListener("click", () => {

    currentImage--
    clearTimeout(timeout)
    updateImage()
})

updateImage()



function updateImage(str){
    if(currentImage > allImages.length){
        currentImage = 1
    }
    if(currentImage < 1){
        currentImage = allImages.length
    }

    imageContainerElem.style.transform = `translateX(-${(currentImage - 1) * 500}px)`

    timeout = setTimeout(() => {
        currentImage++
        updateImage()
    }, 3000)
}
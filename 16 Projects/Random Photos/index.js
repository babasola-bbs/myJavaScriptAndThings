const imageContainerElem = document.querySelector(".image-container")
const btnElem = document.querySelector(".btn")

btnElem.addEventListener("click", () => {
    imageNum = 5;
    addNewImages()
})

function addNewImages(){
    for(let i = 0; i < imageNum; i++){
        const newImageElem = document.createElement("img")

        newImageElem.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 2000)}`
    
        imageContainerElem.appendChild(newImageElem)
    }

}
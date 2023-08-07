const kits = ["Crash", "Kick", "Snare", "Tom"]
const containerElem = document.querySelector(".container")

kits.forEach((kit) => {
    const btnElem = document.createElement
    ("button")
    btnElem.style.backgroundImage = "url(images/" + kit.toLowerCase() + ".png)"
    btnElem.addEventListener("click", () => {
        audioElem.play()
        btnElem.style.transform = "scale(0.9)"
        setTimeout(() => {
            btnElem.style.transform = "scale(1.0)"
        }, 100)
    })

    const audioElem = document.createElement("audio")
    audioElem.src = "sounds/" + kit.toLowerCase() + ".mp3"

    btnElem.classList.add("btn")
    btnElem.innerText = kit

    containerElem.append(btnElem)
    containerElem.append(audioElem)

    window.addEventListener("keydown", (event) => {
        console.log(event.key)
        if((event.key).toUpperCase() === kit.slice(0, 1)){
            audioElem.play()
        }
    })
})
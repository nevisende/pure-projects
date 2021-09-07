const images = document.querySelectorAll('.image')

images.forEach(image=>{
    removePickedClasses()
    image.addEventListener('click',()=> {
        image.classList.add('picked')
    })
})

function removePickedClasses() {
    images.forEach(image=> {
        image.classList.remove('picked')
    })
}
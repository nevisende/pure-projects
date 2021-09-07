const images = document.querySelectorAll('.image')

images.forEach(image=>{
    clearAllPickedClassName()
    image.addEventListener('click',()=> {
        image.classList.add('picked')
    })
})

function clearAllPickedClassName() {
    images.forEach(image=> {
        image.classList.remove('picked')
    })
}
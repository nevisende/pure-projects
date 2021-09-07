const images = document.querySelectorAll('.image')

images.forEach(image=>{
    
    image.addEventListener('click',()=> {
        removePickedClasses()
        image.classList.add('picked')
    })
})

function removePickedClasses() {
    images.forEach(image=> {
        image.classList.remove('picked')
    })
}
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentStep = 1

next.addEventListener('click', () => {
    currentStep++ 
    if( currentStep > circles.length) {
        currentStep = circles.length
    }
    updateProgress()
})

prev.addEventListener('click', () => {
    currentStep-- 
    if( currentStep < 1) {
        currentStep = 1
    }

    updateProgress()
})

function updateProgress() {
    circles.forEach((circle, index) => {
        if(index < currentStep) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const activeSteps = document.querySelectorAll('.active')
    progress.style.width = (activeSteps.length-1)/(circles.length-1)*100+'%'
    
    if(currentStep === 1) {
        prev.disabled = true
    } else if (currentStep === 4) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
    
}
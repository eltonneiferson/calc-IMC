const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const resultIMC = document.querySelector('.modal-wrapper span')
const modalClose = document.querySelector('.modal-wrapper button.close')
const alertError = document.querySelector('.alert-error')

form.onsubmit = function calcIMC(submitForm) {
    submitForm.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const result = weight / ((height / 100) ** 2)

    modalWrapper.classList.add('modal-open')
    resultIMC.innerText = result.toFixed(2)
}

inputWeight.oninput = () => alertError.classList.remove('alert-open')
inputHeight.oninput = () => alertError.classList.remove('alert-open')

modalClose.onclick = () => {
    modalWrapper.classList.remove('modal-open')
    inputWeight.value = ''
    inputHeight.value = ''
}

window.addEventListener('keydown', buttonESC)

function buttonESC(pressESC) {
    if(pressESC.key === 'Escape') {
        modalClose.onclick() 
    }
}

inputWeight.addEventListener('keypress', function(pressKey) {
    console.log(pressKey.which)
    if(pressKey.which < 48 || pressKey.which > 57){
    pressKey.preventDefault()
    alertError.classList.add('alert-open')
    }
})

inputHeight.addEventListener('keypress', function(pressKey) {
    console.log(pressKey.which)
    if(pressKey.which < 48 || pressKey.which > 57){
    pressKey.preventDefault()
    alertError.classList.add('alert-open')
    }
})
let $ = (selector) => document.querySelector(selector)


// #################### IMAGEN ########################


let urlImgInput = $('#url-img-input')


// #################### TEXTO ########################

let topText = $('#top-text')
let topTextInput = $('#top-text-input')

let bottomText = $('#bottom-text')
let bottomTextInput = $('#bottom-text-input')

topTextInput.addEventListener('input', (event) => {
    topText.innerText = event.target.value
})

bottomTextInput.addEventListener('input', (event) =>{
    bottomText.innerText = event.target.value
})

// Alinear texto

let $textLeftAlignButtom = $ ("#text-left-align-button");
let $textCenterAlignButtom = $ ("#text-center-align-button");
let $textRightAlignButtom = $ ("#text-right-align-button")


$textLeftAlignButtom.addEventListener('click', () => {
    topText.style.textAlign='left'
    bottomText.style.textAlign='left'
})
$textCenterAlignButtom.addEventListener('click', () => {
    topText.style.textAlign='center'
    bottomText.style.textAlign='center'
})
$textRightAlignButtom.addEventListener('click', () => {
    topText.style.textAlign='right'
    bottomText.style.textAlign='right'
})

// Cambiar color texto

let textColorInput = $ ('#text-color-input')
let textBackgroundColorInput = $ ('#text-background-color-input')

let textColor = $('#text-color')
let textBackgroundColor = $('#text-background-color')

textColorInput.addEventListener('input', (event) => {
    topText.style.color = event.target.value;
    bottomText.style.color = event.target.value;

    textColor.innerText = event.target.value;
})

textBackgroundColorInput.addEventListener('input', (event) =>{

    textBackgroundColor.innerText = event.target.value;
})




let $ = (selector) => document.querySelector(selector)
let $$ = (selector) => document.querySelectorAll(selector)

// #################### IMAGEN ########################


let urlImgInput = $('#url-img-input')

//Insertar Imagen
$('#url-img-input').addEventListener('input', (event)=>{
    $('#image-meme').style.backgroundImage=`url("${event.target.value}")`;
})

//Cambiar color fondo
$('#background-meme-color-input').addEventListener('input', (event)=>{
    $('#image-meme').style.backgroundColor=event.target.value;
    $('#background-meme-color').innerText = event.target.value;
})

// -------------(FILTROS)-------------------

const reestablecerFiltros = () =>{
    $('#image-meme').style.filter = `brightness(0)`; 
    $('#image-meme').style.filter = `opacity(0)`;
    $('#image-meme').style.filter = `contrast(100%)`;
    $('#image-meme').style.filter = `blur(0px)`;
    $('#image-meme').style.filter = `grayscale(0%)`;
    $('#image-meme').style.filter = `sepia(0%)`;
    $('#image-meme').style.filter = `hue-rotate(0deg)`;
    $('#image-meme').style.filter = `saturate(100%)`;
    $('#image-meme').style.filter = `invert(0)`;

    $('#brillo-slider-input').value = 1; 
    $('#opacidad-slider-input').value = 1;
    $('#contraste-slider-input').value = 100;
    $('#desenfoque-slider-input').value = 0;
    $('#grises-slider-input').value = 0;
    $('#sepia-slider-input').value = 0;
    $('#hue-slider-input').value = 0;
    $('#saturado-slider-input').value = 100;
    $('#negativo-slider-input').value = 0;
}

//Brillo
$('#brillo-slider-input').addEventListener('input', (event)=>{
    $('#image-meme').style.filter = `brightness(${event.target.value})`;
})
//Opacidad
$('#opacidad-slider-input').addEventListener('input', (event)=>{
    $('#image-meme').style.filter = `opacity(${event.target.value})`;
})
//Contraste
$('#contraste-slider-input').addEventListener('input', (event)=>{
    $('#image-meme').style.filter = `contrast(${event.target.value}%)`;
})
//Desenfoque
$('#desenfoque-slider-input').addEventListener('input', (event)=>{
    $('#image-meme').style.filter = `blur(${event.target.value}px)`;
})
//Escala de grises
$('#grises-slider-input').addEventListener('input', (event)=>{
    $('#image-meme').style.filter = `grayscale(${event.target.value}%)`;
})
//Sepia
$('#sepia-slider-input').addEventListener('input', (event)=>{
    $('#image-meme').style.filter = `sepia(${event.target.value}%)`;
})
//Hue
$('#hue-slider-input').addEventListener('input', (event)=>{
    $('#image-meme').style.filter = `hue-rotate(${event.target.value}deg)`;
})
//Saturado
$('#saturado-slider-input').addEventListener('input', (event)=>{
    $('#image-meme').style.filter = `saturate(${event.target.value}%)`;
})
//Negativo
$('#negativo-slider-input').addEventListener('input', (event)=>{
    $('#image-meme').style.filter = `invert(${event.target.value})`;
})

//Reestablecer filtros
$('#default-filters-button').addEventListener('click', reestablecerFiltros)


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
    $('#top-text').style.color = event.target.value;
    $('#bottom-text').style.color = event.target.value;

    textColor.innerText = event.target.value;
})

textBackgroundColorInput.addEventListener('input', (event) =>{
    $('#top-text').style.backgroundColor = event.target.value;
    $('#bottom-text').style.backgroundColor = event.target.value;

    textBackgroundColor.innerText = event.target.value;
})

//Cambiar tamaño texto

$("#text-size-input").addEventListener('input',(event)=>{
    $('#top-text').style.fontSize=`${event.target.value}px`;
    $('#bottom-text').style.fontSize=`${event.target.value}px`;
})




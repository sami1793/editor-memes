let $ = (selector) => document.querySelector(selector)
let $$ = (selector) => document.querySelectorAll(selector)

// ####################### [ IMAGEN ] ###############################


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

const ActualizarFiltros = () =>{
    let brillo = $('#brillo-slider-input').value; 
    let opacidad = $('#opacidad-slider-input').value;
    let contraste = $('#contraste-slider-input').value;
    let desenfoque = $('#desenfoque-slider-input').value;
    let grises = $('#grises-slider-input').value;
    let sepia = $('#sepia-slider-input').value;
    let hue = $('#hue-slider-input').value;
    let saturado = $('#saturado-slider-input').value;
    let negativo = $('#negativo-slider-input').value;

    $('#image-meme').style.filter = `brightness(${brillo}) opacity(${opacidad}) contrast(${contraste}%)
    blur(${desenfoque}px) grayscale(${grises}%) sepia(${sepia}%) hue-rotate(${hue}deg)
    saturate(${saturado}%) invert(${negativo})`;
}

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
    ActualizarFiltros();
})
//Opacidad
$('#opacidad-slider-input').addEventListener('input', (event)=>{
    ActualizarFiltros();
})
//Contraste
$('#contraste-slider-input').addEventListener('input', (event)=>{
    ActualizarFiltros();
})
//Desenfoque
$('#desenfoque-slider-input').addEventListener('input', (event)=>{
    ActualizarFiltros();
})
//Escala de grises
$('#grises-slider-input').addEventListener('input', (event)=>{
    ActualizarFiltros();
})
//Sepia
$('#sepia-slider-input').addEventListener('input', (event)=>{
    ActualizarFiltros();
})
//Hue
$('#hue-slider-input').addEventListener('input', (event)=>{
    ActualizarFiltros();
})
//Saturado
$('#saturado-slider-input').addEventListener('input', (event)=>{
    ActualizarFiltros();
})
//Negativo
$('#negativo-slider-input').addEventListener('input', (event)=>{
    ActualizarFiltros();
})

//----Reestablecer filtros-----
$('#default-filters-button').addEventListener('click', reestablecerFiltros)


// #################### TEXTO ########################

//Actializa texto superior
$('#top-text-input').addEventListener('input', (event) => {
    $('#top-text').innerText = event.target.value
})

//Actualiza texto inferior
$('#bottom-text-input').addEventListener('input', (event) =>{
    $('#bottom-text').innerText = event.target.value
})

//Eliminar texto superior
$('#no-top-text-checkbox').addEventListener('input', (event)=>{
    if($('#no-top-text-checkbox').checked){
        console.log(event);
        $('#top-text').classList.add('ocultar')
    }
    else{
        $('#top-text').classList.remove('ocultar')
    }
})

//Eliminar texto inferior
$('#no-bottom-text-checkbox').addEventListener('input', (event)=>{
    if($('#no-bottom-text-checkbox').checked){
        console.log(event);
        $('#bottom-text').classList.add('ocultar')
    }
    else{
        $('#bottom-text').classList.remove('ocultar')
    }
})


// Alinear texto
$("#text-left-align-button").addEventListener('click', () => {
    $('#top-text').style.textAlign='left'
    $('#bottom-text').style.textAlign='left'
})
$("#text-center-align-button").addEventListener('click', () => {
    $('#top-text').style.textAlign='center'
    $('#bottom-text').style.textAlign='center'
})
$("#text-right-align-button").addEventListener('click', () => {
    $('#top-text').style.textAlign='right'
    $('#bottom-text').style.textAlign='right'
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




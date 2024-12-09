export default function testimonialSlider(){
    const sliders = [...document.querySelectorAll('.testimonial-text')]; //al principio es una lista de nodos, se encierra en corchetes y agregamos tres puntos para convertirlo en un array
    //console.log(sliders)

    //obtener iconos de las flechas
    const $arrowNext = document.getElementById('next');
    const $arrowPreview = document.getElementById('preview');
    let value;

    //evetos al hacer click en las flechas
    $arrowNext.addEventListener('click', () => changePosition(1));
    $arrowPreview.addEventListener('click', () => changePosition(-1));

    
    function changePosition(change){
        //console.log(change)
        const currentElement = Number(document.querySelector('.slider-show').dataset.id);
        value = currentElement;
        value += change; //sumará o restará el valor del dataset
        console.log(value);
        if(value === 0 || value === sliders.length + 1){ //+ 1 porque se cuenta desde 0
            value = value === 0 ? sliders.length : 1;
        }
        sliders[currentElement - 1].classList.toggle('slider-show');
        sliders[value - 1].classList.toggle('slider-show'); //si el elemento tiene la clase, se la quita, sino, se la agrega.

    }
}
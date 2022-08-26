// BULB BUTTON

const btn = document.getElementById('bulb-button');
const bulb = document.getElementById('bulb')

btn.addEventListener('click', changeColor)

function changeColor() {
presentColor = bulb.style.color

    if (presentColor === 'rgb(255, 252, 87)') {
        bulb.style.color = "unset"
        console.log(presentColor)
    } else {
        bulb.style.color = "rgb(255, 252, 87)"
        console.log(presentColor)
    }
}

// ENGLISH BUTTON

const btn_eng = document.getElementById('english-button');
let counter = 0

btn_eng.addEventListener('click', changeText)

function changeText () {
    switch (counter){
        case 0:
            btn_eng.innerHTML = "Really?"
            counter++
            break;
        case 1:
            btn_eng.innerHTML = "Yes!"
            counter++
            break;
        case 2:
            btn_eng.innerHTML = "Top notch"
            counter++
            break;
        case 3:
            btn_eng.innerHTML = "C2 English Level"
            counter++
            break;
        default:
    }
}

// CREATIVE BUTTON
const btn_crea = document.getElementById('creative-button');

btn_crea.addEventListener('click', changeCreativeText)

function changeCreativeText () {
    btn_crea.innerHTML = "Creative+"
}
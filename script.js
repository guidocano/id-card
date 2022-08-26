// BULB BUTTON

const btn = document.getElementById('bulb-button');
const bulb = document.getElementById('bulb')

btn.addEventListener('click', changeColor)

function changeColor() {
presentColor = bulb.style.color

    if (presentColor === 'rgb(255, 252, 87)') {
        bulb.style.color = "unset"
    } else {
        bulb.style.color = "rgb(255, 252, 87)"
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
            btn_eng.innerHTML = "C2 English Level"
            counter++
            break;
        default:
    }
}

// CREATIVE BUTTON
const btn_crea = document.getElementById('creative-button');
const btn_inno_text = document.getElementById('bulb-button-text');
const btn_web_dev = document.getElementById('web-dev');
const title = document.getElementById('title')
const cat = document.getElementById('cat-loader')
let counter_creative = 0

btn_crea.addEventListener('click', changeCreativeText)

function changeCreativeText () {


    switch (counter_creative){
        case 0:
            btn_crea.innerHTML = "Loading ░░░░░0%"
            // btn_inno_text.innerText = ""
            // btn_web_dev.innerText = ""
            counter_creative++
            break;
        case 1:
            btn_crea.innerHTML = "Loading ▓░░░░20%"
            counter_creative++
            break;
        case 2:
            btn_crea.innerHTML = "Loading ▓▓░░░40%"
            counter_creative++
            break;
        case 3:
            btn_crea.innerHTML = "Loading ▓▓▓░░60%"
            counter_creative++
            break;
        case 4:
            btn_crea.innerHTML = "Loading ▓▓▓▓░80%"
            counter_creative++
            break;
        case 5:
            btn_crea.innerHTML = "Loading ▓▓▓▓▓100%"
            counter_creative++
            break;
        case 6:
            btn_crea.innerHTML = "Done!"
            counter_creative++
            break;
        case 7:
            btn_crea.innerHTML = "Cat Loaded."
            cat.innerHTML = `<i class="fa-solid fa-cat cat"></i>`
            counter_creative++
            break;
        case 8:
            btn_crea.innerHTML = "Creative."
            counter_creative++
            break;
        case 9:
            btn_crea.innerHTML = "Again?"
            counter_creative++
            break;    
        case 10:
            btn_crea.innerHTML = "Ok here we go."
            counter_creative++
            break;    
        case 11:
            btn_crea.innerHTML = "Cat Loaded."
            cat.innerHTML += `<i class="fa-solid fa-cat cat"></i>`
            counter_creative++
            break;
        case 12:
            btn_crea.innerHTML = "Creative."
            counter_creative++
            break;
        case 13:
            btn_crea.innerHTML = "Really?"
            counter_creative++
            break;    
        case 14:
            btn_crea.innerHTML = "Cat Loaded."
            cat.innerHTML += `<i class="fa-solid fa-cat cat"></i>`
            counter_creative++
            break;
        case 15:
            btn_crea.innerHTML = "One more?"
            counter_creative++
            break;
        case 16:
            btn_crea.innerHTML = "Cat Loaded."
            cat.innerHTML += `<i class="fa-solid fa-cat cat"></i>`
            counter_creative=16
            break;
            break;
        default:
    }
}
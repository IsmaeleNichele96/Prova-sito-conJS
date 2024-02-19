// Cattura Elementi html

let nav = document.querySelector("#nav");
let scrollLink = document.querySelectorAll(".scroll-link");
let logo = document.querySelector("#logo");

// Chiamate asincrone
let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let thirdNumber = document.querySelector("#thirdNumber");
//Fine chiamate asincrone


window.addEventListener("scroll", () => {
    let scrolled = window.scrollY;

    if (scrolled > 10) {
        nav.classList.add("nav-custom2");
        changeNav("nav-b", "rgb(250, 237, 205)")

    } else {
        nav.classList.remove("nav-custom2");
        changeNav("nav-br", "rgb(212, 163, 115)")
    }
})

// funzione che cambia link,logo,bg alla NAV
function changeNav(imgLogo, color) {

    logo.src = `http://127.0.0.1:5500/Media/${imgLogo}.png`
    scrollLink.forEach((link) => {
        link.style.color = color

    })
}

// Chiamate asincrone: Sono delle funzioni che partono fuori tempo, attendono che parta tutto ciò che è nel sito (tt html, tt css, tt js) e poi alla fine parte la chiamata asincrona.

// setInterval(); è una chiamata asincrona che crea dei loop infiniti. Necessita di callBack Sono dei loop infiniti particolare xk non bloccano il sito

//clearInterval(); è una chiamata asincrona che serve per bloccare un set interval, ha bisogno di un parametro che rappresenti lì'intervallo stesso

function createInterval(number, element, timing) {
    let counter = 0
    let interval = setInterval(() => {

        if (counter < number) {
            counter++
            element.innerHTML = counter
        } else {
            clearInterval(interval)
        }
    }, timing)
}


// IntersectionObserver()

let checked = false;

let observ = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && checked == false) {
            createInterval(250, firstNumber, 15)  //queste fanno partire la funzione createInterval, solo quando scrolliamo e le troviamo
            createInterval(300, secondNumber, 13)
            createInterval(1000, thirdNumber, 1)

            checked = true;
        }
    })
})

observ.observe(firstNumber);  //parte quando trova first number


// swiper js

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // slider coverflow
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: false,  // con valore true crea purtroppo un'ombra dietro le card, cambiamo con false
    },

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let swiperWrapper = document.querySelector(".swiper-wrapper");

let recensioni = [
    { image: "https://picsum.photos/300", nome: "Angelo", descrizione: "Questo sito nonmi fa dormire la notte perchè ne sono dipendente" },
    { image: "https://picsum.photos/301", nome: "Ismaele", descrizione: "Questo sito è bellissimo" },
    { image: "https://picsum.photos/302", nome: "Antonino", descrizione: "Questo sito non vedo l'ora di copiarlo" },
    { image: "https://picsum.photos/303", nome: "Roberto", descrizione: "Questo sito mi fa impazzire" },
    { image: "https://picsum.photos/304", nome: "Alfion", descrizione: "Questo sito fa mille peripezzie" },
    { image: "https://picsum.photos/305", nome: "Nunzia", descrizione: "Questo sito è imbarazzante" },
    { image: "https://picsum.photos/306", nome: "Luca", descrizione: "Questo sito è squisito" },
    { image: "https://picsum.photos/307", nome: "Paolo", descrizione: "Questo sito è un sito così così" }
]

recensioni.forEach((recensione) => {
    let div = document.createElement("div");  // per creare un div con la manipolazione del DOM (li crea automaticamente js)
    div.classList.add("swiper-slide")  //per aggiungere una classe a una variabile
    div.innerHTML = //per incollare la card che abbiamo creato in html 
        `  
    <div class="d-flex justify-content-center">
        <div class="card card-custom">
            <img src=${recensione.image} class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title txt-br">${recensione.nome}</h5>
                <p class="card-text ">${recensione.descrizione}</p>
            </div>
        </div>
    </div>`

    swiperWrapper.appendChild(div);
})
//fine swiper js



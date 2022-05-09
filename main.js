// quando clicco sul menù ad hamburger esso passa a display block
    // utilizzare la funzione js che crea un evento quando clicchi su qualcosa
    // collegare all'evento la sovrascrizione del display none del div class hamburger-menu con display block

// quando clicco sulla x dell'hamburger menù esso si chiude
    // utilizzare la funzione js che crea un evento quando clicchi su qualcosa
    // collegare all'evento la sovrascrizione del display block del div class hamburger-menu con display none

// quando sono dentro l'ham menù e si allarga la pagina deve tornare a display none


const bars = document.querySelector (".header-right > a");
console.log(bars);

// const hamburger = document.querySelector(".hamburger-menu");
// console.log(hamburger);

const cross = document.querySelector(".close > i");
console.log(cross);

bars.addEventListener("click",

    function() {
        document.querySelector(".hamburger-menu").className = "hamburger-menu active";
    }
);

cross.addEventListener("click",

    function() {

        document.querySelector(".hamburger-menu").className = "hamburger-menu";
    }
);

// bars.addEventListener("click",

//     function() {

//         hamburger.style.display = "block";
//     }
// );

// cross.addEventListener("click",

//     function() {

//         hamburger.style.display = "none";
//     }
// );


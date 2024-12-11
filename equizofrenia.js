function pipe() {
    let pipe = document.getElementById("pipe");

    // GAMBLING
    /*
    gambling();
*/
    pipe.volume = 1;
    if (pipe.paused) {
        pipe.play();
    } else {
        pipe.currentTime = 0;
    }
}
function gambling(min,max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function zonaequizofrenica() {
    let header = document.getElementById("header");
    let main = document.getElementById("main");
    let footer = document.getElementById("footer");
    let contenedorderecha = document.getElementById("contenedor-derecha");
    let texto = document.getElementsByClassName("texto")

    header.style.backgroundColor = 'rgba('+gambling(0,255)+', '+gambling(0,255)+', '+gambling(0,255)+')';
    main.style.backgroundColor = 'rgba('+gambling(0,255)+', '+gambling(0,255)+', '+gambling(0,255)+')';
    footer.style.backgroundColor = 'rgba('+gambling(0,255)+', '+gambling(0,255)+', '+gambling(0,255)+')';
    contenedorderecha.style.backgroundColor = 'rgba('+gambling(0,255)+', '+gambling(0,255)+', '+gambling(0,255)+')';
    Array.from(texto).forEach((elemento) => {
        elemento.style.color = 'rgba('+gambling(0,255)+', '+gambling(0,255)+', '+gambling(0,255)+')';
    });
    
}

let boton = document.getElementById("boton-esquizofrenico");
let equizofrenia = sessionStorage.getItem("equizofrenia");
let contador = sessionStorage.getItem("contador");

//boton.addEventListener("click",cambiaColor())
//boton.onclick = cambiaColor();

try {
    boton.addEventListener("click", (event) => {
        if (contador % 2 == 0) {
            sessionStorage.setItem("equizofrenia", "false");
            console.log(2);
            sessionStorage.setItem("contador","1");
        } else {
            sessionStorage.setItem("equizofrenia", "true");
            console.log(1);
            sessionStorage.setItem("contador","2");
        }
        location.reload();
    });
} catch (error) {

}

console.log(equizofrenia);
if (equizofrenia == "true") {
    console.log(3);
    let metalpipe = document.createElement("audio");
    metalpipe.id = "pipe";
    metalpipe.src = "/audio/metalpipe.mp3";
    metalpipe.preload = "auto";

    document.body.appendChild(metalpipe);

    document.body.onclick = function () { pipe(); };
    document.body.onwheel = function () { pipe(); };
    document.body.onfocus = function () { pipe(); };
    document.body.onkeydown = function () { pipe(); };
    document.body.onvolumechange = function () { pipe(); };

    /*
    document.body.onclick = function () { zonaequizofrenica(); };
    document.body.onwheel = function () { zonaequizofrenica(); };
    document.body.onfocus = function () { zonaequizofrenica(); };
    document.body.onkeydown = function () { zonaequizofrenica(); };
    document.body.onvolumechange = function () { zonaequizofrenica(); };
    */
    
    setInterval(zonaequizofrenica,1500);
    
} else {
    document.body.onclick = function () { };
    document.body.onwheel = function () { };
    document.body.onfocus = function () { };
    document.body.onkeydown = function () { };
    document.body.onvolumechange = function () { };
}

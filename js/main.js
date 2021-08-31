/* TOGGLE NAVBAR CONTACT */
const navToggler = document.querySelector(".contact");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function(e){
    if(e.target.closest(".close")){
        toggleNav();
    }
});

/* boton home */
const navToggler5 = document.querySelector(".contactr");
navToggler5.addEventListener("click", toggleNav5);

function toggleNav5(){
    navToggler5.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}

/* boton servicios 1*/
const navToggler6 = document.querySelector(".contacty");
navToggler6.addEventListener("click", toggleNav5);

function toggleNav6(){
    navToggler6.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}

/* boton servicios 2*/
const navToggler7 = document.querySelector(".contactu");
navToggler7.addEventListener("click", toggleNav7);

function toggleNav7(){
    navToggler7.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}

/* boton servicios 3*/
const navToggler8 = document.querySelector(".contacti");
navToggler8.addEventListener("click", toggleNav8);

function toggleNav8(){
    navToggler8.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}

/* boton servicios movil1*/
const navToggler9 = document.querySelector(".contacta");
navToggler9.addEventListener("click", toggleNav8);

function toggleNav9(){
    navToggler9.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}

/* boton servicios movil2*/
const navToggler10 = document.querySelector(".contactw");
navToggler10.addEventListener("click", toggleNav8);

function toggleNav10(){
    navToggler10.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}

/* boton servicios movil3*/
const navToggler11 = document.querySelector(".contactn");
navToggler11.addEventListener("click", toggleNav8);

function toggleNav11(){
    navToggler11.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}

/* boton servicios movil4*/
const navToggler12 = document.querySelector(".contactp");
navToggler12.addEventListener("click", toggleNav8);

function toggleNav12(){
    navToggler12.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}

/* boton servicios menu movil*/
const navToggler13 = document.querySelector(".contactm");
navToggler13.addEventListener("click", toggleNav8);

function toggleNav13(){
    navToggler13.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}

/* boton branding menu movil*/
const navToggler14 = document.querySelector(".contactz");
navToggler14.addEventListener("click", toggleNav8);

function toggleNav14(){
    navToggler13.classList.toggle("active");
    document.querySelector(".contacto").classList.toggle("open");
}



/* TOGGLE NAVBAR BRANDING*/
const navToggler1 = document.querySelector(".branss");
navToggler1.addEventListener("click", toggleNav1);

function toggleNav1(){
    navToggler1.classList.toggle("active");
    document.querySelector(".pagebranding").classList.toggle("open");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function(e){
    if(e.target.closest(".closebran")){
        toggleNav1();
    }
});

/* TOGGLE NAVBAR BRANDING*/
const navToggler2 = document.querySelector(".bransss");
navToggler2.addEventListener("click", toggleNav2);

function toggleNav2(){
    navToggler2.classList.toggle("active");
    document.querySelector(".ux-ui-design").classList.toggle("open");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function(e){
    if(e.target.closest(".closebrann")){
        toggleNav2();
    }
});

/* TOGGLE NAVBAR BRANDING*/
const navToggler3 = document.querySelector(".branssss");
navToggler3.addEventListener("click", toggleNav3);

function toggleNav3(){
    navToggler3.classList.toggle("active");
    document.querySelector(".creationpage").classList.toggle("open");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function(e){
    if(e.target.closest(".closebrannn")){
        toggleNav3();
    }
});

/* MODO OSCURO */

const switchButton = document.getElementById("switch");
const nerdrojo = document.getElementById("nerdrojo");
const nerdazul = document.getElementById("nerdazul");
const nerdrojoq = document.getElementById("nerdrojoq");
const nerdazulq = document.getElementById("nerdazulq");
const nerdrojoe = document.getElementById("nerdrojoe");
const nerdazule = document.getElementById("nerdazule");
const nerdrojow = document.getElementById("nerdrojow");
const nerdazulw = document.getElementById("nerdazulw");
const nerdrojot = document.getElementById("nerdrojot");
const nerdazult = document.getElementById("nerdazult");
const nerdrojoy = document.getElementById("nerdrojoy");
const nerdazuly = document.getElementById("nerdazuly");
const nerdrojoh = document.getElementById("nerdrojoh");
const nerdazulh = document.getElementById("nerdazulh");
const nerdrojom = document.getElementById("nerdrojom");
const nerdazulm = document.getElementById("nerdazulm");
const nerdrojob = document.getElementById("nerdrojob");
const nerdazulb = document.getElementById("nerdazulb");
const nerdrojov = document.getElementById("nerdrojov");
const nerdazulv = document.getElementById("nerdazulv");
const nerdrojos = document.getElementById("nerdrojos");
const nerdazuls = document.getElementById("nerdazuls");
const nerdrojof = document.getElementById("nerdrojof");
const nerdazulf = document.getElementById("nerdazulf");
const nerdrojop = document.getElementById("nerdrojop");
const nerdazulp = document.getElementById("nerdazulp");
const nerdrojod = document.getElementById("nerdrojod");
const nerdazuld = document.getElementById("nerdazuld");
const nerdrojog = document.getElementById("nerdrojog");
const nerdazulg = document.getElementById("nerdazulg");
const nerdrojoj = document.getElementById("nerdrojoj");
const nerdazulj = document.getElementById("nerdazulj");
const nerdrojoc = document.getElementById("nerdrojoc");
const nerdazulc = document.getElementById("nerdazulc");
const nerdrojoz = document.getElementById("nerdrojoz");
const nerdazulz = document.getElementById("nerdazulz");
const nerdrojoi = document.getElementById("nerdrojoi");
const nerdazuli = document.getElementById("nerdazuli");
const nerdrojoa = document.getElementById("nerdrojoa");
const nerdazula = document.getElementById("nerdazula");
const nerdrojobb = document.getElementById("nerdrojobb");
const nerdazulbb = document.getElementById("nerdazulbb");
const nerdrojocc = document.getElementById("nerdrojocc");
const nerdazulcc = document.getElementById("nerdazulcc");
const nerdrojodd = document.getElementById("nerdrojodd");
const nerdazuldd = document.getElementById("nerdazuldd");
const nerdrojoee = document.getElementById("nerdrojoee");
const nerdazulee = document.getElementById("nerdazulee");
const nerdrojoff = document.getElementById("nerdrojoff");
const nerdazulff = document.getElementById("nerdazulff");
const nerdrojogg = document.getElementById("nerdrojogg");
const nerdazulgg = document.getElementById("nerdazulgg");
const nerdrojohh = document.getElementById("nerdrojohh");
const nerdazulhh = document.getElementById("nerdazulhh");
const nerdrojoii = document.getElementById("nerdrojoii");
const nerdazulii = document.getElementById("nerdazulii");
const nerdrojojj = document.getElementById("nerdrojojj");
const nerdazuljj = document.getElementById("nerdazuljj");
const nerdrojokk = document.getElementById("nerdrojokk");
const nerdazulkk = document.getElementById("nerdazulkk");
const nerdrojomm = document.getElementById("nerdrojomm");
const nerdazulmm = document.getElementById("nerdazulmm");
const nerdrojonn = document.getElementById("nerdrojonn");
const nerdazulnn = document.getElementById("nerdazulnn");
const nerdrojooo = document.getElementById("nerdrojooo");
const nerdazuloo = document.getElementById("nerdazuloo");
const nerdrojopp = document.getElementById("nerdrojopp");
const nerdazulpp = document.getElementById("nerdazulpp");
const nerdrojoqq = document.getElementById("nerdrojoqq");
const nerdazulqq = document.getElementById("nerdazulqq");
const nerdrojorr = document.getElementById("nerdrojorr");
const nerdazulrr = document.getElementById("nerdazulrr");
switchButton.addEventListener("click", ()=> {
    document.body.classList.toggle('dark-theme');
    nerdrojo.classList.toggle('nerdrojoo');
    nerdrojo.classList.toggle('nerdrojo');
    nerdrojoq.classList.toggle('nerdrojoo');
    nerdrojoq.classList.toggle('nerdrojo');
    nerdrojoe.classList.toggle('nerdrojoo');
    nerdrojoe.classList.toggle('nerdrojo');
    nerdrojow.classList.toggle('nerdrojoo');
    nerdrojow.classList.toggle('nerdrojo');
    nerdrojot.classList.toggle('nerdrojoo');
    nerdrojot.classList.toggle('nerdrojo');
    nerdrojoy.classList.toggle('nerdrojoo');
    nerdrojoy.classList.toggle('nerdrojo');
    nerdrojoh.classList.toggle('nerdrojoo');
    nerdrojoh.classList.toggle('nerdrojo');
    nerdrojom.classList.toggle('nerdrojoo');
    nerdrojom.classList.toggle('nerdrojo');
    nerdrojob.classList.toggle('nerdrojoo');
    nerdrojob.classList.toggle('nerdrojo');
    nerdrojov.classList.toggle('nerdrojoo');
    nerdrojov.classList.toggle('nerdrojo');
    nerdrojos.classList.toggle('nerdrojoo');
    nerdrojos.classList.toggle('nerdrojo');
    nerdrojof.classList.toggle('nerdrojoo');
    nerdrojof.classList.toggle('nerdrojo');
    nerdrojop.classList.toggle('nerdrojoo');
    nerdrojop.classList.toggle('nerdrojo');
    nerdrojod.classList.toggle('nerdrojoo');
    nerdrojod.classList.toggle('nerdrojo');
    nerdrojog.classList.toggle('nerdrojoo');
    nerdrojog.classList.toggle('nerdrojo');
    nerdrojoj.classList.toggle('nerdrojoo');
    nerdrojoj.classList.toggle('nerdrojo');
    nerdrojoc.classList.toggle('nerdrojoo');
    nerdrojoc.classList.toggle('nerdrojo');
    nerdrojoz.classList.toggle('nerdrojoo');
    nerdrojoz.classList.toggle('nerdrojo');
    nerdrojoi.classList.toggle('nerdrojoo');
    nerdrojoi.classList.toggle('nerdrojo');
    nerdrojoa.classList.toggle('nerdrojoo');
    nerdrojoa.classList.toggle('nerdrojo');
    nerdrojobb.classList.toggle('nerdrojoo');
    nerdrojobb.classList.toggle('nerdrojo');
    nerdrojocc.classList.toggle('nerdrojoo');
    nerdrojocc.classList.toggle('nerdrojo');
    nerdrojodd.classList.toggle('nerdrojoo');
    nerdrojodd.classList.toggle('nerdrojo');
    nerdrojoee.classList.toggle('nerdrojoo');
    nerdrojoee.classList.toggle('nerdrojo');
    nerdrojoff.classList.toggle('nerdrojoo');
    nerdrojoff.classList.toggle('nerdrojo');
    nerdrojogg.classList.toggle('nerdrojoo');
    nerdrojogg.classList.toggle('nerdrojo');
    nerdrojohh.classList.toggle('nerdrojoo');
    nerdrojohh.classList.toggle('nerdrojo');
    nerdrojoii.classList.toggle('nerdrojoo');
    nerdrojoii.classList.toggle('nerdrojo');
    nerdrojojj.classList.toggle('nerdrojoo');
    nerdrojojj.classList.toggle('nerdrojo');
    nerdrojokk.classList.toggle('nerdrojoo');
    nerdrojokk.classList.toggle('nerdrojo');
    nerdrojomm.classList.toggle('nerdrojoo');
    nerdrojomm.classList.toggle('nerdrojo');
    nerdrojonn.classList.toggle('nerdrojoo');
    nerdrojonn.classList.toggle('nerdrojo');
    nerdrojooo.classList.toggle('nerdrojoo');
    nerdrojooo.classList.toggle('nerdrojo');
    nerdrojopp.classList.toggle('nerdrojoo');
    nerdrojopp.classList.toggle('nerdrojo');
    nerdrojoqq.classList.toggle('nerdrojoo');
    nerdrojoqq.classList.toggle('nerdrojo');
    nerdrojorr.classList.toggle('nerdrojoo');
    nerdrojorr.classList.toggle('nerdrojo');
    switchButton.classList.toggle('darkcambio');
    switchButton.classList.toggle('activado');
    nerdazul.classList.toggle('nerdazull');
    nerdazulq.classList.toggle('nerdazull');
    nerdazule.classList.toggle('nerdazull');
    nerdazulw.classList.toggle('nerdazull');
    nerdazult.classList.toggle('nerdazull');
    nerdazuly.classList.toggle('nerdazull');
    nerdazulh.classList.toggle('nerdazull');
    nerdazulm.classList.toggle('nerdazull');
    nerdazulb.classList.toggle('nerdazull');
    nerdazulv.classList.toggle('nerdazull');
    nerdazuls.classList.toggle('nerdazull');
    nerdazulf.classList.toggle('nerdazull');
    nerdazulp.classList.toggle('nerdazull');
    nerdazuld.classList.toggle('nerdazull');
    nerdazulg.classList.toggle('nerdazull');
    nerdazulj.classList.toggle('nerdazull');
    nerdazulc.classList.toggle('nerdazull');
    nerdazulz.classList.toggle('nerdazull');
    nerdazuli.classList.toggle('nerdazull');
    nerdazula.classList.toggle('nerdazull');
    nerdazulbb.classList.toggle('nerdazull');
    nerdazulcc.classList.toggle('nerdazull');
    nerdazuldd.classList.toggle('nerdazull');
    nerdazulee.classList.toggle('nerdazull');
    nerdazulff.classList.toggle('nerdazull');
    nerdazulgg.classList.toggle('nerdazull');
    nerdazulhh.classList.toggle('nerdazull');
    nerdazulii.classList.toggle('nerdazull');
    nerdazuljj.classList.toggle('nerdazull');
    nerdazulkk.classList.toggle('nerdazull');
    nerdazulmm.classList.toggle('nerdazull');
    nerdazulnn.classList.toggle('nerdazull');
    nerdazuloo.classList.toggle('nerdazull');
    nerdazulpp.classList.toggle('nerdazull');
    nerdazulqq.classList.toggle('nerdazull');
    nerdazulrr.classList.toggle('nerdazull');
})


// /* TOGGLE NAVBAR BRANDING*/
// const navToggler4 = document.querySelector(".bransssss");
// navToggler4.addEventListener("click", toggleNav4);

// function toggleNav4(){
//     navToggler4.classList.toggle("active");
//     document.querySelector(".thanks").classList.toggle("open");
// }

// /* close nav when clicking on a nav item */
// document.addEventListener("click", function(e){
//     if(e.target.closest(".closebrannnn")){
//         toggleNav4();
//     }
// });


/* Menuu movil */
let boton = document.getElementById("iconomenu");
let boton1 = document.getElementById("asd");
let boton2 = document.getElementById("work");
let boton3 = document.getElementById("whatwedo");
let boton4 = document.getElementById("about");
let boton5 = document.getElementById("contact");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})

boton1.addEventListener("click",function(){
    enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
})
boton2.addEventListener("click",function(){
    enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
})
boton3.addEventListener("click",function(){
    enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
})
boton4.addEventListener("click",function(){
    enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
})
boton5.addEventListener("click",function(){
    enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
})


window.addEventListener("scroll",function(){
    if(this.pageYOffset > 60){
        document.querySelector(".iconomenu").classList.add("sticky");
    }
    else{
        document.querySelector(".iconomenu").classList.remove("sticky");
    }
});

// /* Tema oscuro / claro (rojo/azul) */
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bx-toggle-right'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//   themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })


// window.addEventListener('resize', function(){
//     if(screen.width > 750){
//         contador=0;
//         enlaces.classList.remove('dos');
//         enlaces.className = ('enlaces uno');

//     }
// })

// window.addEventListener('click',function(e){
//     console.log(e.target);
//     if(cerrado==false){
//         let span = document.querySelector('.links-header');
//         if(e.target == span){
//             contador=0;
//         }
//     }
// });
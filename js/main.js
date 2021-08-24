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

// /* Botonstart1 */

// const navToggler5 = document.querySelector(".contact");
// navToggler.addEventListener("click", toggleNav);

// function toggleNav(){
//     navToggler.classList.toggle("active");
//     document.querySelector(".contacto").classList.toggle("open");
// }

// /* close nav when clicking on a nav item */
// document.addEventListener("click", function(e){
//     if(e.target.closest(".close")){
//         toggleNav();
//     }
// });

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


/* TOGGLE NAVBAR BRANDING*/
const navToggler4 = document.querySelector(".bransssss");
navToggler4.addEventListener("click", toggleNav4);

function toggleNav4(){
    navToggler4.classList.toggle("active");
    document.querySelector(".thanks").classList.toggle("open");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function(e){
    if(e.target.closest(".closebrannnn")){
        toggleNav4();
    }
});


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
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

const navBar = document.querySelector(".nav-bars");
navBar.addEventListener("click", navToggler);

function navToggler (){
    navBar.classList.toggle("active");
    const nav = document.querySelector(".mid-nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px"
    }
    else {
        nav.removeAttribute("style");
    }
}
console.log('Making a sticky Navbar');

let navbar = document.getElementById('main');
let topNav = navbar.offsetTop;

function fixNav(){
    if(window.scrollY >= topNav){
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = navbar.offsetHeight + "px";
    }
    else{
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll',fixNav);
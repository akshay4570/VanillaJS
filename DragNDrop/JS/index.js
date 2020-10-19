let triggers = document.querySelectorAll('.cool > li');
let background = document.querySelector('.dropdownBackground');
let nav = document.querySelector('.top');

function handleEnter(){
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if(this.classList.contains('trigger-enter'))
            this.classList.add('trigger-enter-active')
    },150);
    background.classList.add('open');

    let dropdown = this.querySelector('.dropdown');
    let dropdownCords = dropdown.getBoundingClientRect();
    let navCords = nav.getBoundingClientRect();

    let cords = {
        width : dropdownCords.width,
        height : dropdownCords.height,
        top : dropdownCords.top - navCords.top,
        left : dropdownCords.left - navCords.left
    }

    background.style.setProperty('width', `${cords.width}px`);
    background.style.setProperty('height', `${cords.height}px`);
    background.style.setProperty('top', `${cords.top}px`);
    background.style.setProperty('left', `${cords.left}px`);
}

function handleLeave(){
    this.classList.remove('trigger-enter','trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));
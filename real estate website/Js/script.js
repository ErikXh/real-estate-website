
const openMenuBtn = document.getElementById('open-btn');
const menu = document.querySelector(".nav-hidden");
const closeMenuBtn = document.querySelector('.close-btn');

openMenuBtn.addEventListener('click', ()=>{

    if(menu.classList.contains('nav-hidden')){
        menu.classList.add('nav-show')
    }
})

closeMenuBtn.addEventListener('click', ()=>{

    if(menu.classList.contains('nav-hidden')){
        menu.classList.remove('nav-show')
    }
})

// change color nav when scrolling

function changeColorNav(){

    const colorNav = document.getElementById('nav');

    if(scrollY >= 50){ 
        colorNav.classList.remove('color-nav_transparent')
        colorNav.classList.add('color-nav')
    }  else { 
        colorNav.classList.remove('color-nav')
        colorNav.classList.add('color-nav_transparent')
    }

}

window.addEventListener('scroll', changeColorNav);

// remove navlinks when clicked

const navLink = document.querySelectorAll('.nav-links')

      function linkRemove(){
        menu.classList.remove('nav-show')
      }
navLink.forEach(n => n.addEventListener('click', linkRemove));

// ack to Top btn
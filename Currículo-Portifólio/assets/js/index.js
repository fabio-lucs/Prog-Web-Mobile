const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')



//show menu
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

//hidden menu

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

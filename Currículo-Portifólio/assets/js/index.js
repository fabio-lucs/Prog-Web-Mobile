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


//nav menu functions

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

// Sessão Scrolls
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionID = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionID +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionID +']').classList.remove('active')
        }
    })
}

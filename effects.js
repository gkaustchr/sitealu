const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Parallax 
const light = document.querySelector('#light')
const logo = document.querySelector('#logo')
const room = document.querySelector('#room')
const front = document.querySelector('#front')
const text = document.querySelector('#text')
const btn = document.querySelector('#btn')
const header = document.querySelector('header')

window.addEventListener('scroll', function() {
    const valueScroll = this.window.scrollY
    light.style.left = `${valueScroll * 0.5}px`
    logo.style.top = `${valueScroll * 1.5}px`
    room.style.top = `${valueScroll * 0.5}px`
    text.style.marginRight = `${valueScroll * 3}px`
    text.style.marginTop = `${valueScroll * 1.5}px`
    btn.style.marginTop = `${valueScroll * 1.5}px`
    front.style.top = `${valueScroll * 0}px`
    header.style.top = `${valueScroll * 0.5}px`
})



/* Scroll Smoth */
const scrollToSection = (event) => {
    event.preventDefault()
    removeLinkActive()
    const distancia = {
        'Home': 0,
        'Serviços': 1650,
        'Portifólio': 2850
    }
    event.target.classList.add('active')
    // const distance = getDistanceFromTheTop(event.target) -70
    /*             Top, Distancia Duracao */ 
    smoothScrollTo(0, distancia[event.target.text], 1000)
    closeNavMobile()

}

const getDistanceFromTheTop = (element) =>{
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
        clearInterval(timer);
        }
        window.scroll(newX, newY);
        
    }, 1000 / 60);
}

/* Fechar Links do Mobile */
const closeNavMobile = () => {
    document.querySelector('#navbarNav').classList.remove('show')
}

/* Remover Activo do link */
const removeLinkActive = () => {
    menuLinks.forEach((link) => {
        link.classList.remove('active')
    })
}

/* Verifica os links do nav */ 
const menuLinks = document.querySelectorAll('a[href^="#"]')
menuLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})


/* Alterar COr do header */
const activeScroll = () => {
    const nav = document.querySelector('nav')
    const distance = window.screen.height * 0.8
    nav.classList.toggle('activeNav', scrollY > distance)
}

window.addEventListener('scroll', activeScroll)
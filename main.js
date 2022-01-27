const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav .toogle')

for (const element of toogle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhell: true,
  keyboard: true
})

const scroll = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

ScrollReveal().reveal(
  `#home .image, #home .text,
  #about .image, #home .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testmonials,
  #contact .text, #contact .links`,
  { interval: 100 }
)

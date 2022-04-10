import './scss/index.scss'

const catalogBtn = document.querySelector('[header__catalogBtn]')
const menu = document.querySelector('.header__menu')
const links = document.querySelector('.header__links')
const catalogBody = document.querySelector('.header__catalog-body')
const burgerBtn = document.querySelector('.header__burger')
let menuState = false
let burgerState = false

catalogBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  if(menuState){
    menu.style.display = 'none'
    catalogBody.classList.remove('header__catalog-body--active')
    menuState = false
    return
  }
  links.style.display = 'none'
  burgerBtn.classList.remove('burger--active')
  burgerState = false
  catalogBody.classList.add('header__catalog-body--active')
  menu.style.display = 'block'
  menuState = true
})

burgerBtn.addEventListener('click', (e)=>{
  if(burgerState){
    links.style.display = 'none'
    burgerBtn.classList.remove('burger--active')
    burgerState = false
    return
  }
  menu.style.display = 'none'
  catalogBody.classList.remove('header__catalog-body--active')
  menuState = false
  burgerBtn.classList.add('burger--active')
  links.style.display = 'flex'
  burgerState = true
})
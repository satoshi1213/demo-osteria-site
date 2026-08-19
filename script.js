const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible')
  })
},{threshold:.12})

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

const menuButton = document.querySelector('.menu-button')
const mobileNav = document.querySelector('.mobile-nav')

menuButton?.addEventListener('click', () => {
  const open = !mobileNav.classList.contains('open')
  mobileNav.classList.toggle('open', open)
  mobileNav.setAttribute('aria-hidden', String(!open))
  menuButton.setAttribute('aria-expanded', String(open))
})

mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open')
    mobileNav.setAttribute('aria-hidden','true')
    menuButton.setAttribute('aria-expanded','false')
  })
})

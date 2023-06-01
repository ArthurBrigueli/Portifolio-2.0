const html = document.querySelector('.html')
const css = document.querySelector('.css')
const js = document.querySelector('.js')
const csharp = document.querySelector('.csharp')
const oracle = document.querySelector('.oracle')
const skils = document.querySelector('.skils')
const react = document.querySelector('.react')

const p = document.querySelector('.desc')
const t = document.querySelector('.titulo')


html.addEventListener('mouseenter', ()=>{
    t.textContent = 'HTML'
    p.innerHTML = `Curso realizado de Html no site Curso em video, +/- 1 ano de experiencia com a tecnologia`
    t.style.color = 'orange'
})
css.addEventListener('mouseenter', ()=>{
    t.textContent = 'CSS'
    p.innerHTML = 'Curso realizado de Css no site Curso em video, +/- 1 ano de experiencia com a tecnologia'
    t.style.color = 'rgb(157, 252, 255)'
})
js.addEventListener('mouseenter', ()=>{
    t.textContent = 'JavaScript'
    p.innerHTML = 'Curso realizado de JavaScript no site Curso em video, +/- 1 ano de experiencia com a tecnologia'
    t.style.color = 'rgb(255, 255, 78)'
})
csharp.addEventListener('mouseenter', ()=>{
    t.textContent = 'Csharp'
    p.innerHTML = 'Cursando a tecnologia Csharp no atual terceiro semestre na faculdade de analise e desenvolvimento de sistemas'
    t.style.color = 'rgb(255, 101, 255)'
})
oracle.addEventListener('mouseenter', ()=>{
    t.textContent = 'Oracle SQL'
    p.innerHTML = 'Cursando a tecnologia Oracle SQL no atual terceiro semestre na faculdade de analise e desenvolvimento de sistemas'
    t.style.color = 'orange'
})

react.addEventListener('mouseleave', ()=>{
   t.textContent = 'React Js'
   p.innerHTML = 'Cursando a tecnologia React Js na Udemy - React do Zero a Maestria (c/ hooks, router, API, Projetos)'
   t.style.color = 'rgb(157, 252, 255)'
})

skils.addEventListener('mouseleave', ()=>{
    t.textContent  = ''
    p.textContent = '/* Passe o mouse em cima das skils para poder ler a descriçao.' 
})

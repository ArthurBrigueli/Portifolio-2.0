const skills = document.querySelectorAll('.skill')

const t = document.querySelector('.titulo')
const d = document.querySelector('.desc')



const info = [
    {
        id: "0",
        titulo: "HTML",
        desc: "Curso realizado de Html no site Curso em video, +/- 1 ano de experiencia com a tecnologia",
        cor: "orange"
    },
    {
        id: "1",
        titulo: "Css",
        desc: "Curso realizado de Css no site Curso em video, +/- 1 ano de experiencia com a tecnologia",
        cor: "rgb(157, 252, 255)"
    },
    {
        id: "2",
        titulo: "JavaScript",
        desc: "Curso realizado de JavaScript no site Curso em video, +/- 1 ano de experiencia com a tecnologia",
        cor: "rgb(255, 255, 78)"
    },
    {
        id: "3",
        titulo: "Csharp",
        desc: "Cursando a tecnologia Csharp no atual terceiro semestre na faculdade de analise e desenvolvimento de sistemas",
        cor: "rgb(255, 101, 255)"
    },
    {
        id: "4",
        titulo: "Oracle",
        desc: "Cursando a tecnologia Oracle SQL no atual terceiro semestre na faculdade de analise e desenvolvimento de sistemas",
        cor: "orange"
    },
    {
        id: "5",
        titulo: "React",
        desc: "Cursando a tecnologia React Js na Udemy - React do Zero a Maestria (c/ hooks, router, API, Projetos",
        cor: "rgb(157, 252, 255)"
    },
    {
        id: '6',
        titulo: ' NodeJS',
        desc: 'feito pelo canal ciencia da computação, usando todas as bibliotecas nescessaria para a criação de um projeto back e front ed',
        cor: 'green'
    }
]


const mostrarDesc = (s)=>{
    t.innerHTML = info[s].titulo
    d.innerHTML = info[s].desc
    t.style.color = info[s].cor
}


const esconderDesc = () => {
    t.textContent = ''
    d.textContent = '/* Passe o mouse em cima das skils para ler a descrição */'
}


for(let skill = 0; skill < skills.length; skill++){
    skills[skill].addEventListener('mouseenter', ()=>{
        mostrarDesc(skill)
    })

    skills[skill].addEventListener("mouseleave", ()=>{
        esconderDesc()
    })
}





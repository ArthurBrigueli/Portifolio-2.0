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
        id: 1,
        titulo: "Css",
        desc: "Curso realizado de Css no site Curso em video, +/- 1 ano de experiencia com a tecnologia",
        cor: "rgb(157, 252, 255)"
    },
    {
        id: 2,
        titulo: "JavaScript",
        desc: "Curso realizado de JavaScript no site Curso em video, +/- 1 ano de experiencia com a tecnologia",
        cor: "rgb(255, 255, 78)"
    },
    {
        id: 3,
        titulo: "MySQL",
        desc: "Experiência em MySQL, incluindo design de banco de dados, otimização e execução eficiente de consultas. Conhecimento atualizado com as melhores práticas para garantir soluções eficazes.",
        cor: "rgb(157, 252, 255)"
    },
    {
        id: 4,
        titulo: "React.js",
        desc: "Experiencia em React.js com o uso de toda sua estrutura como (hooks, router, components etc) sempre estruturando da melhor forma e transformando em components para aumentar o desenvolvimento em um menor tempo",
        cor: "rgb(157, 252, 255)"
    },
    {
        id: 5,
        titulo: ' NodeJS',
        desc: 'Alta experiencia em node.js com criação de APIs para integrar com projetos React.js e outros frameworks e usando as melhores estruturas para o desenvolvimento de um back-end ',
        cor: 'green'
    }
]


const mostrarDesc = (sd, s)=>{
    for(i in info){
        if(s == info[i].id){
            t.textContent = info[s].titulo
            d.textContent = info[s].desc
            t.style.color = info[s].cor
        }
    }
}


const esconderDesc = () => {
    t.textContent = ''
    d.textContent = '/* Passe o mouse em cima das skils para ler a descrição */'
}


for(let skill = 0; skill < skills.length; skill++){
    skills[skill].addEventListener('mouseenter', ()=>{
        mostrarDesc(skills[skill], skill)
    })

    skills[skill].addEventListener("mouseleave", ()=>{
        esconderDesc()
    })
}





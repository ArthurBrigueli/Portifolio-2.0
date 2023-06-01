
const container_conteudo = document.querySelector('.container-conteudo')
const mais = document.querySelector('.mais')

const getRepositorio = async() => {
    const apiGithub = `https://api.github.com/users/ArthurBrigueli/repos`
    const res = await fetch(apiGithub)
    const data = await res.json()
    return data
}


const mais_projeto = async()=>{
    const data = await getRepositorio()
    const projetos = document.createElement('div')
    projetos.className = 'projetos-git'
    container_conteudo.appendChild(projetos)

    data.map(item =>{
        if(item.name == 'pokedex-js' || item.name == 'Interactive-card-Responsive' || item.name == 'temperature-of-your-city-js' || item.name == 'Portifolio' || item.name == 'ArthurBrigueli'){
            return
        }else{
            const projeto_git = document.createElement('div')
            projeto_git.className = 'projeto-git'
            projeto_git.innerHTML += `
                <div class="container-git-img">
                    <img class="img-projeto-git" src="../img_projeto/GitHub-Mark.png" alt="">
                    <span class="nome-projeto-git">${item.name}</span>
                </div>
                <div class="container-info-git">
                    <span class="linguagem-projeto-git">${item.language}</span>
                    <a class="botao-projeto-git" href="${item.clone_url}" target="_blank">GitHub</a>
                </div>
            `
            projetos.appendChild(projeto_git)
        }
    })

}





mais.addEventListener('click', ()=>{
    mais_projeto()
    mais.remove()
})

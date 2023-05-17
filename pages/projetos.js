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
    
    data.map(item =>{
        if(item.name == 'pokedex-js' || item.name == 'Interactive-card-Responsive' || item.name == 'temperature-of-your-city-js' || item.name == 'Portifolio' || item.name == 'ArthurBrigueli'){
            return
        }else{
            const projeto = document.createElement('div')
            projeto.className = 'projeto'
            projeto.innerHTML += `
                <div class="container-img">
                    <img class="img-git" src="../img_projeto/GitHub-Mark.png" alt="">
                    <span class="nome-projeto">${item.name}</span>
                </div>
                <div class="container-info">
                    <span class="linguagem-projeto">${item.language}</span>
                    <a class="botao-projeto" href="${item.clone_url}" target="_blank">GitHub</a>
                </div>
            `
            container_conteudo.appendChild(projeto)
        }
    })

}





mais.addEventListener('click', ()=>{
    mais_projeto()
    mais.remove()
})

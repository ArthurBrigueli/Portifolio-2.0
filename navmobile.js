const botao_nav_mobile = document.querySelector('.img_menu_mobile')
const nav_mobile = document.querySelector('.container-opcao-mobile')



botao_nav_mobile.addEventListener('click', ()=>{
    mostrarMenu()
})



function mostrarMenu(){
    nav_mobile.classList.toggle('ativado')
    
}
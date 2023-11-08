function inserir(num){
    document.querySelector('.tela').innerHTML += num; /*+ ao lado do = para concatenar os inputs */
}

function limpar(){
    document.querySelector('.tela').innerHTML = "";
}
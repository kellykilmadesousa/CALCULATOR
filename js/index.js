function inserir(num){
    document.querySelector('.tela').innerHTML += num; /*+ ao lado do = para concatenar os inputs */
}

function limpar(){
    document.querySelector('.tela').innerHTML = "";
}

function voltar(){
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML =  tela.substring(0, tela.length -1);
}

function somar(){
    let tela = document.querySelector('.tela').innerHTML;
    if(tela){
        document.querySelector('.tela').innerHTML = eval(tela);
    }else{
        document.querySelector('.tela').innerHTML = "0"
    }
}
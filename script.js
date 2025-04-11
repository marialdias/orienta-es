const entrada = document.getElementById('entrada');
const botao = document.getElementById('add');
const lista = document.getElementById('lista');

const itens = [];

botao.addEventListener('click',
    function(){
        let valor = entrada.value;
        itens.push(valor);
        entrada.value = "";
        console.log(itens)
        imprimir();
    }

);
function imprimir(){
    lista.innerHTML = "";
    for(let i = 0;i < itens.length; i++){
        let li = document.createElement("li")
     li.textContent = itens[i]
     lista.appendChild(li)
}
    }

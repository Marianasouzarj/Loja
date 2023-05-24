function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(acao == '-' && qtd.innerHTML ==0){
        alert('Atenção! A quantidade não pode ser menor que 0.')

    } else {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        const valorTotal = qtd.innerHTML * somenteNumeros(valor.innerHTML)
        total.innerHTML = formatarValor(valorTotal)
        soma()
    }   

   console.log(total)
}

function soma(){
    let soma = 0

    /* 
    soma = soma + Number(document.getElementById('total_1').innerHTML)
    soma = soma + Number(document.getElementById('total_2').innerHTML)
    soma = soma + Number(document.getElementById('total_3').innerHTML)
    */
   //Outra forma de escrever o código acima

   /*

    soma += Number(document.getElementById('total_1').innerHTML)
    soma += Number(document.getElementById('total_2').innerHTML)
    soma += Number(document.getElementById('total_3').innerHTML)

    */

    //Ou ainda posso fazer uma estrutura de repetição:

    for(let i = 1; i < 4; i++){   // Vai fazer a soma enquanto i for menor que 4
        let numero = somenteNumeros(document.getElementById('total_' + i).innerHTML)
        soma += Number(numero)

    }

    document.getElementById('subtotal').innerHTML = formatarValor(soma)
}

function somenteNumeros(n){

    return n.replace(/\D/g, '') // ess expressão substitui o que não é número por vazios
}

function formatarValor(n){
    return 'R$' + n.toLocaleString('pt-BR')   // função que converte um número para string

}
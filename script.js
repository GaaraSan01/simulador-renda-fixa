const Valor = document.querySelector('#valor') 
const tempo = document.querySelector('#tempo') 
const juros =  document.querySelector('#juros')
const simule = document.querySelector('.simular') 
const Resposta = document.querySelector('#res')
const RespInteface = document.querySelector('.content')
const copy = document.querySelector('.copy')
const  ValorJuros = document.querySelector('.taxaJuros')
const slideJuros = document.querySelector('#slider')

ValorJuros.innerText = slideJuros.value + '%'

slideJuros.oninput = () =>{
    ValorJuros.innerText = slideJuros.value + '%'
}

function simularInvest(ValorInv, tempoAnos, jurosAnos){
    
    if(ValorInv >= 100 && tempoAnos >= 1 && jurosAnos >= 1){
        const calc = ValorInv * (1 + jurosAnos/100) ** tempoAnos * 12
        const money = Number(Valor.value)
        const tempInv = Number(tempo.value)
        Result(calc, money, tempInv)
    }else if(ValorInv == '' && tempoAnos == ''){
        RespInteface.classList.remove('resp')
        Resposta.classList.remove('resposta')
    }else{
        alert('Digite os dados corretamente!')
    }
    Valor.value = ''
    Valor.focus()
    tempo.value = ''
}

function Result(calculo, dinheiro, tempoInvestimento){
    RespInteface.classList.add('resp')
    Resposta.classList.add('resposta')

    copy.innerHTML = `<p>
    Investindo um valor de ${dinheiro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
    por ${tempoInvestimento} anos com juros de ${slideJuros.value}% a.a
    ${calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.
    </p>`
    copy.style.color = 'var(--azul)'    
}

simule.addEventListener('click', () => {
    simularInvest(Valor.value, tempo.value, slideJuros.value)
})
tempo.addEventListener('keypress', () => {
    const key = event.keyCode
    if(key === 13){
        simule.click()
    }
})
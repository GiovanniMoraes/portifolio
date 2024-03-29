document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

const prazo =  document.querySelector('#prazo').value
if( prazo == 10) document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`

document.querySelector('#qtde').addEventListener("change", atualizarPreco)
document.querySelector('#js').addEventListener("change", atualizarPreco)
document.querySelector('#layout-sim').addEventListener("change", atualizarPreco)
document.querySelector('#layout-nao').addEventListener("change", atualizarPreco)
document.querySelector('#layout-nao').addEventListener("change", atualizarPreco)
document.querySelector('#prazo').addEventListener("change", function(){
    const prazo = document.querySelector('#prazo').value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    if(prazo == 1) document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector('#qtde').value
    const temJS = document.querySelector('#js').checked
    const incluiLayout = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value
    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`
}
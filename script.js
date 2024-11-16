function adicionarValor(valor) {
    const tela = document.getElementById('tela');
    tela.value += valor;
}

function calcular() {
    const tela = document.getElementById('tela');
    try {

        const resultado = eval(tela.value);
        tela.value = Number.isInteger(resultado) ? resultado : resultado.toFixed(10).replace(/\.?0+$/, '');
    } catch (error) {
        alert("Expressão inválida!");
        tela.value = '';
    }
}

function limpar() {
    document.getElementById('tela').value = '';
}

function apagarUltimo() {
    const tela = document.getElementById('tela');
    tela.value = tela.value.slice(0, -1);
}
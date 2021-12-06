var lista = []
var input_valor = document.getElementById("input_valor");

input_valor.addEventListener('keyup', (ev) => {
    if (ev.key === "Enter") {
        addValue();
    }
})

function addValue() {
    var numberInput = input_valor.value
    if (numberInput === "" || numberInput == 0) {

    }
    else {
        lista.push(Number(numberInput))

        input_valor.value = ''
        document.getElementById("lbl_qtnitens").innerHTML = lista.length
    }
}


function Total() {
    var total = 0
    lista.forEach(valor => {
        total += valor
    });
    document.getElementById('lbl_conta').innerHTML = total.toFixed(2).replace('.', ',')
}
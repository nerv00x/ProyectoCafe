const horasTotales = document.querySelector('#horastotales');

function sumar() {
    let total = 0;
    let nodeList = document.querySelectorAll('td input[type="number"]');
    let inputs = Array.from(nodeList);
    for (var i = 0; i < inputs.length; i++) {
        if (!isNaN(parseFloat(inputs[i].value))) {
            total += parseFloat(inputs[i].value);
        }
    }
    checkHorasTotales(total);
    horasTotales.textContent = total;
};

function checkHorasTotales(horastotales) {
    if (horastotales >18) {
        if (horasTotales.classList.contains('text-success')) {
            horasTotales.classList.replace('text-success', 'text-danger');
        }else{
            horasTotales.classList.add('text-danger')
        }
    }else{
        if (horasTotales.classList.contains('text-danger')) {
            horasTotales.classList.replace('text-danger', 'text-success');
        }else{
            horasTotales.classList.add('text-success')
        }
    }
}
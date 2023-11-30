$(window).scroll(function(){
    if($(document).scrollTop() > 100){
      $('nav').addClass('animate');
    }else{
      $('nav').removeClass('animate');
    }
  })

  function desglosarNumero() {
    const numero = parseInt(document.getElementById('numeroInput').value);
    const resultadoElement = document.getElementById('resultado');

    if (numero >= 3 && numero <= 8) {
      const desgloses = generarDesgloses(numero);
      resultadoElement.innerHTML = ''; // Limpiar el desplegable antes de añadir nuevos elementos

      if (desgloses.length > 0) {
        desgloses.forEach(desglose => {
          const option = document.createElement('option'); // Crear un nuevo elemento option
          option.text = desglose;
          resultadoElement.add(option);
        });
      } else {
        const option = document.createElement('option');
        option.text = 'No hay combinaciones posibles para este número.';
        resultadoElement.add(option);
      }
    } else {
      const option = document.createElement('option');
      option.text = 'Por favor, ingrese un número entre 3 y 8.';
      resultadoElement.add(option);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const numeroInput = document.getElementById('numeroInput');
    numeroInput.addEventListener('input', desglosarNumero);
  });



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





























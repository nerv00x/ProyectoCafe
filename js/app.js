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

































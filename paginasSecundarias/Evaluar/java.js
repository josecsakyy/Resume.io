function calcularPromedio(event) {
    event.preventDefault(); // Prevent form submission, so we can handle it manually
  
    // Get the input elements for the scores
    const puntajeAcademico = parseFloat(document.getElementById('puntaje_academico').value);
    const puntajeDeportivo = parseFloat(document.getElementById('puntaje_deportivo').value);
    const puntajePersonal = parseFloat(document.getElementById('puntaje_personal').value);
  
    // Check if any of the scores are negative, zero, or greater than 100
    if (puntajeAcademico < 0 || puntajeAcademico > 100 ||
        puntajeDeportivo < 0 || puntajeDeportivo > 100 ||
        puntajePersonal < 0 || puntajePersonal > 100) {
      alert('Por favor, ingresa puntuaciones válidas (entre 1 y 100).');
      return false; // Return false to prevent form submission
    }
  
    // Calculate the average
    const promedio = (puntajeAcademico + puntajeDeportivo + puntajePersonal) / 3;
  
    // Display the result below the form
    const resultadoPromedio = document.getElementById('resultado_promedio');
    resultadoPromedio.innerHTML = `Promedio: ${promedio.toFixed(2)}%`;
  
    // Display the message of appreciation below the result
    const mensajeAgradecimiento = document.getElementById('mensaje_agradecimiento');
    mensajeAgradecimiento.innerHTML = 'Plenamente agradecido! Saludos.';
  
    // Return false to prevent form submission
    return false;
  }

  function mostrarMensaje(idioma) {
    const mensajeIdioma = document.getElementById('mensaje_idioma');
    mensajeIdioma.innerHTML = ` ${idioma}`;
  }

  function borrarFormulario() {
    // Obtener el formulario por su ID
    const formulario = document.getElementById('formulario');
  
    // Reiniciar el formulario
    formulario.reset();
  }
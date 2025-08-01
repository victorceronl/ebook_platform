    // Obtener el contador desde localStorage o iniciar en 0
    let contador = parseInt(localStorage.getItem('contadorDescargas')) || 0;

    // Mostrar el valor inicial
    document.getElementById("numero-descargas").textContent = contador;

    function incrementarContador() {
      contador++;
      document.getElementById("numero-descargas").textContent = contador;
      localStorage.setItem('contadorDescargas', contador); // Guardar en localStorage
    }
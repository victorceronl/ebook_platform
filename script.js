    const archivos = ['libro_0001', 'libro_0002', 'archivo3', 'archivo4', 'archivo5'];

    // Inicializar todos los contadores al cargar la página
    archivos.forEach(id => {
      const contador = parseInt(localStorage.getItem(`contador_${id}`)) || 0;
      document.getElementById(`contador-${id}`).textContent = contador;
    });

    function incrementarContador(id) {
      let contador = parseInt(localStorage.getItem(`contador_${id}`)) || 0;
      contador++;
      localStorage.setItem(`contador_${id}`, contador);
      document.getElementById(`contador-${id}`).textContent = contador;
    }
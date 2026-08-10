document.addEventListener("DOMContentLoaded", function () {
  //actualizarDiasRestantes();
  //setInterval(actualizarDiasRestantes, 24*60*60*1000); // Actualizar diario

  // Datos para el gráfico de líneas
  const dataLine1 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'],
    datasets: [{
      label: 'Km recorridos en Semana 24',
      data: [14, 9, 6, 16],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.1
    }]
  };

  const dataLine2 = {
    labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4'],
    datasets: [{
      label: 'Km recorridos en Semana 25',
      data: [12, 8, 8, 18],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      fill: true,
      tension: 0.1
    }]
  };

  // Configuración del gráfico de líneas
  const configLine1 = {
    type: 'line',
    data: dataLine1,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  const configLine2 = {
    type: 'line',
    data: dataLine2,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  const canvasLine1 = document.getElementById('myChart-line-1');
  const canvasLine2 = document.getElementById('myChart-line-2');

  if (canvasLine1) {
    new Chart(canvasLine1, configLine1);
  }

  if (canvasLine2) {
    new Chart(canvasLine2, configLine2);
  }
});


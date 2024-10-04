function validarFormulario() {
  // Obtener el número de control del input
  const numeroControl = document.getElementById('NControl').value;
  const mensaje = document.getElementById('mensaje');

  // Si la longitud es diferente de 8 caracteres, mostrar mensaje de error
  if (numeroControl.length !== 8) {
      mensaje.textContent = "El número debe tener 8 dígitos.";
      mensaje.className = 'invalido';
      return false; // Previene el envío del formulario
  }

  // Dividir el número de control en tres partes
  const añoIngreso = numeroControl.substr(0, 2);
  const numeroTec = numeroControl.substr(2, 2);
  const numeroConsecutivo = numeroControl.substr(4, 4);

  // Validar que el número del tecnológico sea 84
  if (numeroTec !== '84') {
      mensaje.textContent = "El número del tecnológico debe ser 84.";
      mensaje.className = 'invalido';
      document.getElementById('NControl').focus();
      return false; // Previene el envío del formulario
  }

  // Mostrar mensaje de éxito
  mensaje.textContent = `Número de Control válido:
      Año de Ingreso: ${añoIngreso}
      Número del Tecnológico: ${numeroTec}
      Número Consecutivo: ${numeroConsecutivo}`;
  mensaje.className = 'valido';

  return true; // Permite el envío del formulario
}


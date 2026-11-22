const formulario = document.querySelector("#contacto");
const resultado = document.querySelector("#resultado");

// El sitio estático permite practicar el envío sin transmitir datos personales.
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  resultado.textContent = "Consulta validada. El envío de prueba terminó en este navegador.";
  resultado.focus();
});

formulario.addEventListener("input", () => {
  resultado.textContent = "";
});

formulario.querySelector("button").disabled = false;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-registro");
  const servicioSelect = document.getElementById("servicio");
  const otroServicioContainer = document.getElementById("otro-servicio-container");
  const otroServicioInput = document.getElementById("otro-servicio");

  // Mostrar campo adicional si selecciona "Otro" en servicio hospitalario
  servicioSelect.addEventListener("change", () => {
    if (servicioSelect.value === "Otro") {
      otroServicioContainer.style.display = "block";
      otroServicioInput.required = true;
    } else {
      otroServicioContainer.style.display = "none";
      otroServicioInput.required = false;
    }
  });

  // Al enviar el formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipoId = document.getElementById("tipo-id").value;
    const numeroId = document.getElementById("numero-id").value;
    const habitacion = document.getElementById("habitacion").value;
    const servicio =
      servicioSelect.value === "Otro" ? otroServicioInput.value : servicioSelect.value;
    const acudiente = document.getElementById("acudiente").value;
    const parentesco = document.getElementById("parentesco").value;

    const datosUsuario = {
      nombre,
      tipoId,
      numeroId,
      habitacion,
      servicio,
      acudiente,
      parentesco,
      estrellas: 0 // comenzamos con 0 estrellas
    };

    // Guardar en localStorage usando número de identificación como clave
    localStorage.setItem("usuarioActual", numeroId);
    localStorage.setItem(numeroId, JSON.stringify(datosUsuario));

    // Redirigir al perfil
    window.location.href = "perfil.html";
  });
});

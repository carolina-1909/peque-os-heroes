document.addEventListener("DOMContentLoaded", () => {
  const usuarioId = localStorage.getItem("usuarioActual");
  const datosGuardados = localStorage.getItem(usuarioId);

  if (!datosGuardados) {
    alert("No hay datos del usuario. Por favor regístrate primero.");
    window.location.href = "registro.html";
    return;
  }

  const usuario = JSON.parse(datosGuardados);

  // Referencias
  const nombrePerfil = document.getElementById("nombre-perfil");
  const tipoIdPerfil = document.getElementById("tipo-id-perfil");
  const numeroIdPerfil = document.getElementById("numero-id-perfil");
  const habitacionPerfil = document.getElementById("habitacion-perfil");
  const servicioPerfil = document.getElementById("servicio-perfil");
  const acudientePerfil = document.getElementById("acudiente-perfil");
  const parentescoPerfil = document.getElementById("parentesco-perfil");

  const fotoPerfil = document.getElementById("foto-perfil");
  const inputFoto = document.getElementById("input-cambiar-foto");

  // Mostrar datos
  nombrePerfil.textContent = usuario.nombre;
  tipoIdPerfil.textContent = usuario.tipoId;
  numeroIdPerfil.textContent = usuario.numeroId;
  habitacionPerfil.textContent = usuario.habitacion;
  servicioPerfil.textContent = usuario.servicio;
  acudientePerfil.textContent = usuario.acudiente;
  parentescoPerfil.textContent = usuario.parentesco;

  // Mostrar foto si existe, o imagen por defecto
  if (usuario.foto) {
    fotoPerfil.src = usuario.foto;
  } else {
    fotoPerfil.src = "img/default-avatar.png";
  }

  // Cambiar foto al hacer clic
  fotoPerfil.addEventListener("click", () => {
    inputFoto.click();
  });

  inputFoto.addEventListener("change", () => {
    const archivo = inputFoto.files[0];
    if (archivo) {
      if (archivo.size > 300 * 1024) {
        alert("La imagen es muy pesada. Usa una menor a 300KB.");
        return;
      }

      const lector = new FileReader();
      lector.onload = function (e) {
        const base64 = e.target.result;
        fotoPerfil.src = base64;

        usuario.foto = base64;

        try {
          localStorage.setItem(usuarioId, JSON.stringify(usuario));
        } catch (error) {
          alert("No se pudo guardar la imagen. El almacenamiento está lleno.");
        }

        // Animación decorativa
        const estrella = document.getElementById("estrella-decorativa");
        if (estrella) {
          estrella.classList.add("animar-estrella");
          setTimeout(() => estrella.classList.remove("animar-estrella"), 1000);
        }
      };
      lector.readAsDataURL(archivo);
    }
  });
// Botón cerrar sesión: borra el usuario actual y regresa al index
const botonCerrarSesion = document.getElementById("cerrar-sesion");

botonCerrarSesion.addEventListener("click", () => {
  localStorage.removeItem("usuarioActual");
  window.location.href = "index.html";
});


});




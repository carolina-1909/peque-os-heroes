document.addEventListener("DOMContentLoaded", () => {
  const claveCorrecta = "123456"; 

  const loginAdmin = document.getElementById("login-admin");
  const panelAdmin = document.getElementById("panel-admin");
  const inputClave = document.getElementById("clave-admin");
  const btnIngresar = document.getElementById("btn-ingresar");
  const btnSalir = document.getElementById("btn-salir");
  const listaRegistros = document.getElementById("lista-registros");

  btnIngresar.addEventListener("click", () => {
    if (inputClave.value === claveCorrecta) {
      loginAdmin.style.display = "none";
      panelAdmin.style.display = "block";
      cargarRegistros();
    } else {
      alert("❌ Clave incorrecta");
    }
  });
  btnSalir.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  function cargarRegistros() {
    listaRegistros.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
      const clave = localStorage.key(i);
      if (clave !== "usuarioActual") {
        try {
          const datos = JSON.parse(localStorage.getItem(clave));
          if (datos && datos.nombre) {
            const div = document.createElement("div");
            div.className = "registro";
            div.innerHTML = `
              <strong>👶 Nombre:</strong> ${datos.nombre}<br>
              <strong>ID:</strong> ${datos.tipoId} ${datos.numeroId}<br>
              <strong>Habitación:</strong> ${datos.habitacion}<br>
              <strong>Servicio:</strong> ${datos.servicio}<br>
              <strong>Acudiente:</strong> ${datos.acudiente} (${datos.parentesco})
            `;
            listaRegistros.appendChild(div);
          }
        } catch (e) {
          console.warn(`Error con clave ${clave}:`, e);
        }
      }
    }
  }

});

console.log("💻 Plataforma Pequeños Héroes Medical Duarte está lista para funcionar.");
document.addEventListener("DOMContentLoaded", () => {
  const btnAdmin = document.getElementById("acceso-admin");
  if (btnAdmin) {
    btnAdmin.addEventListener("click", () => {
      window.location.href = "admin.html"; // Redirige al archivo admin
    });
  }
});




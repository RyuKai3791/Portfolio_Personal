document.addEventListener("DOMContentLoaded", function() {
    const proyectosList = document.getElementById("proyectos-list");
    const proyectoModal = document.getElementById("proyecto-modal");
    const proyectoImagen = document.getElementById("proyecto-imagen");
    const proyectoDescripcion = document.getElementById("proyecto-descripcion");
    const proyectoEnlace = document.getElementById("proyecto-enlace");
    const cerrarModal = document.querySelector(".cerrar-modal");
  
    proyectosList.addEventListener("click", function(event) {
      event.preventDefault();
      if (event.target.tagName === "A") {
        const imgSrc = event.target.getAttribute("data-img-src");
        const descripcion = event.target.getAttribute("data-descripcion");
        const enlace = event.target.getAttribute("data-enlace");
  
        proyectoImagen.src = imgSrc;
        proyectoDescripcion.textContent = descripcion;
        proyectoEnlace.href = enlace;
  
        proyectoModal.style.display = "block";
      }
    });
  
    cerrarModal.addEventListener("click", function() {
      proyectoModal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === proyectoModal) {
        proyectoModal.style.display = "none";
      }
    });
});  
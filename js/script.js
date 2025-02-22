// JavaScript para funcionalidad SPA (Single Page Application)

document.addEventListener('DOMContentLoaded', () => {
    // Selección de todos los enlaces del menú de navegación
    const navLinks = document.querySelectorAll('nav ul li a');
  
    // Evento de clic para realizar scroll suave a cada sección
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir comportamiento por defecto
  
        const targetId = link.getAttribute('href').substring(1); // Obtener ID de la sección
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          // Realizar scroll suave hacia la sección objetivo
          window.scrollTo({
            top: targetSection.offsetTop - 60, // Ajustar para compensar la altura del menú fijo
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Botones "Consulta Ahora" que llevan a la sección de contacto
    const consultaButtons = document.querySelectorAll('.boton-consulta');
  
    consultaButtons.forEach(button => {
      button.addEventListener('click', () => {
        const contactSection = document.getElementById('contacto');
  
        if (contactSection) {
          window.scrollTo({
            top: contactSection.offsetTop - 60, // Ajustar para el menú fijo
            behavior: 'smooth'
          });
        }
      });
    });

    const btnConsulta = document.getElementById("btn-consulta");
    const seccionContacto = document.getElementById("contacto");

    function toggleBotonFlotante() {
        const rect = seccionContacto.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            btnConsulta.classList.add("boton-oculto"); // Oculta el botón si está en "Contacta con nosotros"
        } else {
            btnConsulta.classList.remove("boton-oculto"); // Muestra el botón si está en otra sección
        }
    }
/*
    function actualizarTextoBoton() {
      if (window.innerWidth <= 1200) { // Para dispositivos móviles (ancho menor o igual a 768px)
          btnConsulta.textContent = "?";
      } else {
          btnConsulta.textContent = "Consulta Ahora";
      }
    }
*/
    // Detectar cambios en el tamaño de pantalla
    window.addEventListener("resize", actualizarTextoBoton);

    // Verificar el scroll para mostrar/ocultar el botón
    window.addEventListener("scroll", toggleBotonFlotante);
    
    // Asegurar que el botón no esté visible si ya está en la sección "Contacta con nosotros" al cargar la página
    toggleBotonFlotante();
    //actualizarTextoBoton();
});

  
   
  

  
    
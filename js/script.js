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
  
    // Funcionalidad para el botón flotante de volver al inicio
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '⬆';
    backToTopButton.classList.add('back-to-top');
  
    document.body.appendChild(backToTopButton);
  
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Mostrar/ocultar el botón de volver al inicio
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    // Inicialización: ocultar el botón al cargar la página
    backToTopButton.style.display = 'none';
  });
  
    // Mostrar/ocultar botón flotante
    const botonFlotante = document.getElementById('boton-flotante');
    const contactoSeccion = document.getElementById('contacto');

    window.addEventListener('scroll', () => {
        const contactoPos = contactoSeccion.getBoundingClientRect();
        if (contactoPos.top <= window.innerHeight && contactoPos.bottom >= 0) {
            botonFlotante.style.display = 'none';
        } else {
            botonFlotante.style.display = 'block';
        }
    });
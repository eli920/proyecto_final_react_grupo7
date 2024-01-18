import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <h3>Redes Sociales</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://pinterest.com">Pinterest</a></li>
          {/* Agrega más redes sociales según sea necesario */}
        </ul>
      </div>

      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p>Dirección: Calle 123, Ciudad, País</p>
        <p>Email: info@example.com</p>
        <p>Teléfono: +123 456 789</p>
      </div>

      <div className="subscribe">
        <h3>Suscríbete a nuestro boletín</h3>
        <p>Recibe las últimas novedades y ofertas especiales directamente en tu correo.</p>
        <form>
          <input type="email" placeholder="Tu correo electrónico" />
          <button type="submit">Suscribirse</button>
        </form>
      </div>

      <div className="useful-links">
        <h3>Enlaces Útiles</h3>
        <ul>
          <li><a href="/politica-de-privacidad">Política de Privacidad</a></li>
          <li><a href="/terminos-y-condiciones">Términos y Condiciones</a></li>
          <li><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
          {/* Agrega más enlaces útiles según sea necesario */}
        </ul>
      </div>

      <div className="copyright">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
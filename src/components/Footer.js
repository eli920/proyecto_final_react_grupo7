import React from 'react';
import style from '../styles/Footer.module.css';


const Footer = () => {
  return (
    <footer>
    <div className={style.footer}>
      <div className={style.social_media}>
        <h3>Redes Sociales</h3>
        <ul>
          <li><a href="https://facebook.com" aria-label="Facebook">Facebook</a></li>
          <li><a href="https://twitter.com" aria-label="Twitter">Twitter</a></li>
          <li><a href="https://instagram.com" aria-label="Instagram">Instagram</a></li>
          <li><a href="https://pinterest.com" aria-label="Pinterest">Pinterest</a></li>
          {/* Agrega más redes sociales según sea necesario */}
        </ul>
      </div>

      <div className={style.contact_info}>
        <h3>Información de Contacto</h3>
        <p>Dirección: Calle 123, Buenos Aires, Argentina</p>
        <p>Email: info@trown.com</p>
        <p>Teléfono: +123 456 789</p>
      </div>

      <div className={style.subscribe}>
        <h3>Suscríbete a nuestro boletín</h3>
        <p>Recibe las últimas novedades y ofertas especiales directamente en tu correo.</p>
        <form>
          <input type="email" placeholder="Tu correo electrónico" required />
          <button type="submit">Suscribirse</button>
        </form>
      </div>

      <div className={style.useful_links}>
        <h3>Enlaces Útiles</h3>
        <ul>
          <li><a href="/politica-de-privacidad" aria-label="Política de Privacidad">Política de Privacidad</a></li>
          <li><a href="/terminos-y-condiciones" aria-label="Términos y Condiciones">Términos y Condiciones</a></li>
          <li><a href="/preguntas-frecuentes" aria-label="Preguntas Frecuentes">Preguntas Frecuentes</a></li>
          {/* Agrega más enlaces útiles según sea necesario */}
        </ul>
      </div>
      </div>
      <div className={style.copyright}>
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
  </footer>
  );
};

export default Footer;

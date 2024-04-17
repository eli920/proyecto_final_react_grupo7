import React from 'react';
import '@/styles/globals.css';
import Footer from '../components/Footer';
import MyNavbar from '../components/Navbar';
import MyCarousel from '../components/Carousel';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      {/* Navbar en la parte superior */}
      <MyNavbar />

      {/* Contenido principal */}
      <main className="main-content">
        {/* Contenido de la aplicación, como el encabezado, el contenido principal, etc. */}
        <Component {...pageProps} />

        {/* Carousel */}
        <MyCarousel />
      </main>

      {/* Footer al final de la página */}
      <Footer />
    </div>
  );
}

export default MyApp;
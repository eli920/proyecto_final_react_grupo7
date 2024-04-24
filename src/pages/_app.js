import React from 'react';
import '@/styles/globals.css';
import Footer from '../components/Footer';
import MyNavbar from '../components/Navbar';
import { AppContextProvider } from '../context/app';
import MyCarousel from '../components/Carousel';
import Section from '@/components/cards/Section';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="modal-root"></div>
      <div className="app-container">
        <AppContextProvider>
          {/* Navbar en la parte superior */}
          <MyNavbar/>

          {/* Contenido principal */}
          <main className="main-content">
            {/* Contenido de la aplicación, como el encabezado, el contenido principal, etc. */}

            
              <Component {...pageProps} />

            {/* Carousel */}
            <MyCarousel />
          </main>

          {/* Footer al final de la página */}
          <Footer />
        </AppContextProvider>
      </div>
    </>
  );
}

export default MyApp;

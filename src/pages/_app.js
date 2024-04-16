import React from 'react';
import '@/styles/globals.css';
import Footer from '../components/Footer';
import MyNavbar from '../components/Navbar';

function MyApp({ Component, pageProps}) {
  return (
    <div>

      {/* Navbar en la parte superior */}
      <MyNavbar />
      

      {/* Contenido de la aplicación, como el encabezado, el contenido principal, etc. */}
      <Component {...pageProps} />
      
      {/* Footer al final de la página */}
      <Footer />
    </div>
  );
}

export default MyApp;
import React from 'react';
import '@/styles/globals.css';
import Footer from '../components/Footer';



function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* Contenido de la aplicación, como el encabezado, el contenido principal, etc. */}
      <Component {...pageProps} />
      
      {/* Footer al final de la página */}
      <Footer />
    </div>
  );
}

export default MyApp;
import React from 'react';
import '@/styles/globals.css';
import '@/styles/Carousel.module.css';
import Footer from '../components/Footer';
import MyNavbar from '../components/Navbar';
import { AppContextProvider } from '../context/app';
import Carousel from '../components/Carousel';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="modal-root"></div>
      <div className="app-container">
        <AppContextProvider>
          <MyNavbar/>

          <main className="main-content">
              <div>
        {/* Carrusel de imagenes*/}
         < Carousel />
         </div>
         <div>

              <Component {...pageProps} />
         </div>

          </main>

          <Footer />
        </AppContextProvider>
      </div>
    </>
  );
}

export default MyApp;

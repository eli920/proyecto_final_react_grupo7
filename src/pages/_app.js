import React from 'react';
import '@/styles/globals.css';
import Footer from '../components/Footer';
import MyNavbar from '../components/Navbar';
import { AppContextProvider } from '../context/app';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="modal-root"></div>
      <div className="app-container">
        <AppContextProvider>
          <MyNavbar/>

          <main className="main-content">
              <Component {...pageProps} />
          </main>

          <Footer />
        </AppContextProvider>
      </div>
    </>
  );
}

export default MyApp;

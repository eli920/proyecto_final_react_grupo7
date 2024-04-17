import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const imagenes = [
  "https://trown.com.ar/wp-content/uploads/DSC03406-scaled.jpg",
  "https://trown.com.ar/wp-content/uploads/DSC04136-scaled.jpg",
  "https://trown.com.ar/wp-content/uploads/DSC03551-1-scaled.jpg",
  "https://trown.com.ar/wp-content/uploads/DSC03711-1-scaled.jpg",
  "https://trown.com.ar/wp-content/uploads/catalogo-61-scaled.jpg",
  "https://trown.com.ar/wp-content/uploads/DSC04599-1-scaled.jpg",
  "https://trown.com.ar/wp-content/uploads/DSC03883-scaled.jpg",
  "https://trown.com.ar/wp-content/uploads/DSC04582-1.jpg",
];

const MyCarousel = () => {
  return (
    <Carousel>
      {imagenes.map((imagen, index) => (
        <Carousel.Item key={index}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img className="d-block w-100" src={imagen} alt={`Imagen ${index + 1}`} style={{ minWidth: '200px', maxWidth: '600px', objectFit: 'cover' }} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
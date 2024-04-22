import React from 'react';

const Modal = ({ isOpen, closeModal, confirmPurchase }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <h2>Confirmar Compra</h2>
          <p>¿Estás seguro de que deseas realizar esta compra?</p>
          <div className="modal-buttons">
            <button onClick={closeModal}>Cancelar</button>
            <button onClick={confirmPurchase}>Confirmar</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        
      `}</style>
    </>
  );
};

export default Modal;
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, closeModal, confirmPurchase }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay">
        <div className="modal-custom">
          <h2>Confirmar Compra</h2>
          <p>¿Estás seguro de que deseas realizar esta compra?</p>
          <div className="modal-buttons">
            <button onClick={() => closeModal()}>Cancelar</button>
            <button onClick={() => confirmPurchase()}>Confirmar</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99;
        }
        
        .modal-custom {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 500px;
          z-index: 999;
        }
    
        h2 {
          margin-top: 0;
        }
    
        .modal-buttons {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }
    
        button {
          padding: 8px 16px;
          font-size: 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          outline: none;
          background-color: #007BFF;
          color: white;
          transition: background-color 0.3s;
        }
    
        button:hover {
          background-color: #0056b3;
        }
    
        button:active {
          background-color: #00408d;
        }
      `}</style>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;

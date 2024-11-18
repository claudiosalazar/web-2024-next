import React from 'react';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageTitulo: string;
  imageDescripcion: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, imageTitulo, imageDescripcion, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-portafolio" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Selected" className="img-fluid" />
        <div className="info">
          <h2>{imageTitulo}</h2>
          <p>{imageDescripcion}</p>
        </div>
        <button className="cerrar-modal" onClick={onClose}>
          <div className='icono-cerrar'></div>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
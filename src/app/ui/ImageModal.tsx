import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageTitulo: React.ReactNode;
  imageDescripcion: React.ReactNode;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageSrc, imageTitulo, imageDescripcion, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-portafolio"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeIn', duration: 0.3 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ ease: 'easeIn', duration: 0.3 }}
          >
            <img src={imageSrc} alt={typeof imageTitulo === 'string' ? imageTitulo : ''} className="img-fluid" />
            {(imageTitulo || imageDescripcion) && (
              <div className="info">
                {imageTitulo && <span className='titulo-modal'>{imageTitulo}</span>}
                {imageDescripcion && <span>{imageDescripcion}</span>}
              </div>
            )}
            <button className="cerrar-modal" onClick={onClose}>
              <div className='icono-cerrar'></div>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
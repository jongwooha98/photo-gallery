import React from 'react';
import { motion } from 'framer-motion';

function Modal({ selectedImg, setSelectedImg }) {
  const handleClick = (event) => {
    if (event.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={selectedImg}
        alt=""
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}

export default Modal;

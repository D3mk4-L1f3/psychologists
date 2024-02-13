import { useState } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import { Modal } from '../Modal/Modal';

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleModalOpen = test => {
    setIsModalOpen(true);
    setModalContent(test);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <Header
        openModal={handleModalOpen}
        closeModal={handleModalClose}
        // isLogged={isLogged}
      />
      <Hero />
      <Modal
        isModalOpen={isModalOpen}
        onCloseModal={handleModalClose}
        modalContent={modalContent}
      />
    </>
  );
};

export default Layout;

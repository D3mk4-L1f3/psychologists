import { Suspense, useState } from 'react';
import Header from '../Header/Header';
import { Modal } from '../Modal/Modal';
import Loader from '../Shared/Loader/Loader';
import { Outlet } from 'react-router-dom';

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
      <Suspense fallback={<Loader variant="access-modal" />}>
        <Outlet />
      </Suspense>
      <Modal
        isModalOpen={isModalOpen}
        onCloseModal={handleModalClose}
        modalContent={modalContent}
      />
    </>
  );
};

export default Layout;

import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useState } from 'react';
import Layout from './components/Layout/Layout';
import { Modal } from './components/Modal/Modal';

function App() {
  const HomePage = lazy(() => import('./pages/Home'));
  const PsychologistsPage = lazy(() => import('./pages/Psychologists'));
  const FavoritesPage = lazy(() => import('./pages/Favorite'));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  console.log(modalContent);

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
      <Routes>
        <Route
          path="/"
          element={
            <Layout openModal={handleModalOpen} closeModal={handleModalClose} />
          }
        >
          <Route
            index
            element={
              <HomePage
                openModal={handleModalOpen}
                closeModal={handleModalClose}
              />
            }
          />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Modal
        isModalOpen={isModalOpen}
        onCloseModal={handleModalClose}
        modalContent={modalContent}
      />
    </>
  );
}

export default App;

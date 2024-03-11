/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import Layout from './components/Layout/Layout';
import { Modal } from './components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh, selectToken } from './redux/auth/selectors';
import { tokenRefresh } from './redux/auth/operations';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const HomePage = lazy(() => import('./pages/Home'));
  const PsychologistsPage = lazy(() => import('./pages/Psychologists'));
  const FavoritesPage = lazy(() => import('./pages/Favorite'));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const dispatch = useDispatch();
  const refresh = useSelector(selectIsRefresh);
  const token = useSelector(selectToken);
  const access = !!token && refresh;

  const handleModalOpen = content => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  useEffect(() => {
    if (access) {
      dispatch(tokenRefresh(token));
    }
  }, [access]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout openModal={handleModalOpen} closeModal={handleModalClose} />
          }
        >
          <Route index element={<HomePage />} />
          <Route
            path="/psychologists"
            element={
              <PrivateRoute>
                <PsychologistsPage
                  openModal={handleModalOpen}
                  closeModal={handleModalClose}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
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

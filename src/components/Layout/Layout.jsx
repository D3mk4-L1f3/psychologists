/* eslint-disable react/prop-types */
import { Suspense } from 'react';
import Header from '../Header/Header';
import Loader from '../Shared/Loader/Loader';
import { Outlet } from 'react-router-dom';

const Layout = ({ openModal, closeModal }) => {
  return (
    <>
      <Header
        openModal={openModal}
        closeModal={closeModal}
        // isLogged={isLogged}
      />
      <Suspense fallback={<Loader variant="access-modal" />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;

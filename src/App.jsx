import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout';

function App() {
  const HomePage = lazy(() => import('./pages/Home'));
  const PsychologistsPage = lazy(() => import('./pages/Psychologists'));
  const FavoritesPage = lazy(() => import('./pages/Favorite'));

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

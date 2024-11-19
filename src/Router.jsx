import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import HousingSheet from './pages/HousingSheet';
import ErrorPage from './pages/ErrorPage';

/**
 Chaque chemin (path) est associé à un composant spécifique,
  avec une gestion des paramètres dynamiques (:housingId) et une route par défaut pour les erreurs 404.
 */

const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path='/apropos' element={<AboutUs />} />
    <Route path='/logement/:housingId' element={<HousingSheet />} />
    <Route
      path='/erreur404'
      element={
        <ErrorPage
          errorType={'404'}
          errorMessage={`Oups! La page que vous demandez n'existe pas.`}
        />
      }
    />
    <Route
      path='*'
      element={
        <ErrorPage
          errorType={'404'}
          errorMessage={`Oups! La page que vous demandez n'existe pas.`}
        />
      }
    />
  </Routes>
);

export default Router;

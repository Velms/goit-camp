import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Campers = lazy(() => import('pages/Campers/Campers'));
// const CamperDetails = lazy(() =>
//   import('components/CamperDetails/CamperDetails')
// );
// const Features = lazy(() => import('./Features/Features'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Campers />} />
        {/* <Route path="catalog/:catalogId" element={<CamperDetails />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

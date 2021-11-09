import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTE } from 'constants/routes.js';
import Layout from 'components/Layout/Layout.js';
const Home = lazy(() => import('pages/Home'));
const Details = lazy(() => import('pages/Details'));
const Explore = lazy(() => import('pages/Explore'));
const Search = lazy(() => import('pages/Search'));

const App = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Layout>
        <Routes>
          <Route path={ROUTE.HOME} element={<Home />} />
          <Route path={ROUTE.EXPLORE} element={<Explore />} />
          <Route path={ROUTE.DETAIL} element={<Details />} />
          <Route path={ROUTE.SEARCH} element={<Search />} />
          <Route path='/' element={<Navigate replace to={ROUTE.HOME} />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;

import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import './App.css';
const Home = lazy(() => import('./pages/Home/Home'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));

// const test = import.meta.env.VITE_API_TEST;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
export default App;

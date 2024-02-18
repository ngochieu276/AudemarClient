import { lazy } from 'react';
import Layout from '../layout';
import Mainpage from '../page/main-page';
const Collection = lazy(() => import('../page/collection'));
const Stories = lazy(() => import('../page/stories'));
const Boutiques = lazy(() => import('../page/Boutiques'));

import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Mainpage />} />
      <Route path="collection" element={<Collection />} />
      <Route path="stories" element={<Stories />} />
      <Route path="boutiques" element={<Boutiques />} />
    </Route>
  )
);

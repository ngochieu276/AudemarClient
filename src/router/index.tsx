import { lazy } from 'react';
import Layout from 'layout';
const Mainpage = lazy(() => import('page/main-page'));
const Collection = lazy(() => import('page/collection'));
const Stories = lazy(() => import('page/stories'));
const Boutiques = lazy(() => import('page/boutiques'));
const Products = lazy(() => import('page/products'));
import ProductDetail from 'page/products/product-detail';

import { Route, createBrowserRouter, createRoutesFromElements, useRouteError } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route path="" element={<Mainpage />} />
      <Route path="collection" element={<Collection />} />
      <Route path="stories" element={<Stories />} />
      <Route path="boutiques" element={<Boutiques />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<ProductDetail />} />
    </Route>
  )
);

function ErrorBoundary() {
  let error = useRouteError();
  // Uncaught ReferenceError: path is not defined
  return <div>Path is not defined!</div>;
}

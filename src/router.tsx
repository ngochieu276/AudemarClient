import Layout from "./layout";
import Collection from "./page/collection";
import Mainpage from "./page/main-page";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Mainpage />} />
      <Route path="collection" element={<Collection />} />
    </Route>
  )
);
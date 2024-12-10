// import "./App.scss";
// import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Favorites from "./pages/Favorites/index.js";
import Character from "./pages/character/index.js";
import Characters from "./pages/characters/index.js";
import { Navigate, redirect, useRoutes } from 'react-router-dom';

const routeConfig = [
  { path: '/', element: <Characters /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/character', element: <Navigate to="/" />, skipLazyload: true },
  { path: '/character/:id', element: <Character /> },
  { path: '*', element: <Characters /> },
  // Add more route configurations as needed
];

function App() {
  const routeResult = useRoutes(routeConfig);
  return routeResult;
}

export default App;

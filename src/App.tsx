// import "./App.scss";
// import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Favorites from "./pages/Favorites/index.js";
import Character from "./pages/character/index.js";
import Characters from "./pages/characters/index.js";
import { useRoutes } from 'react-router-dom';

const routeConfig = [
  { path: '/', element: <Layout /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/personajes', element: <Characters /> },
  { path: '/personajes/:id', element: <Character /> },
  { path: '*', element: <Layout /> },
  // Add more route configurations as needed
];

function App() {
  const routeResult = useRoutes(routeConfig);
  return routeResult;
}

export default App;

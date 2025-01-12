import Favorites from "./pages/Favorites/index.js";
import Characters from "./pages/characters/index.js";
import { Navigate, useRoutes } from 'react-router-dom';
import CharacterPage from "./pages/character/index.js";
import { Layout } from "./pages/Layout.js";
import { Children } from "react";

const routeConfig = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Characters /> },
      { path: '/favorites', element: <Favorites /> },
      { path: '/character', element: <Navigate to="/" />, skipLazyload: true },
      { path: '/character/:id', element: <CharacterPage /> },
    ]
  },
  { path: '*', element: <Navigate to="/" />, skipLazyload: true },

  // Add more route configurations as needed
];

function App() {
  const routeResult = useRoutes(routeConfig);
  return routeResult;
}

export default App;

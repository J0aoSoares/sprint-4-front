import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './rotas/Home.jsx';
import Error from './rotas/Error.jsx';
import Login from './rotas/Login.jsx';
import Cadastro from './rotas/Cadastro.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login />},
      { path: '/cadastro', element: <Cadastro />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
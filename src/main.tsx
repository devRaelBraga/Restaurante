import React from 'react'
import ReactDOM from 'react-dom/client'
import ClientHome from './ClientHome'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './reset.css'
import './index.css'
import Cardapio from './Cardapio';
import AdminHome from './AdminHome';
import Login from './Login';
import Cadastro from './Cadastro';
import LoginChef from './LoginChef';
import Pedidos from './Pedidos';
import Cadmesa from './Cadmesa';
import Pagamento from './Pagamento';
import Espera from './Espera';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientHome/>,
  },
  {
    path: "/cadmesa",
    element: <Cadmesa/>,
  },
  {
    path: "/cardapio/:cardapio",
    element: <Cardapio/>,
  },
  {
    path: "/pagamento",
    element: <Pagamento/>,
  },
  {
    path: "/espera",
    element: <Espera/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/loginchef",
    element: <LoginChef/>,
  },
  {
    path: "/pedidos",
    element: <Pedidos/>,
  },
  {
    path: "/admin/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/admin",
    element: <AdminHome/>,
  },
  {
    path: "/admin/cardapio",
    element: <ClientHome admin={true}/>,
  },
  {
    path: "/admin/cardapio/edit/:cardapio",
    element: <Cardapio admin={true}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

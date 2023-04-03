import { useState } from 'react'
import Chefe from './assets/chef.png'
import './clienthome.css'

function ClientHome({admin = false}) {

  return (
    <div className="client-home">
      <header className='header-home'>
        <h1>Restaurante</h1>
      </header>

      <div className='client-home-body'>
        <div className='holder-tipos-pratos'>
          <div className='div-tipos-pratos'>
            <button className='botao-clienthome' onClick={() => window.location.replace(admin == true ? "http://localhost:5173/admin/cardapio/edit/Entrada" :  "http://localhost:5173/cardapio/Entrada")}>Entrada</button>
            <button className='botao-clienthome' onClick={() => window.location.replace(admin == true ? "http://localhost:5173/admin/cardapio/edit/Principal" :  "http://localhost:5173/cardapio/Principal")}>Prato Principal</button>
            <button className='botao-clienthome' onClick={() => window.location.replace(admin == true ? "http://localhost:5173/admin/cardapio/edit/Sobremesa" :  "http://localhost:5173/cardapio/Sobremesa")}>Sobremesa</button>
            <button className='botao-clienthome' onClick={() => window.location.replace(admin == true ? "http://localhost:5173/admin/cardapio/edit/Bebidas" :  "http://localhost:5173/cardapio/Bebidas")}>Bebidas</button>
          </div>
          <img src={Chefe} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ClientHome

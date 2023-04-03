import { useState } from 'react'
import Chefe from './assets/chef.png'
import './clienthome.css'

export default function AdminHome() {

  return (
    <div className="client-home">
      <header className='header-home'>
        <h1>Restaurante</h1>
      </header>

      <div className='client-home-body'>
        <div className='holder-tipos-pratos'>
          <div className='div-tipos-pratos'>
            <button className='botao-clienthome' onClick={() => window.location.replace("http://localhost:5173/admin/cadastro")}>Cadastrar Usuário</button>
            <button className='botao-clienthome' onClick={() => window.location.replace("http://localhost:5173/admin/cardapio")}>Atualizar Cardápio</button>
          </div>
          <img src={Chefe} alt="" />
        </div>
      </div>
    </div>
  )
}


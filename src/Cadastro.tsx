import { useState } from 'react'
import Chefe from './assets/chef.png'
import './login.css'

export default function Cadastro() {

  return (
    <div className="login">
      <header className='header-home'>
        <h1>Restaurante</h1>
      </header>

      <div className='client-home-body'>
        <div className='holder-tipos-pratos'>
          <div className='input-holder'>
            <h2>Cadastro</h2>
            <input type="text" placeholder='Insira seu nome...'/>
            <input type="date" placeholder='Data de nascimento'/>
            <input type="text" placeholder='Insira o CPF/RG'/>
            <input type="text" placeholder='Insira seu email...'/>
            <input type="text" placeholder='Insira sua senha...'/>
            <button onClick={() => window.location.replace('http://localhost:5173/admin')}>CADASTRAR</button>
          </div>
          <img src={Chefe} alt="" />
        </div>
      </div>
    </div>
  )
}



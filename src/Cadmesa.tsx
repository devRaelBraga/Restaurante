import { useState } from 'react'
import Chefe from './assets/chef.png'
import './login.css'

export default function Cadmesa() {

  return (
    <div className="login">
      <header className='header-home'>
        <h1>Restaurante</h1>
      </header>

      <div className='client-home-body'>
        <div className='holder-tipos-pratos'>
          <div className='input-holder' style={{padding:'4vh'}}>
            <h2>Definir Mesa</h2>
            <input id='mesanum' type="number" placeholder='Insira o número da mesa'/>
            <button onClick={() => { localStorage.setItem('mesa', document.querySelector('#mesanum').value) ; window.location.replace('http://localhost:5173/')}}>Pronto</button>
          </div>

        </div>
      </div>
    </div>
  )
}



import { useState } from 'react'
import Chefe from './assets/chef.png'
import QR from './assets/qrcode.png'
import './clienthome.css'

function Espera({admin = false}) {
  
//   setTimeout( () => {window.location.replace('http://localhost:5173') }, 20000);
  return (
    <div className="client-home">
      <header className='header-home'>
        <h1>Restaurante</h1>
      </header>

      <div className='client-home-body'>
        <div className='holder-tipos-pratos'>
          <div className='div-tipos-pratos'>
            <p>O pedido foi enviado para a cozinha, aguarde por favor.</p>
          </div>
          <img src={Chefe} alt=""  style={{width:"200px", height:'fit-content'}}/>
          
        </div>
      </div>
    </div>
  )
}

export default Espera

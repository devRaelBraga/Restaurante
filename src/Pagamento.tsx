import { useState } from 'react'
import Chefe from './assets/chef.png'
import QR from './assets/qrcode.png'
import './clienthome.css'

function Pagamento({admin = false}) {
  
  setTimeout( () => {window.location.replace('http://localhost:5173/espera') }, 20000);
  return (
    <div className="client-home">
      <header className='header-home'>
        <h1>Restaurante</h1>
      </header>

      <div className='client-home-body'>
        <div className='holder-tipos-pratos'>
          <div className='div-tipos-pratos'>
            <p>Faça o pagamento no Código abaixo:</p>
            <img src={QR} style={{width:'80%', height:'fit-content'}} />
            <p>Valor: {Number(localStorage.getItem('total')).toFixed(2)}</p>
          </div>
          <img src={Chefe} alt="" style={{width:"400px", height:'fit-content'}} />
          
        </div>
      </div>
    </div>
  )
}

export default Pagamento

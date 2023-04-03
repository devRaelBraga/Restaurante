import { useState } from "react"
import Pedido from "./assets/components/Pedido"

export default function Pedidos() {
    const data = [
        {
            nome: 'Filé mignon com peixe assado firto coszijndsoiadjsaod asdjsajdsadsadnklsandlka',
            mesa: 2,
            preco: 50.98,
            obs: 'sem cebola e com muito arroz'
        },
        {
            nome: 'Filé mignon',
            mesa: 4,
            preco: 50.98,
            obs: 'sem cebola e com muito arroz'
        },
        {
            nome: 'Filé mignon',
            mesa: 5,
            preco: 50.98,
            obs: 'sem cebola e com muito arroz'
        },
        {
            nome: 'Filé mignon',
            mesa: 9,
            preco: 50.98,
            obs: 'sem cebola e com muito arroz'
        },
        {
            nome: 'Filé mignon',
            mesa: 6,
            preco: 50.98,
            obs: 'sem cebola e com muito arroz'
        },
        
    ]
    const [pedidos, setPedidos] = useState([...data])


  return (
    <div className="login">
      <header className='header-home'>
        <h1>Restaurante</h1>
      </header>

      <div className='client-home-body'>
        <div style={{width:'60vw', backgroundColor:'#767676', padding:'4vw', display:"flex", flexDirection:'column', gap:'4vh', borderRadius:'20px', marginBottom:'5vh'}}>
            {data.map(item => {
                return(
                    <Pedido nome={item.nome} preco={item.preco} mesa={item.mesa} obs={item.obs}></Pedido>
                )
                }
            )}
          
        </div>
      </div>
    </div>
  )
}



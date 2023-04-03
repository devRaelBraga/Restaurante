import { useState } from "react"


export default function Pedido({nome, preco, obs, className='', mesa}){
    const [pedido, setPedido] = useState('')


    return(
        <div className={className}>
            <div style={{display: "flex", justifyContent: "space-between", flexWrap:'wrap', backgroundColor:'#ededde', color:'black', padding:'2vh', borderRadius:'10px'}}>
                <p style={{fontSize:'1.7em', width:'100%'}}>{nome}</p>
                <div style={{display:'flex', width:'100%', justifyContent:'space-around',marginTop:'1.5vh', alignItems:'center'}}>
                    <p style={{fontSize:'1.5em'}}>Mesa</p>
                    <p style={{fontSize:'3em'}}>{mesa}</p>
                    <p style={{fontSize:'1.5em'}}>R$ {preco}</p>
                    <p style={{width:'28vw', height:'10vh', backgroundColor:'white', padding:'1vh',borderRadius:'10px'}}>{obs}</p>
                    <button onClick={() => setPedido('preparo')} style={{position:'relative', right:'0%', bottom:'5px', height:'10vh', width:'10vw',border:'1px solid black', cursor:'pointer', fontSize:'1.3em', borderRadius:'10px', color:`${pedido == 'preparo' ? 'white' : 'black'}` , backgroundColor:`${pedido == 'preparo' ? '#68b42d' : '#ffd14e'}`}}>{pedido == 'preparo' ? 'Finalizar' : 'Iniciar preparo'}</button>
                </div>
            </div>
        </div>
    )
}
import Cart from '../cart.png'

export default function Carrinho({qtd, className, setActive, active}){
    return(
        <div className={className} style={{cursor:'pointer'}} onClick={() => setActive(!active)}>
            <img src={Cart} style={{zIndex:1}}/>
            <div style={{borderRadius: '50%', marginTop: '-20px', marginLeft:'25px', zIndex:100, backgroundColor:'red', width: '1.4em', padding:'0.1em', height:'1.4em', display: 'flex', justifyContent:'center', alignItems:'center', position:'relative'}}>
                <p style={{width:'fit-content'}}>{qtd}</p>
            </div>
        </div>
    )
}
import setaIcon from '../seta.png'
import deleteIcon from '../delete.png'

export default function CarrinhoPopUp({carrinho, active, setActive, setCarrinho, setQtd, qtd}){
    if(carrinho == null){
        carrinho = []
    }
    let total = 0
    carrinho.map(item =>{
        total += item.qtd*item.preco
    })

    function deletePrato(nome){
        let newArr = [...carrinho]
        let newQtd = qtd
        carrinho.map(item =>{
            if(nome == item.nome){
                newArr.splice(carrinho.indexOf(item), 1)
                newQtd -= item.qtd
            }
        })
        console.log(newArr)
        
        setCarrinho(newArr)
        setQtd(newQtd)
        sessionStorage.setItem("carrinho", JSON.stringify(newArr))
        if(newArr.length == 0){
            console.log('oi')
            sessionStorage.removeItem("carrinho")
        }
        sessionStorage.setItem("qtd", (newQtd))
    }

    return(
        <div style={{display:`${active ? 'flex' : 'none'}` ,width:"100vw", height:"100vh", position:'fixed', backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:200}}>
            <div style={{backgroundColor:'rgb(223,223,223)', width:"60vw", height:`82vh`, position:'relative', left:"20%", top:'10%', borderRadius:'20px'}}>
            <h2 style={{color:'black', width:'100%', textAlign:'center', paddingTop:"2vh"}}>Carrinho</h2>
            <button onClick={() => setActive(!active)}  style={{backgroundColor:'azure', border:'none', borderRadius:'50%', height:'8vh', width:'8vh', marginLeft:'2vw', marginTop:'-1vw', cursor:'pointer'}}><img src={setaIcon}/></button>
                <div style={{width:"80%", marginLeft:'10%', display:"flex", flexDirection:'column', gap:'1.3vh'}}>
                    {carrinho.map(item =>{
                        return(
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <p style={{color:'black', fontSize:'1.7em'}}>{item.nome}</p>
                                <p style={{color:'black', fontSize:'1.7em'}}>R$ {item.preco.toFixed(2)}</p>
                                <div style={{display:'flex'}}>
                                    <p style={{color:'black', fontSize:'1.7em', verticalAlign:'middle'}}>{item.qtd}
                                    </p>
                                    <img src={deleteIcon} alt="" style={{marginTop:'-2vh', cursor:'pointer'}} onClick={() => deletePrato(item.nome)} />
                                </div>
                            </div>
                        )
                    })}
                    <textarea style={{color:'black', padding:'2vh', fontSize:'1.5em', backgroundColor:'white', borderRadius:'10px', resize:'none', height:'16vh'}} placeholder='Observações? Escreva aqui...'></textarea>
                    <p style={{color:'black', fontSize:'2em'}}>Total: R$ {total.toFixed(2)}</p>
                    <button style={{width:'16vw', height:'10vh', backgroundColor:'#68b42d', border:'none', cursor:'pointer', fontSize:'1.5em', position:'absolute', right:'5%', bottom:'5%', borderRadius:'10px'}} onClick={() => {setCarrinho([]); setQtd(0); setActive(false); localStorage.setItem('total', '' + total); window.location.replace('http://localhost:5173/pagamento')}} >Fazer Pedido</button>
                </div>
            </div>
        </div>
    )
}
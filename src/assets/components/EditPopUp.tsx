

export default function EditPopUp({active=false, setActive, setPopUp, setEdit, edit=true}){


    return(
        <div style={{display:`${active ? 'flex' : 'none'}` ,width:"100vw", height:"100vh", position:'fixed', backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:200}}>
            <div style={{backgroundColor:'rgb(223,223,223)', width:"60vw", height:"70vh", position:'relative', left:"20%", top:'15%', borderRadius:'20px'}}>
            <h2 style={{marginTop:'6vh',color:'black', width:'100%', textAlign:'center', paddingTop:"2vh", fontSize:'3em', fontWeight:'normal'}}>{edit ? 'Editar Prato': 'Novo Prato'}</h2>
                <div style={{width:"80%", marginLeft:'10%', display:"flex", flexDirection:'column', gap:'1.3vh', alignItems:'center'}}>
                    
                    <div style={{marginTop:'3vh', padding:'2vh', color:'black', backgroundColor:'white', width:'100%', borderRadius:'20px', display:'flex', flexDirection:'column'}}>
                        <div style={{display:'flex', alignItems:'center', fontSize:'1.3em'}}>
                            <p>Nome do prato:  </p>
                            <input type="text" placeholder="Prato 1" style={{marginLeft:'2vh', width:'100%' ,backgroundColor:'white', border:'1px solid black', padding:'1vh', color:'black', fontSize:'1.1em', fontWeight:"normal"}}/>
                        </div>
                        <div style={{display:'flex', alignItems:'center', fontSize:'1.3em', marginTop:'2vh'}}>
                            <p>Valor:  </p>
                            <input type="number" placeholder="7.99" style={{marginLeft:'2vh', width:'100%' ,backgroundColor:'white', border:'1px solid black', padding:'1vh', color:'black', fontSize:'1.1em', fontWeight:"normal"}}/>
                        </div>
                        <div style={{display:'flex', alignItems:'center', fontSize:'1.3em', marginTop:'2vh'}}>
                            <p>Ingredientes:  </p>
                            <input type="text" placeholder="Ingrediente 1, Ingrediente 2, Ingrediente 3..." style={{marginLeft:'2vh', width:'100%' ,backgroundColor:'white', border:'1px solid black', padding:'1vh', color:'black', fontSize:'1.1em', fontWeight:"normal"}}/>
                        </div>

                        {
                            edit == false ? 

                        <div style={{display:'flex', alignItems:'center', fontSize:'1.3em', marginTop:'2vh'}}>
                            <p>Tipo: </p>
                            <select name="opcaoprato" id="" style={{padding:'1vh', color:'black', backgroundColor:'white', marginLeft:'2vh', width:'100%'}}>
                                <option value="Entrada">Entrada</option>
                                <option value="Principal">Principal</option>
                                <option value="Sobremesa">Sobremesa</option>
                                <option value="Bebida">Bebida</option>
                            </select>
                        </div>
                        :
                        <></>
                        }

                        

                    </div>
                    <button style={{width:'24vw', height:'14vh', backgroundColor:'#809692', border:'none', cursor:'pointer', fontSize:'1.8em', position:'absolute', left:'5%', bottom:'5%', borderRadius:'10px', fontWeight:'bold'}} onClick={() => { setEdit(true) ;setActive(false)}} >Cancelar</button>
                    <button style={{width:'24vw', height:'14vh', backgroundColor:'#68b42d', border:'none', cursor:'pointer', fontSize:'1.8em', position:'absolute', right:'5%', bottom:'5%', borderRadius:'10px', fontWeight:'bold'}} onClick={() =>{ setEdit(true) ;setActive(false); setPopUp('editar')}}>Salvar</button>
                </div>
            </div>
        </div>
    )
}
import setaIcon from '../seta.png'

export default function DeletePopUp({active=false, setActive, setPopUp}){


    return(
        <div style={{display:`${active ? 'flex' : 'none'}` ,width:"100vw", height:"100vh", position:'fixed', backgroundColor:"rgba(0, 0, 0, 0.5)", zIndex:200}}>
            <div style={{backgroundColor:'rgb(223,223,223)', width:"60vw", height:"70vh", position:'relative', left:"20%", top:'15%', borderRadius:'20px'}}>
            <h2 style={{marginTop:'10vh',color:'black', width:'100%', textAlign:'center', paddingTop:"2vh", fontSize:'3em', fontWeight:'normal'}}>Tem certeza?</h2>
                <div style={{width:"80%", marginLeft:'10%', display:"flex", flexDirection:'column', gap:'1.3vh', alignItems:'center'}}>
                    
                    <p style={{color:'black', fontSize:'2em', width:'fit-content', marginTop:'15vh'}}>Após a exclusão, não será possível voltar atrás.</p>
                    <button style={{width:'24vw', height:'14vh', backgroundColor:'#809692', border:'none', cursor:'pointer', fontSize:'1.8em', position:'absolute', left:'5%', bottom:'5%', borderRadius:'10px', fontWeight:'bold'}} onClick={() => setActive(false)} >Cancelar</button>
                    <button style={{width:'24vw', height:'14vh', backgroundColor:'#dc4f46', border:'none', cursor:'pointer', fontSize:'1.8em', position:'absolute', right:'5%', bottom:'5%', borderRadius:'10px', fontWeight:'bold'}} onClick={() =>{setActive(false); setPopUp('excluir')}}>Excluir Prato</button>
                </div>
            </div>
        </div>
    )
}
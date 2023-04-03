import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Prato from './assets/components/Prato'
import addIcon from './assets/add.png'
import deleteIcon from './assets/delete.png'
import editIcon from './assets/edit.png'
import setaIcon from './assets/seta.png'
import './cardapio.css'
import Carrinho from './assets/components/Carrinho'
import CarrinhoPopUp from './assets/components/CarrinhoPopUp'
import DeletePopUp from './assets/components/DeletePopUp'
import PopUp from './assets/components/PopUp'
import EditPopUp from './assets/components/EditPopUp'

function Cardapio({admin = false}) {
  const [carrinhoActive, setCarrinhoActive] = useState(false)
  const [deleteActive, setDeleteActive] = useState(false)
  const [editActive, setEditActive] = useState(false)
  const [popUp, setPopUp] = useState('')
  const [qtd, setQtd] = useState(Number(sessionStorage.getItem("qtd")))
  const [carrinho, setCarrinho] = useState(JSON.parse(sessionStorage.getItem("carrinho")))
  const [edit, setEdit] = useState(true)
  const nomeCardapio = useParams().cardapio;

  const data = [
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato2",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato3",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato4",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato5",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
    {
      nome: "prato1",
      preco: 12,
      ingredientes: ["Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1", "Ingrediente1"]
    },
  ]

  function addOnCart(nome, preco){
    let found = 0;
    try {
      let newArr = [...carrinho]
      newArr.map(item => {
        if(item.nome == nome){
          found += 1;
          item.qtd += 1;
          setCarrinho(newArr)
        }
      })
      
      if(found == 0){
        setCarrinho([...carrinho, {nome: nome, preco: preco, qtd:1}])
      }
    } catch (error) {
      setCarrinho([{nome: nome, preco: preco, qtd:1}])
    }



    sessionStorage.setItem("carrinho", JSON.stringify(carrinho))
    sessionStorage.setItem("qtd", "" + (qtd + 1))
  }

  return (
    <div className="client-home">
      <PopUp active={popUp} setActive={setPopUp} titulo={popUp == 'excluir' ? 'Prato removido' : 'Prato salvo'} texto={popUp == 'excluir' ? 'O prato foi removido do cardápio e não está mais disponível' : ''}></PopUp>
      <EditPopUp edit={edit} setEdit={setEdit} active={editActive} setActive={setEditActive} setPopUp={setPopUp} ></EditPopUp>
      <DeletePopUp setActive={setDeleteActive} active={deleteActive} setPopUp={setPopUp}></DeletePopUp>
      <CarrinhoPopUp qtd={qtd} setQtd={setQtd} carrinho={carrinho} active={carrinhoActive} setActive={setCarrinhoActive} setCarrinho={setCarrinho}/>
      <header className='header-home'>
        <h1></h1>
        <h1>{nomeCardapio}</h1>
        {admin == true ? <h1></h1> : <Carrinho qtd={qtd} className='asdsada' active={carrinhoActive} setActive={setCarrinhoActive}/>}
      </header>

      <div className='cardapio-body'>
        <div className='holder-cardapio'>
          <button className='backButton' onClick={() => window.location.replace(admin == true ? 'http://localhost:5173/admin/cardapio': 'http://localhost:5173')}><img src={setaIcon}/></button>
          {data.map(item => {
            return(
              <div style={{display: "flex", width:'100%'}}>
                <Prato nome={item.nome} preco={item.preco.toFixed(2)} ingredientes={item.ingredientes} className="prato"></Prato>
                {admin == true ? <div style={{display:'flex', marginTop:'-15px', marginLeft:'10px', cursor:'pointer'}}><img src={editIcon} onClick={() => setEditActive(true)}></img> <img src={deleteIcon} style={{marginTop:'-10px', cursor:'pointer'}} onClick={() => setDeleteActive(true)}></img></div> :
                  <img className='addIcon' src={addIcon} onClick={() => {setQtd(qtd + 1); addOnCart(item.nome, item.preco)}}/>}
              </div>
            )
          })}
          {admin == true ? <img src={addIcon} style={{cursor:'pointer'}} onClick={() =>{setEdit(false); setEditActive(true)}}   /> : <></>}
          

        </div>
      </div>
    </div>
  )
}

export default Cardapio



export default function Prato({nome, preco, ingredientes, className, admin = false}){
    return(
        <div className={className}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <p>{nome}</p>
                <p>R$ {preco}</p>
            </div>
            <p>{ingredientes.map(item =>{
                return item + ', '
            })}</p>
        </div>
    )
}
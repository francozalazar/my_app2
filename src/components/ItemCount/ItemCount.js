import React, {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {


    const [value, setValue] = useState(initial)

    const handleSuma = (valor)=>{
        value < stock ? setValue(previo => previo+ valor): console.log('compra maxima posible')
    }

    const handleResta =(valor)=>{
        value > initial ? setValue(estadoPrevio => estadoPrevio - valor) : console.log('compra minima posible')
    }

    return (
        <div>
        <p>{value}</p>    
        
        <div><button className="button-count" onClick={()=>handleSuma(1)}>+</button>
        <button className="button-count" onClick={()=>handleResta(1)}>-</button>
        </div>
        <button className="button-count" onClick={()=>onAdd(value)}>Agregar al carrito</button>
        
        </div>
    )
}

export default ItemCount
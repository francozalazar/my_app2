import {useState} from 'react';
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext';
import './ItemDetail.css';

function ItemDetail({item}) {
 
  const [irCarrito, setIrCarrito] = useState(true)
  const {cartList, agregarAlCarrito}=useCartContext()

  function onAdd(cant){
      setIrCarrito(false)
      console.log(cant)
      agregarAlCarrito({...item, cantidad:cant})
  }

  console.log(cartList)
    return (
        <div key={item.id}>
            <p> Producto: {item.nombre}</p>
            <p> Descripcion: {item.descripcion}</p>
            <p>
                 <img className='imgDetail' src={item.img} alt={item.alt} />
            </p>
            <p>precio: ${item.precio}</p>
              {irCarrito ? <ItemCount  stock ={item.stock} initial={1} onAdd={onAdd}/> 
                         :<Link to="/cart"><button className="button-cart">Ir al carrito</button></Link>
                   }
            
           
        </div>
    )
}

export default ItemDetail
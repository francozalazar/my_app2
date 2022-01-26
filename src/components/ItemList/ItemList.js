import React from 'react'
import Item from '../Item/Item'
import './ItemList.css';

function ItemList({productos}) {
    return (
        <div className="productGrid">
            
        {productos.map((prod)=> <Item key={prod.id} prod={prod} />)        }
        </div>
    )
}

export default ItemList
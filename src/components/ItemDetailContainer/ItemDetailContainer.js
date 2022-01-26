import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

import {doc, getDoc, getFirestore} from 'firebase/firestore'


function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    const {idProd} = useParams()
 
    useEffect(()=>{
        const db= getFirestore()
        const queryDb = doc(db, 'productos', idProd)
        getDoc(queryDb)
        .then(resp=>setItem({id: resp.id, ...resp.data()}))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    
    },[idProd])

    
    return (
        <div className ="container">
            <h1>Detalle de producto </h1>
            {loading ? <div className="preCarga"></div>
            :  <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer
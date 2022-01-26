import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import ItemList from '../ItemList/ItemList'

import {getDocs, getFirestore, collection, query, where} from 'firebase/firestore'

function ItemListContainer({greeting}) {
    const [productos, setProductos]=useState([])
    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()

     useEffect(()=>{
      if (idCategoria) {
        const db= getFirestore()
     
        const queryCollection = query(collection(db, 'productos'), where('categoria', '==', idCategoria));
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))

        }else {
                const db= getFirestore()
                const queryCollection= collection(db, 'productos')
                getDocs(queryCollection)
                .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
                .catch(err =>console.log(err))
                .finally(()=>setLoading(false))

        
     }},[idCategoria])


    
    return (
        <main className ="container">
            <h1>{greeting}</h1>
            {loading ? <div className="preCarga"></div>
            : <ItemList productos={productos} />
            }
           
        </main>
    )
}

export default ItemListContainer
    

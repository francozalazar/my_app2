import React from 'react'
import './BuyerForm.css';
import {Link} from 'react-router-dom'
import {addDoc, collection, getFirestore, Timestamp} from 'firebase/firestore'
import { useState } from "react";
import { useCartContext } from "../../context/CartContext"

function BuyerForm() {
    const {cartList, borrarCarrito, sumarPrecios} =useCartContext() 
    


    const [idOrder, setidOrder] = useState("")
    const [dataForm, setDataForm] = useState({
        name:"", phone:"", email:""
    })
 
    const handlerChange = (e)=>{
         setDataForm({...dataForm, 
                     [e.target.name]:e.target.value})
    }
     console.log(dataForm)
 
     const generarOrden = (e)=>{
         e.preventDefault()

        let order= {}       
         order.date = Timestamp.fromDate(new Date())
         order.buyer= dataForm
         order.total = sumarPrecios()
 
         order.items = cartList.map( cartItem =>{
             const id = cartItem.id;
             const nombre = cartItem.nombre;
             const precio = cartItem.precio * cartItem.cantidad
 
             return {id, nombre, precio}
         })
         
 
 
         const db = getFirestore()
         const orderCollection = collection(db, 'orders')
         addDoc(orderCollection, order)
         .then(resp=>setidOrder(resp.id))
         .catch(err=> console.log(err))
         .finally(()=>{borrarCarrito()
             setDataForm({name:"", phone:"", email:""})}
                     )

         
            
     }
   
    return (
        <div className ="container">
            <h1>Formulario de compra</h1>
            
            <form className="form" onSubmit={generarOrden}
               onChange={handlerChange}>
              <input type="text" name="name" placeholder="Nombre"  value={dataForm.name} required /> <br />
              <input type="text" name="phone" placeholder="Telefono" value= {dataForm.phone} required /><br />
              <input type="email" name="email" placeholder="Ingrese su correo electronico" value={dataForm.email} required /><br />
              
              {cartList.length !== 0 
                  ? <><button className="buttonForm">Generar orden</button> 
                    <Link to="/cart"><button className="buttonForm">Volver al carrito</button></Link></>
                  : <button className="buttonForm" disabled>Generar orden</button> }


          </form>
               
            {idOrder.length !== 0 && <> <p>Compra finalizada. La orden es {idOrder}</p>
                                    <p><Link to="/" className="enlaceContinuar"> Realizar otra  compra </Link></p> </>}
       
        </div>
    )
}

export default BuyerForm
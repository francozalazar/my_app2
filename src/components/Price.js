import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
export const TotalPrice = (() => {
    const [totalPrice, setTotalPrice] = useState(0)
    const { cartList } = useCartContext();
    useEffect (() => {
        let price = 0;
        cartList.forEach(prod => {
            prod.price += prod.stock
        });
        setTotalPrice(price)
    }, [cartList])


    return (
        <p>Precio: AR$ {totalPrice}</p>
        )
    
    
    })
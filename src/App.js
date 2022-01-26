 import logo from './logo.svg';
import './App.css';
import  ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart'



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div className="App">
    <NavBar/>
                      <Routes>
                          <Route exact path="/" element={<ItemListContainer/>} />
                          <Route exact path="/categoria/:idCategoria" element={<ItemListContainer/>} />
                          <Route exact path="/detalle/:id" element={<ItemDetailContainer/>} />
                          <Route path='/React/cart' element={<Cart />}></Route>
                      </Routes>
            </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}
export default App
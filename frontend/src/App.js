import './App.css';
import React ,{useEffect}  from 'react';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './actions/productsAction';


function App() {
  const productList=useSelector(state=>state.productList);
  const {products,loading,error}=productList;
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(listProducts());
},[])
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }

  return loading ? <div>Loading...</div> :
    error ? <div>error</div> :
  (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
            <button className="brand-button" onClick={openMenu} >
                &#9776;
            </button>
            <Link to={'/'}>Amazona</Link>
        </div>
        <div>
            <span>Signin</span>
            <span>Cart</span>
        </div>
      </header>
    <aside className="sidebar">
        <h1>Shopping categories</h1>
        <button className="close-button" onClick={closeMenu} >X</button>
        <ul>
            <li>Pants</li>
            <li>Shirts</li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
            <Routes>
              <Route path='/products/:id' element={<ProductScreen products={products}/>} />  
              <Route path='/' exact={true} element={<HomeScreen products={products}/>}/>
            </Routes>
        </div>

    </main>
    <footer className="footer"><div>All rights reserved</div></footer>
  </div>
  </BrowserRouter>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import  HomeScreen from './screens/HomeScreen';
import  ProductScreen from './screens/ProductScreen';
import  CartScreen from './screens/CartScreen';
import  RegisterScreen from './screens/RegisterScreen';
import  ProductsScreen from './screens/ProductsScreen';
import SigninScreen from './screens/SigninScreen';
import {useSelector} from 'react-redux';

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const openMenu = () => {
    var sidebar = document.querySelector(".sidebar");
    var sidebar2 = document.querySelector(".sidebar2");
    sidebar.classList.toggle("open");
    sidebar2.classList.toggle("open"); 
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">E-Shop</Link>
        </div>
        <div className="header-links">
          <a href="card.html">Cart</a>
          {userInfo ? <Link to="/profile">{userInfo.name}</Link>:
            <Link to ="/signin">Sign In</Link>
          }
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <ul>
          <li><a href="index.html">Smartphones</a></li>
          <li><a href="index.html">Laptops</a></li>
          <li><a href="index.html">Tablets</a></li>
        </ul>
      </aside>
      <div className="sidebar2" onClick={openMenu}></div>
      <main className="main">
        <div className="content">
          <Route path="/products" component={ProductsScreen} />  
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route id="root" path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
        </div>
      </main>
      <footer className="footer">All Right Reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  const openMenu = () => {
    var sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("open");
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <a href="index.html">E-Shop</a>
        </div>
        <div className="header-links">
          <a href="card.html">Cart</a>
          <a href="signin.html">Sign In</a>
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
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="./images/p1.jpg" alt="Product"/>
                <div className="product-name"><a href="product.html">iPhone 11</a></div>
                <div className="product-brand">Apple</div>
                <div className="product-price">1800.99$</div>
                <div className="product-rating">4.5 stars (10 Reviews</div>
              </div>
            </li> 
            <li>
              <div className="product">
                <img className="product-image" src="./images/p1.jpg" alt="Product"/>
                <div className="product-name"><a href="product.html">iPhone 11</a></div>
                <div className="product-brand">Apple</div>
                <div className="product-price">1800.99$</div>
                <div className="product-rating">4.5 stars (10 Reviews</div>
              </div>
            </li> 
            <li>
              <div className="product">
                <img className="product-image" src="./images/p1.jpg" alt="Product"/>
                <div className="product-name"><a href="product.html">iPhone 11</a></div>
                <div className="product-brand">Apple</div>
                <div className="product-price">1800.99$</div>
                <div className="product-rating">4.5 stars (10 Reviews)</div>
              </div>
            </li> 
            <li>
              <div className="product">
                <img className="product-image" src="./images/p1.jpg" alt="Product"/>
                <div className="product-name"><a href="product.html">iPhone 11</a></div>
                <div className="product-brand">Apple</div>
                <div className="product-price">1800.99$</div>
                <div className="product-rating">4.5 stars (10 Reviews</div>
              </div>
            </li> 
          </ul>
        </div>
      </main>
      <footer className="footer">All Right Reserved</footer>
    </div>
  );
}

export default App;

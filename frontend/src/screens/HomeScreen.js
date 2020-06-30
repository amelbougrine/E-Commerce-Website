import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen (props) {
  //define a Hook
  const [products, setProduct] = useState([]);
  //fetch data from server
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProduct(data);
    }
    fetchData();
    return () => {
      //
    };
  }, [])
  return (
  <ul className="products">
      {products.map(product =>
      <li key={product.id}>
        <div className="product">
          <Link to={"/product/" + product.id}>
            <img className="product-image" src={product.image} alt="Product"/>
          </Link> 
          <div className="product-name">
            <Link to={"/product/" + product.id}>{product.name}</Link>
          </div>
          <div className="product-brand">{product.brande}</div>
          <div className="product-price">{product.price}$</div>
          <div className="product-rating">{product.rating} stars ({product.reviews} Reviews)</div>
        </div>
      </li> 
      )}
  </ul>
  )
}
export default HomeScreen;
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props) {
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();     
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
          //
        };
    },[])
    return (
        <div> 
            <Link to="/"><div className="back"><b>&#171;</b> Back</div></Link>
            {loading ? <div>Loading...</div> : error ? <div>{error}</div> :
                <div className="details"> 
                    <div className="details-image"><img src={product.image} alt="product"/></div>
                    <div className="details-info">
                        <ul>
                            <li><h4>{product.name}</h4></li>
                            <li>Price<b>{product.price}$</b></li>
                            <li>{product.rating} Stars ({product.reviews} Reviews)</li>
                            <li>Description:
                                <div>{product.description}</div>
                            </li>
                        </ul>       
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>Price: {product.price}$</li>
                            <li>Status: {product.status}</li>
                            <li> Qty <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </li>
                            <li><button className="button">Add to Cart</button></li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}
export default ProductScreen;
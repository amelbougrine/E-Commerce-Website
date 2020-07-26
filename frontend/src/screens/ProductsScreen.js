import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {signin} from '../actions/userActions';

function ProductScreen (props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brande, setBrande] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [reviews, setReviews] = useState('');
    const productSave = useSelector( state => state.productSave);
    const {loading: loadingSave, success: successSave,  error: errorSave} = productSave;
    const dispatch = useDispatch();     
    useEffect(() => {
  
        return () => {
          //
        };
    },[])
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({name, price}));
    }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li><h2>Create Product</h2></li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" onChange={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" id="image" onChange={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <button type="submit" className="button">Create</button>
                </li>
            </ul>
        </form>
    </div>
        
}
export default ProductScreen;
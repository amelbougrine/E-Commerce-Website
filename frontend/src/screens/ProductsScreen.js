import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {listProducts, saveProduct} from '../actions/productActions';

function ProductScreen (props) {
    const [modalVisible, setmodalVisibla] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const productList = useSelector( state => state.productList);
    const productSave = useSelector( state => state.productSave);
    const {loading, products, error} = productList;
    const {loading: loadingSave, success: successSave,  error: errorSave} = productSave;
    const dispatch = useDispatch();     
    useEffect(() => {
        dispatch(listProducts());
        return () => {
          //
        };
    },[])
    const openModal = (product) => {
        setModalVisible(true);
        setId(product.id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCountInStock(product.countInStock);
        setRating(product.rating);
        setReviews(product.reviews);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({name, price, image, brand, category, countInStock, description}));
    }
    return  <div className="content content-margined">
        <div className="product-header">
            <h3>Products</h3>
            <button onClick={()=>openModal({})}>Create Product</button>
        </div>
        {modalVisible &&
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li><h2>Create Product</h2></li>
                    <li>
                        {loadingSave && <div>Loading...</div>}
                        {errorSave && <div>{errorSave}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="price">Price</label>
                        <input type="text" name="price" id="price" onChange={(e) => setPrice(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="image">Image</label>
                        <input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="brand">Brand</label>
                        <input type="text" name="brand" id="brand" onChange={(e) => setBrand(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="countInStock">Count In Stock</label>
                        <input type="text" name="countInStock" id="countInStock" onChange={(e) => setCountInStock(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </li>
                    <li>
                        <button type="submit" className="button">Create</button>
                    </li>
                </ul>
            </form>
        </div>}
        <div className="product-list">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>pprice</th>
                        <th>Category</th>
                        <th>Brande</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            <button onClick={()=>openModal(product)}>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>   
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}
export default ProductScreen;
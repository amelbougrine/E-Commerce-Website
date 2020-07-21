import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {register} from '../actions/userActions';

function RegisterScreen (props) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector( state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();     
    useEffect(() => {
        if (userInfo) {
            props.history.push("/");
        }
        return () => {
          //
        };
    },[userInfo])
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(email, password));
    }
    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li><h2>Sign-In</h2></li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type="submit" className="button">Register</button>
                </li>
                <li>New To E-Shop ?</li>
                <li>
                    <Link to="/register" className="button secondary text-center">Create your E-Shop account</Link>
                </li>
            </ul>
        </form>
    </div>
        
}
export default RegisterScreen;
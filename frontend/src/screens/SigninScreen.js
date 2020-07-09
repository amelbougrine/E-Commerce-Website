import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'

function SigninScreen (props) {
   
    const dispatch = useDispatch();     
    useEffect(() => {
        return () => {
          //
        };
    },[])

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="emæil" onChange={setEmail} />
                </li>
            </ul>
        </form>
    </div>
        
}
export default SigninScreen;
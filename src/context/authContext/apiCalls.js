import axios from 'axios';
import {loginFailure, loginStart, loginSuccess, logout } from './AuthActions';
import {Navigate} from 'react-router-dom';
export const login = async (user, dispatch) => {
    dispatch(loginStart);
    try{    
        const res = await axios.post("auth/login", user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    }catch(err) {
        dispatch(loginFailure);
    }
}
export const Logout = (dispatch) => {
    dispatch(logout);
}
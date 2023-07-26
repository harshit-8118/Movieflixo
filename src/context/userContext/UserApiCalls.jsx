import {getUsersStart, getUsersSuccess, getUsersFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, createUserStart, createUserSuccess, createUserFailure, updateUserStart, updateUserSuccess, updateUserFailure} from './UserActions'
import axios from 'axios';

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try{
        const res = await axios.get('/users', {
            headers: {token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken}
        });
        dispatch(getUsersSuccess(res.data));
    }catch(err){
        dispatch(getUsersFailure());
    }
}

//create
export const createUser = async (user, dispatch) => {
    dispatch(createUserStart());
    try{
        const res = await axios.post(`/users/admin_register`, user, {
            headers: {token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken}
        });
        dispatch(createUserSuccess(res.data));
    }catch(err){
        dispatch(createUserFailure());
    }
}

// update
export const updateUser = async (user, dispatch) => {
    dispatch(updateUserStart());
    try{
        const res = await axios.put(`/users/${user._id}`, user, {
            headers: {token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken}
        });
        console.log('update successful')
        dispatch(updateUserSuccess(res.data));
    }catch(err){
        dispatch(updateUserFailure());
    }
}

//delete
export const deleteUser = async (userID, dispatch) => {
    dispatch(deleteUserStart());
    try{
        await axios.delete(`/users/${userID}`, {
            headers: {token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken}
        });
        dispatch(deleteUserSuccess(userID));
    }catch(err){
        dispatch(deleteUserFailure());
    }
}
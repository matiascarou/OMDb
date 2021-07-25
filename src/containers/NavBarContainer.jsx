import React from 'react'
import NavBar from '../components/NavBar'
import { useDispatch } from "react-redux";
import { setUsers } from '../store/users';
import { setSingleUser } from '../store/singleUser';
import axios from 'axios'

const FooterContainer = () => {

    const dispatch = useDispatch();

    const usersClickHandler = () => {
        axios.get('/api/users')
        .then((res) => {
            dispatch(setUsers(res.data))
        })
        dispatch(setSingleUser({}))
    }

    return <NavBar usersClickHandler={usersClickHandler}/>
}

export default FooterContainer
import {Box} from '@mui/material';
import Userform from './Userform';
import Usertable from './Usertable';
import axios from 'axios';
import React, {useEffect, useState} from 'react';


function User() {

    const [users, setUsers] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);
    const [tempUser, setTempUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get('http://localhost:3001/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const addUser = (data) => {
        axios.post('http://localhost:3001/createuser',data)
            .then(response => {
                getUser();
                setIsSubmit(false);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const updateUser = (data) => {
        setIsSubmit(true);
        const payload = {
            id: data.id,
            name: data.name
        };

        axios.put('http://localhost:3001/updateuser',payload)
            .then(response => {
                getUser();
                setIsSubmit(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteUser = (data) => {
        axios.delete(`http://localhost:3001/delete?id=${data.id}`, {id: data.id})
            .then(response => {
                getUser();
            })
            .catch(error => {
                console.log(error);
            });
    };


    return(
            <Box sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px'
            }}>
            <Userform 
                addUser={addUser} 
                isSubmit={isSubmit}
                tempUser={tempUser}
                isEdit={isEdit}
                updateUser={updateUser}/>

            <Usertable 
            users={users} 
            deleteUser={(data) =>  window.confirm('Are you sure?') && deleteUser(data)}
            selectedUser={data => {
                setTempUser(data);
                setIsEdit(true);
            }} />
            </Box>
    );
}

export default User;
import {Button, Grid, Input, Typography} from '@mui/material';
import { useEffect, useState } from 'react';

function Userform({ addUser, isSubmit, tempUser , isEdit, updateUser }) {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");


    useEffect(() => {
        setId(0);
        setName("");
    }, [isSubmit]);

    useEffect(() => {
        if (tempUser?.id && tempUser.id != 0) {  
        setId(tempUser.id);
        setName(tempUser.name);
        }
        if(!isEdit) {
            setId(0);
            setName("");
        }
    }, [isEdit])

    return(
        <Grid 
            container
            spacing={2}
            sx={{
                backgroundColor: "White",
                marginBottom: "30px",
                display: "block"
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{color: 'black'}}>
                    User Form
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{color: 'black'}}>
                <Typography component={'label'} htmlFor='id' sx={{
                    color: "black",
                    marginRight: "20px",
                    fontSize: "16px",
                    width: "100px",
                    display: "block"
                }}>ID</Typography>
                <Input
                    type='number'
                    name='id'
                    sx={{width: '400px'}}
                    value={id}
                    onChange={(e) => {setId(e.target.value)}}
                 />
            </Grid>
            <Grid item xs={12} sm={6} sx={{color: 'black'}}>
                <Typography component={'label'} htmlFor='id' sx={{
                    color: "black",
                    marginRight: "20px",
                    fontSize: "16px",
                    width: "100px",
                    display: "block"
                }}>Name</Typography>
                <Input
                    type='text'
                    id='name'
                    name='name'
                    sx={{width: '400px'}}
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                 />
                 <Button onClick={() => {isEdit ? updateUser({id, name}) : addUser({id, name})}}
                  sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: 'black',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6'
                    }
                  }}>
                    {
                        isEdit ? "Update" : "Add"
                    }
                 </Button>

            </Grid>
        </Grid>
    );
}

export default Userform;
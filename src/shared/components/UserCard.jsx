import React, { useState } from 'react';
import { Card, CardHeader, Avatar, IconButton, Typography, Container, Grid } from '@mui/material/';
import { grey } from '@mui/material/colors';
import { EditRounded as EditRoundedIcon, DeleteRounded as DeleteRoundedIcon } from '@mui/icons-material/';
import apiBaseUrl from '../utils/Api';
import Modal from './Modal';


export default function UserCard({ Data }) {
    const [active, setActive] = useState(false);
    const [userData, setUserData] = useState("");

    const toggle = () => {
        setActive(!active)
    }
    const deleteUser = async () => {
        const userData = {
            _id: Data._id,
            name: Data.name,
            country: Data.country,
            city: Data.city,
            password: Data.password,
            role: Data.role,
            shop: Data.shop,
        }
        try {
            const response = await fetch(`${apiBaseUrl}/deleteuser`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const user = await response.json();
            setUserData(user);
            toggle();
            

        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                            M
                        </Avatar>
                    }
                    action={
                        <>
                            <IconButton >
                                <EditRoundedIcon />
                            </IconButton>
                            <IconButton onClick={() => deleteUser()}>
                                < DeleteRoundedIcon color='Red' />
                            </IconButton></>

                    }
                    title={Data.name}
                    subheader={String(Data.status)}
                    subheaderTypographyProps={Data.status ? { color: 'green' } : { color: 'red' }}
                />

            </Card>
            <Modal active={active} toggle={toggle}>
                <Container maxWidth='sm'>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography>
                                {userData.Status}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                {userData.Description}
                            </Typography>
                        </Grid>
                    </Grid>

                </Container>
            </Modal>
        </>
    );
}
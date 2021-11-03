import React, { useState } from 'react';
import { Card, CardMedia, Typography, Grid, Button, Container } from '@mui/material/';
import logo from '../img/Logo.png'
import apiBaseUrl from '../utils/Api';
import Modal from './Modal';

export default function SellerCard({ Data }) {
    const [active, setActive] = useState(false);
    const [productData, setProductData] = useState("");

    const toggle = () => {
        setActive(!active)
    }
    const deleteProduct = async () => {
        const productData = {
            _id: Data._id,
        }
        try {
            const response = await fetch(`${apiBaseUrl}/deleteProduct`, {
                method: 'PATCH',
                body: JSON.stringify(productData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const product = await response.json();
            setProductData(product);
            toggle();
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Card>
                <Grid xs={12} container p={2}>
                    <Grid xs={4} item container>
                        <CardMedia
                            component="img"
                            sx={{ width: '90%', height: '90%', padding: 1 }}
                            image={logo}
                            alt="Live from space album cover"
                        />
                    </Grid>
                    <Grid xs={8} item container>
                        <Grid item xs={12}>
                            <Typography variant="h5"> {Data.name} </Typography>
                            <Typography variant="subtitle1">{Data.description}</Typography>
                        </Grid>
                        <Grid xs={12} container item spacing={5}>
                            <Grid item xs={3}>
                                <Typography variant="subtitle1" color="text.secondary" component="div">Price: {Data.price}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="subtitle1" color="text.secondary" component="div">Stock: {Data.stock}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="subtitle1" color={Data.active ? { color: 'green' } : { color: 'red' }} component="div" >Active: {String(Data.active)}</Typography>
                            </Grid>
                        </Grid>
                        <Grid xs={12} container item m='auto'>
                            <Grid item xs={6}>
                                <Button variant="outlined" color="primary">Editar</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" color="primary" onClick={() => deleteProduct()}>Eliminar</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            <Modal active={active} toggle={toggle}>
                <Container maxWidth='sm'>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography>
                                {productData.Status}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                {productData.Description}
                            </Typography>
                        </Grid>
                    </Grid>

                </Container>
            </Modal>
        </>

    )

}
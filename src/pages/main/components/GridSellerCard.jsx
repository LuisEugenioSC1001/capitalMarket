import {  Grid, Typography, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SellerCard from '../../../shared/components/SellerCard'
import apiBaseUrl from '../../../shared/utils/Api'
import { Refresh } from '@mui/icons-material'
import NewProduct from '../../../shared/components/NewProduct'

export default function GridSellerCard() {
    const shop = sessionStorage.getItem('User') === null ? JSON.parse(localStorage.getItem('User')).shop : JSON.parse(sessionStorage.getItem('User')).shop;
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/getNameshopProducts`, {
                method: 'POST',
                body: JSON.stringify({ nameShop: shop }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const datos = await response.json();
            if (datos.Status === "Failure") {
                setProducts([])
            } else {
                setProducts(datos.Data)
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <Grid container spacing={0.5} xs={12} p={1}>
                
                <Grid item xs={12} md={12} lg={12} >
                    <Typography variant='h4' align='center'>Products Inventory {shop}</Typography>
                </Grid>
                <Grid container item xs={12} md={12} lg={12} justifyContent='space-between'>
                    <NewProduct/>
                    <IconButton onClick={() => getProducts()}>
                        <Refresh color='primary' fontSize='large' />
                    </IconButton>
                </Grid>

                {products.length <= 0 ?
                    <Grid xs={12} container sx={{ alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
                        <Typography align='center' variant='h5'>You still don't have any products</Typography>
                    </Grid> :
                    <Grid container spacing={2} m={1} xs={12} sx={{ alignItems: 'center', justifyContent: 'center'}}>
                        {
                            products.map((item) => {
                                return (
                                    <Grid item xs={12} md={6} lg={4} >
                                        <SellerCard Data={item} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                }
            </Grid>
            
        </>
    )
}

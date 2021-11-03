import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../../shared/components/ProductsCard'
import apiBaseUrl from '../../../shared/utils/Api'



export default function GridUserCard() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/products`);
            const datos = await response.json();
            setProducts(datos.Data)
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <Grid container spacing={2} my={2} sx={{ alignItems: 'center', justifyContent: 'center'}}>
            {
                products.map((item) => {
                    return (
                        <Grid item xs={12} md={5} lg={2} >
                            <ProductCard Data={item} />
                        </Grid>
                    )

                })
            }
        </Grid>
    )
}

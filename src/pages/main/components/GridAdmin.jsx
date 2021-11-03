import { Grid, Switch, FormControlLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SellerCard from '../../../shared/components/SellerCard';
import UserCard from '../../../shared/components/UserCard'
import apiBaseUrl from '../../../shared/utils/Api'


export default function GridAdminCard() {
    const [stateSwitch, setStateSwitch] = useState(false);
    const handleStateSwitch = e => setStateSwitch(e.target.checked);

    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/users`);
            const datos = await response.json();
            setUsers(datos.Data)
        }
        catch (e) {
            console.log(e)
        }
    }
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
        getUsers();
    }, [])
    return (
        <Grid container spacing={0.5} xs={8} p={5}>
            <Grid item xs={12} md={12} lg={6} >
                <FormControlLabel
                    control={
                        <Switch checked={stateSwitch} onChange={handleStateSwitch} />
                    }
                    label={stateSwitch ? "Users" : "Products"}
                />

            </Grid>
            {stateSwitch ? <Grid item container spacing={2}>
                {
                    users.map((item) => {
                        return (
                            <Grid item xs={12} md={12} lg={6} >
                                <UserCard Data={item} />
                            </Grid>
                        )
                    })
                }
            </Grid> : <Grid item container spacing={2}>
                {
                    products.map((item) => {
                        return (
                            <Grid item xs={12} md={12} lg={6} >
                                <SellerCard Data={item} />
                            </Grid>
                        )
                    })
                }
            </Grid>}

        </Grid>
    )
}
